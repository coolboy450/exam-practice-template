# Receive scores in a Google Sheet (one-time, about 5 minutes)

Scores go into **your own** Google Sheet, through nobody else, free, with a normal Google account. This step is optional: without it the app still works and students see their results on their own device.

## 1. Create the Sheet and paste the script
1. Open https://sheets.new and name it, e.g. `Exam practice scores`.
2. Menu **Extensions → Apps Script**.
3. Delete the code in `Code.gs`, paste the whole of `apps-script/Code.gs` from this project, and save.
4. Pick the function `setup` at the top and press **Run**. Authorise with your account. If Google says the app is unverified, choose **Advanced → Go to (project)**: it is your own code. Two tabs, `ห้อง` (rooms) and `คะแนน` (scores), appear in the Sheet.

## 2. Add room codes
In the `ห้อง` tab, column A, under the header, add one code per row (e.g. `CLASS1`, `CLASS2`). A score is stored only if the student typed one of these codes; students still see their own result either way.

## 3. Deploy as a web app
1. **Deploy → New deployment**, gear icon → **Web app**.
2. *Execute as:* **Me**. *Who has access:* **Anyone**.
3. Deploy and copy the **Web app URL** (`https://script.google.com/macros/s/.../exec`).
4. Paste it into `assets/config.js` as `SHEET_URL`, commit, done.

"Anyone" only means the student's browser may send a score without logging in. It does **not** make your Sheet public.

## After editing the script
Deploy again: **Deploy → Manage deployments → pencil → Version: New version → Deploy**. The URL stays the same.

## What is stored
Time, room code, nickname, set, attempt number, score, time used, per-topic scores and the answers. No real names, phone numbers or emails.
