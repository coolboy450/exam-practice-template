/* ตั้งค่าของเว็บ — แก้ไฟล์นี้ไฟล์เดียวก็เปลี่ยนชื่อ ข้อความ และระดับได้
   Settings for your site: edit this one file to change the name, texts and levels. */
window.TIW_CONFIG = {
  // ลิงก์ Web app ของ Google Apps Script (ดู docs/SHEET.th.md) เว้นว่าง = ไม่ส่งคะแนนไปไหน
  // URL of your Google Apps Script web app (see docs/SHEET.en.md). Empty = scores stay on the student's device.
  SHEET_URL: '',

  SITE_NAME: 'ห้องฝึกข้อสอบ',          // ชื่อเว็บ (หัวหน้า / แท็บเบราว์เซอร์)
  SITE_MARK: 'ฝึก',                     // ตัวอักษร 1-3 ตัวในโลโก้สี่เหลี่ยม
  HOME_TITLE: 'ข้อสอบฝึกทำ',            // หัวข้อหน้าแรก (ถ้านักเรียนยังไม่ตั้งชื่อเล่น)
  HOME_LEAD: 'เลือกชุดที่อยากฝึก ทำให้เหมือนวันสอบจริง แล้วดูว่าหัวข้อไหนควรทบทวน',
  OWNER_NAME: 'ครู',                    // ชื่อที่ใช้ในหน้าตรวจข้อสอบ ("ส่งให้ ...")

  // ระดับ: ใส่ได้หลายระดับ (ถ้ามีระดับเดียว ปุ่มสลับระดับจะไม่โชว์)  key -> ชื่อที่โชว์
  // Levels. With a single level the level switch is hidden.
  LEVELS: { basic: 'ทั่วไป' },
  LEVEL_PICK_PREFIX: '',                // ข้อความหน้าชื่อระดับบนปุ่ม เช่น 'สอบเข้า '
  GROUP_PREFIX: '',                     // ข้อความหน้าชื่อกลุ่ม/โรงเรียน เช่น 'แนว'

  FOOTER_NOTE: 'ข้อสอบในเว็บนี้แต่งขึ้นเพื่อการฝึก',                       // ข้อความท้ายหน้า (บรรทัดที่ 1)
  FOOTER_PRIVACY: 'เก็บแค่ชื่อเล่นกับรหัสห้อง ไม่เก็บชื่อจริงหรือเบอร์โทร'   // ข้อความท้ายหน้า (บรรทัดที่ 2)
};
