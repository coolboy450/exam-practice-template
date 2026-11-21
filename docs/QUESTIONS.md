# รูปแบบข้อสอบ · Question format

ข้อสอบทุกชุดเป็นไฟล์ JSON ในโฟลเดอร์ `sets/` และต้องลงทะเบียนใน `sets/index.json`
Every set is a JSON file in `sets/`, listed in `sets/index.json`.

## 1. `sets/index.json`

```json
{
  "schools": [
    { "id": "sample", "name": "ตัวอย่าง", "level": "basic" }
  ],
  "sets": [
    { "id": "sample-math-1", "school": "sample", "subject": "คณิตศาสตร์",
      "title": "ชุดตัวอย่าง", "file": "sample-math-1.json",
      "questions": 8, "minutes": 15, "reviewed": true }
  ]
}
```

- `schools` = กลุ่มของชุดข้อสอบ (โรงเรียน, ห้อง, คอร์ส ฯลฯ) · groups of sets (a school, class or course)
- `level` ต้องเป็นหนึ่งใน `LEVELS` ของ `assets/config.js` · must be a key of `LEVELS`
- `questions` ต้องตรงกับจำนวนข้อในไฟล์ · must equal the real number of questions
- `"reviewed": false` ซ่อนชุดจากนักเรียน (ดูได้ที่ `?preview=1`) · hides a draft set from students (open `?preview=1` to see it)

## 2. ไฟล์ชุดข้อสอบ · a set file

```json
{
  "id": "sample-math-1",
  "school": "sample",
  "subject": "คณิตศาสตร์",
  "title": "ชุดตัวอย่าง",
  "minutes": 15,
  "note": "ข้อความใต้ชื่อชุด (ไม่ใส่ก็ได้)",
  "questions": [ ... ]
}
```

### ปรนัย · multiple choice (`mc`)
```json
{ "id": "m-02", "topic": "จำนวน", "type": "mc",
  "text": "$\dfrac{3}{4} + \dfrac{1}{8}$ เท่ากับข้อใด",
  "choices": ["$\dfrac{4}{12}$", "$\dfrac{7}{8}$", "$\dfrac{5}{8}$", "$\dfrac{1}{2}$"],
  "answer": 1,
  "steps": ["ทำตัวส่วนให้เท่ากัน ...", "..."],
  "tip": "เคล็ดลับสั้นๆ (ไม่ใส่ก็ได้)" }
```
`answer` คือ **เลขตำแหน่งเริ่มจาก 0** (0 = ก, 1 = ข, 2 = ค, 3 = ง) · `answer` is the 0-based index of the right choice.

### เติมตัวเลข · numeric answer (`num`)
```json
{ "id": "m-05", "topic": "ร้อยละ", "type": "num",
  "text": "ซื้อเสื้อราคา 400 บาท ลด 15% จ่ายกี่บาท",
  "answer": "340", "unit": "บาท",
  "steps": ["ส่วนลด = ...", "..."] }
```
`answer` เป็นข้อความ รับทศนิยม (`6.45`) เศษส่วน (`3/4`) และจำนวนคละ (`1 1/2`) · accepts decimals, fractions and mixed numbers.

### สูตรคณิตศาสตร์ · math
ใส่ LaTeX ระหว่าง `$ ... $` และใน JSON ต้องใช้ `\` แทน `\` เช่น `"$\dfrac{1}{2}$"` · wrap LaTeX in `$...$`; in JSON write every backslash twice.

### ตรวจก่อนอัปโหลด · validate before you push
```
node tools/check-sets.js
```
ตรวจ JSON, id ซ้ำ, เฉลยนอกช่วง, จำนวนข้อไม่ตรง และเตือนเมื่อเฉลยกระจุกตำแหน่งเดียว · GitHub Actions รันให้อัตโนมัติทุกครั้งที่ push
