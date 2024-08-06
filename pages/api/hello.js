// import { NextApiRequest, NextApiResponse } from "next";
// import { google } from 'googleapis'
// const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

// const auth = new google.auth.JWT(
//     process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
//     null,
//     (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
//     SCOPES
// );
// const sheets = google.sheets({
//     version: 'v4',
//     auth,
// });
// const SHEET_ID = '190TTCLGzGeiBdl9Ge35A5maaixsbh21hGrpsQTMR7Eo';

// export default async (req, res) => {
//     try {
//         if (req.method === "POST") {
//             let emailCorrect = true
//             if (!req.body.email.match(
//                 /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
//             )) {
//                 emailCorrect = false
//             }
//             if (emailCorrect) {
//                 const { data } = await sheets.spreadsheets.values.get({
//                     spreadsheetId: SHEET_ID,
//                     range: 'Newsletter',
//                     majorDimension: 'ROWS'
//                 });
//                 const foundValues = data.values.filter((newsletterSubscriber) => {
//                     const [email] = newsletterSubscriber;
//                     if (email === req.body.email) return true
//                     else return false
//                 })
//                 if (foundValues.length > 0) {
//                     res.json({ ok: false, error: "exists" })
//                     return
//                 }
//                 await sheets.spreadsheets.values.append({
//                     spreadsheetId: SHEET_ID,
//                     range: 'Newsletter',
//                     valueInputOption: "RAW",
//                     requestBody: {
//                         majorDimension: 'ROWS',
//                         values: [[req.body.email.trim()]],
//                     }
//                 });
//                 res.json({ ok: true })
//                 return
//             }
//             else {
//                 res.json({ ok: false, error: "field", emailCorrect })
//             }
//             return
//         }
//     }
//     catch (e) {
//         console.log(e)
//         res.json({ ok: false, error: e.message })
//         return
//     }
// }