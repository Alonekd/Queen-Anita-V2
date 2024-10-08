//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "alonekid@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "2348060834756";
global.owner = process.env.OWNER_NUMBER || "2348060834756";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU41bGh4azc0R0tSVHV3ZTNya2JQN016elJadExSdlhSbUNHQ0dMSDZXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTBIMk0wMVUyMFp1MGQzUWNKQjlNSFRuZ2tqLzduWWNPR3RScXl4UFdUUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTnE1QXNkeDI5ajRBZ2x1M3Ivb1daM1JZUkFFNy9kaTVCVGV0cmkyYTJnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1dExtOERVT1EwR0hlRVBGSUtDNk1ucXc2a1YwZXNRMjEyWk04SVFsVkE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndQakcvOTFNeVFSaGVCZXpQajlNYlhSbjArODRyRGNsWVM2ZG5Jd1h0RWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InV5UFJJdzJadUZubVIxc1JVTm9TVnQweTd3eTg2dFJtMldtc3hrVXZWeDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0RNWUFYT0ZUOE42cnVHY1RDMEJCN3REODc0RGpLNWx5ZGxEVUljQ3gxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkNXZVpWa1BBSzRYNGhDa216MFcvNGIyZEM2Um1VSzRIWUVLVVJyZ2dHdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii84NGtsMFdjcjVKL3VJa1NBQUJFSGgvUEhoRWlITVdHVlVVeCt6c3M2eGtyY1RlOW9SaTF5MmlVMDM0Szc3VXlDVTJ0L1lmZVRmWitKOGJaeUdiaGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ3LCJhZHZTZWNyZXRLZXkiOiJLTEw5YUpqOThwV0g2czhRYWV4MnFsQ3MwOE95WUVQYjIzUnBwRVp5WEowPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKRTRmYTJNelRxQ25WYXU1YWJoSkx3IiwicGhvbmVJZCI6Ijk2NjY4ZjU0LTI1N2ItNGU2NS04YjE5LWQxOTJkMWZkMGNmOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYdU8wUUpRcGdnZW0xWEt0clNoN2lJY2gzK1U9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1PVEV2amFER1AwR0J5UjlrRzIzUkJQTDJvdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0thVzM0QUhFUGZYbHJnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9pQWpELyt2eVFkTFZGbXE5dkZpdmdCR0FmaDdhRG93RU1hek1EbG42aVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImpRMTZyWjVaNWZ1cWhRa21HVDN2S0lHSjhKbi9ObTM2dWJoZDB3eEprVStmQWVVNUlXaG1lV3lMZGhyUFNlYmNhWmZnR3BvcFZWY2FIZWFacFVJSkJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJIS2N4OWpScUJYLy9kenBxMnh2Mms0QUhlcXZqUVJiWVk5VENYcFVlcURVK3pzNWJyR0xRdm5lRzNKcFYrVnhiQnBKVS9CUlRXL2lOQ3grb29SVUdoUT09In0sIm1lIjp7ImlkIjoiMjM0ODA2MDgzNDc1Njo3NkBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDYwODM0NzU2Ojc2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRvZ0l3Ly9yOGtIUzFSWnF2YnhZcjRBUmdINGUyZzZNQkRHc3pBNVorb20ifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODQyNDk2NH0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`ALONEKID™`",
  author: process.env.PACK_AUTHER || "ALONEKID",
  packname: process.env.PACK_NAME || "A L O N E K I D",
  botname: process.env.BOT_NAME || "ALONEKID MD",
  ownername: process.env.OWNER_NAME || "Lil screamz",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
