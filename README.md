# ห้องฝึกข้อสอบ · Exam Practice Template

**ทำเว็บฝึกข้อสอบจับเวลาของตัวเองได้ใน 10 นาที ฟรี ไม่ต้องมีเซิร์ฟเวอร์ ไม่ต้องเขียนโค้ด**
Make your own timed exam-practice website in about 10 minutes. Free, static, no server, no build step.

👉 **[ลองใช้ / Live demo](https://coolboy450.github.io/exam-practice-template/)**

[ภาษาไทย](#ภาษาไทย) · [English](#english)

---

## ภาษาไทย

เทมเพลตนี้แยกมาจากแอป [ติวกับนูบ](https://github.com/coolboy450/tiwkapnoob) ที่ใช้ฝึกข้อสอบเข้า ม.1 / ม.4 เหมาะกับครู ติวเตอร์ หรือรุ่นพี่ที่อยากทำชุดข้อสอบให้น้องฝึกเอง

### ทำอะไรได้
- ข้อสอบปรนัยและเติมตัวเลข จับเวลาเหมือนสอบจริง ตรวจให้อัตโนมัติ
- เฉลยทีละขั้น + เคล็ดลับ + สูตรคณิตศาสตร์ (KaTeX)
- สรุปคะแนนแยกหัวข้อ ให้รู้ว่าควรทบทวนเรื่องไหน
- ประวัติการทำ อันดับในห้อง (ใช้ชื่อเล่น ไม่เก็บชื่อจริง)
- ส่งคะแนนเข้า Google Sheet ของคุณเอง (ไม่บังคับ) พร้อมหน้าตรวจสำหรับครู
- ใช้บนมือถือได้ เพิ่มลงหน้าจอหลักได้ (PWA)
- ไม่มีโฆษณา ไม่มีตัวติดตาม ไม่มีค่าใช้จ่าย

### เริ่มใช้ใน 10 นาที
1. กดปุ่ม **Use this template → Create a new repository** ด้านบนของหน้านี้ ตั้งชื่อ repo แล้วเลือก Public
2. ใน repo ใหม่ไปที่ **Settings → Pages** เลือก *Deploy from a branch* → `main` / `(root)` แล้วกด Save รอ 1–2 นาที จะได้ลิงก์ `https://ชื่อคุณ.github.io/ชื่อ-repo/`
3. แก้ไฟล์ [`assets/config.js`](assets/config.js) ตั้งชื่อเว็บ ข้อความ และระดับ (กดไอคอนดินสอบน GitHub แก้ได้เลย ไม่ต้องลงโปรแกรมอะไร)
4. เปลี่ยนข้อสอบตัวอย่างใน [`sets/`](sets/) เป็นข้อสอบของคุณ ดูรูปแบบที่ [docs/QUESTIONS.md](docs/QUESTIONS.md)
5. (ไม่บังคับ) อยากรับคะแนนเข้า Google Sheet ทำตาม [docs/SHEET.th.md](docs/SHEET.th.md)

### ตรวจข้อสอบก่อนอัปโหลด
```
node tools/check-sets.js
```
ตรวจ JSON ผิด, id ซ้ำ, เฉลยนอกช่วง, จำนวนข้อไม่ตรง GitHub Actions รันให้เองทุกครั้งที่ push

### ข้อสอบต้องเป็นของใคร
ข้อสอบตัวอย่างในเทมเพลตนี้แต่งขึ้นใหม่ ใช้ได้เลย ส่วนข้อสอบที่คุณใส่ ควรแต่งเองหรือมีสิทธิ์ใช้ อย่าคัดลอกข้อสอบจริงของโรงเรียนหรือสำนักพิมพ์มาเผยแพร่

---

## English

Spun out of [ติวกับนูบ](https://github.com/coolboy450/tiwkapnoob), a practice app for Thai M.1 / M.4 entrance exams. Good for teachers, tutors and older students who want to publish practice sets for others.

### What you get
- Multiple-choice and numeric questions, timed like the real thing, auto-marked
- Step-by-step solutions, tips and math formulas (KaTeX)
- Per-topic score breakdown so students know what to review
- Attempt history and a class ranking (nicknames only, no real names)
- Optional: scores sent to **your own** Google Sheet, plus a teacher review page
- Mobile friendly and installable (PWA)
- No ads, no trackers, no cost

### Quick start (about 10 minutes)
1. Click **Use this template → Create a new repository** at the top of this page (Public).
2. In your new repo: **Settings → Pages** → *Deploy from a branch* → `main` / `(root)` → Save. After a minute or two your site is at `https://YOUR-NAME.github.io/YOUR-REPO/`.
3. Edit [`assets/config.js`](assets/config.js) to set the site name, texts and levels. You can do it in the browser with the pencil icon.
4. Replace the sample sets in [`sets/`](sets/) with your own. Format: [docs/QUESTIONS.md](docs/QUESTIONS.md).
5. Optional: collect scores in Google Sheets with [docs/SHEET.en.md](docs/SHEET.en.md).

### Validate before pushing
```
node tools/check-sets.js
```
Catches invalid JSON, duplicate ids, answers out of range and question-count mismatches. A GitHub Action runs it on every push.

### Content
The sample questions are original and free to reuse. Only publish questions you wrote or have the right to use; do not copy real school or publisher exams.

### Preview locally
Any static server works, for example `npx serve` or `python -m http.server`. Opening `index.html` directly from disk will not load the question files.

---

## License
[MIT](LICENSE). Made by [noob_dev](https://github.com/coolboy450). If it helps you, a ⭐ makes my day · ถ้าชอบ กด ⭐ ให้หน่อยนะครับ
