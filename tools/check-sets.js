#!/usr/bin/env node
// Validates sets/index.json and every set file. Run: node tools/check-sets.js
// Exit code 1 when something is wrong (used by the GitHub Action), warnings do not fail the run.
'use strict';
const fs = require('fs'), path = require('path');
const dir = path.join(__dirname, '..', 'sets');
const errors = [], warns = [];
const err = (m) => errors.push(m), warn = (m) => warns.push(m);
const read = (f) => { try { return JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')); } catch (e) { err(f + ': อ่านไม่ได้ / invalid JSON — ' + e.message); return null; } };

const idx = read('index.json');
if (!idx) { report(); }
const schools = new Map((idx.schools || []).map((s) => [s.id, s]));
const levels = (() => { try { const m = fs.readFileSync(path.join(__dirname, '..', 'assets', 'config.js'), 'utf8').match(/LEVELS:\s*\{([^}]*)\}/); return m ? [...m[1].matchAll(/(\w+)\s*:/g)].map((x) => x[1]) : []; } catch { return []; } })();
for (const s of idx.schools || []) {
  if (!s.id || !s.name) err('schools: ต้องมี id และ name');
  if (levels.length && !levels.includes(s.level)) err('schools[' + s.id + ']: level "' + s.level + '" ไม่อยู่ใน LEVELS ของ assets/config.js (' + levels.join(', ') + ')');
}
const seenSets = new Set();
for (const m of idx.sets || []) {
  const where = 'sets[' + m.id + ']';
  if (seenSets.has(m.id)) err(where + ': id ซ้ำ'); seenSets.add(m.id);
  if (!schools.has(m.school)) err(where + ': school "' + m.school + '" ไม่มีใน schools');
  if (!m.file || !fs.existsSync(path.join(dir, m.file))) { err(where + ': ไม่พบไฟล์ ' + m.file); continue; }
  const set = read(m.file); if (!set) continue;
  if (set.id !== m.id) err(m.file + ': id ในไฟล์ (' + set.id + ') ไม่ตรงกับ index (' + m.id + ')');
  const qs = set.questions || [];
  if (m.questions !== qs.length) err(where + ': index บอก ' + m.questions + ' ข้อ แต่ไฟล์มี ' + qs.length + ' ข้อ');
  if (!m.minutes && !set.minutes) warn(where + ': ไม่ได้ตั้งเวลา (minutes)');
  const ids = new Set(); const pos = [0, 0, 0, 0, 0, 0];
  qs.forEach((q, i) => {
    const at = m.file + ' ข้อ ' + (i + 1) + (q.id ? ' (' + q.id + ')' : '');
    if (!q.id) err(at + ': ไม่มี id'); else if (ids.has(q.id)) err(at + ': id ซ้ำ'); else ids.add(q.id);
    if (!q.text || !String(q.text).trim()) err(at + ': ไม่มีโจทย์ (text)');
    if (!q.topic) warn(at + ': ไม่มี topic จะไม่ถูกนับในสรุปรายหัวข้อ');
    if (!Array.isArray(q.steps) || !q.steps.length) warn(at + ': ไม่มีเฉลยทีละขั้น (steps)');
    if (q.type === 'mc') {
      if (!Array.isArray(q.choices) || q.choices.length < 2) err(at + ': ต้องมีตัวเลือกอย่างน้อย 2 ข้อ');
      else if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.choices.length) err(at + ': answer ต้องเป็นเลขตำแหน่งตัวเลือก 0.. ' + (q.choices.length - 1) + ' (ได้ ' + JSON.stringify(q.answer) + ')');
      else { pos[q.answer]++; if (new Set(q.choices.map(String)).size !== q.choices.length) err(at + ': มีตัวเลือกซ้ำกัน'); }
    } else if (q.type === 'num') {
      if (q.answer == null || String(q.answer).trim() === '') err(at + ': ไม่มี answer');
      else if (!/^-?(\d+(\.\d+)?|\d+\/\d+|\d+\s+\d+\/\d+)$/.test(String(q.answer).trim())) warn(at + ': answer "' + q.answer + '" ไม่ใช่ตัวเลข/เศษส่วนที่ระบบอ่านได้');
    } else err(at + ': type ต้องเป็น "mc" หรือ "num" (ได้ ' + JSON.stringify(q.type) + ')');
  });
  const mcN = pos.reduce((a, b) => a + b, 0), choicesMax = Math.max(...qs.filter((q) => q.type === 'mc').map((q) => (q.choices || []).length), 0);
  if (mcN >= 8) { const top = Math.max(...pos.slice(0, choicesMax)); if (top / mcN > 0.5) warn(m.file + ': เฉลยกระจุกอยู่ตำแหน่งเดียว (' + Math.round((top / mcN) * 100) + '%) ลองสลับตำแหน่งตัวเลือก'); }
}
for (const f of fs.readdirSync(dir)) if (f.endsWith('.json') && f !== 'index.json' && !(idx.sets || []).some((m) => m.file === f)) warn(f + ': มีไฟล์แต่ไม่ได้ลงใน sets/index.json');
report();
function report() {
  warns.forEach((w) => console.log('⚠  ' + w));
  errors.forEach((e) => console.log('✗  ' + e));
  console.log(errors.length ? '\nไม่ผ่าน / FAILED: ' + errors.length + ' error(s), ' + warns.length + ' warning(s)' : '\nผ่าน / OK — ' + (idx.sets || []).length + ' ชุด, ' + warns.length + ' warning(s)');
  process.exit(errors.length ? 1 : 0);
}
