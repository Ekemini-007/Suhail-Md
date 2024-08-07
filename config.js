const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagVbj489inn4IaPif3z";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagVbj489inn4IaPif3z" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/eed7dbddb754226714c01.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙺𝙷𝙴𝙼𝙸" 


global.devs = "2348063961342" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348063961342";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/eed7dbddb754226714c01.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||https://telegra.ph/file/eed7dbddb754226714c01.jpg | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_34_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MixcbiAgICAgICAgNjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNixcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgyLFxuICAgICAgICA0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDc0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMCxcbiAgICAgICAgNTksXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgODcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDcwLFxuICAgICAgICA4MSxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI0LFxuICAgICAgICA1MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDcsXG4gICAgICAgIDQxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA5LFxuICAgICAgICA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDUzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEyLFxuICAgICAgICA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDYwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxTWwyVWNlYzVuT0Jwb054NUV0NWVJTlhYc256WS95THltQWEvaTdvOHhnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4VUtWelhjcVQtaVg5U0hHSnpJY1h3XCIsXG4gIFwicGhvbmVJZFwiOiBcImJlYzU3ZTNmLWNlMTktNDY2MC04ODUwLTMxMWU5Nzg2YTZjNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NSxcbiAgICAgIDk4LFxuICAgICAgMjE3LFxuICAgICAgMTEwLFxuICAgICAgMTU3LFxuICAgICAgODYsXG4gICAgICAxMzUsXG4gICAgICA4OSxcbiAgICAgIDExNSxcbiAgICAgIDEsXG4gICAgICA1NCxcbiAgICAgIDE3MyxcbiAgICAgIDE1MSxcbiAgICAgIDEyMCxcbiAgICAgIDE4NCxcbiAgICAgIDE0LFxuICAgICAgMTI3LFxuICAgICAgMTgzLFxuICAgICAgMTAyLFxuICAgICAgMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQsXG4gICAgICAxLFxuICAgICAgMjUyLFxuICAgICAgMCxcbiAgICAgIDIwMSxcbiAgICAgIDEzNSxcbiAgICAgIDYwLFxuICAgICAgOTIsXG4gICAgICA0MSxcbiAgICAgIDE5NCxcbiAgICAgIDQxLFxuICAgICAgNzIsXG4gICAgICAyMTksXG4gICAgICAzNixcbiAgICAgIDE1MyxcbiAgICAgIDk5LFxuICAgICAgMjQzLFxuICAgICAgMTYyLFxuICAgICAgMjI4LFxuICAgICAgMjMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRZTUFLRkxCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDYzOTYxMzQyOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZm68J2Zt/CdmbTwnZm88J2ZuHzihIrwnZOH4oSv8J2TjlwiLFxuICAgIFwibGlkXCI6IFwiMjEwNjIxNDIxMzcxNjI1OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTJRa2FVRkVOZlR6YlVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIazI4ZFhNcjR1ZEdWT1o1ZGUwL0pUampMbEJtd3NlNXQvclQzdCtPMGlvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInk1S0M1MFJZdVpnQXhxMGVQZTEvSEl6MEhXQ2o5S1dLVDNublJaWXIwWHBqUTJlTmVoTTQvczlGM1V6WDl6dTNNRnU0NzhDeGZTRXU5NkszSlcvQ0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIllUNE9TWWpvUFNUT0pmSmo4OUd0OGtBdS9iRUtjL0dlSU5udVJBUytVSDlEMm9pVDV0cndydnY4R2NEczlHM0lydWI5dUZUUFUzOWVSc2xILy9wU2dnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjM5NjEzNDI6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMwMzQwNzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFQ21cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVDbS5qc29uIjogIntcImtleURhdGFcIjpcIk5KTDhHbitRM3YwMHNod3lOT0EwOXV5bUJwNkVPdHkvbEpQTEY0YkFzSnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQyMDA1MjU1NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNjQ0MzQ1ODA4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝓚𝓗𝓔𝓜𝓘 』```", //
 
  author : process.env.PACK_AUTHER|| "𝙺𝙷𝙴𝙼𝙸|ℊ𝓇ℯ𝓎",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𒋝𒇲𒀼𒌨",
  ownername:process.env.OWNER_NAME|| "𝑲𝑯𝑬𝑴𝑰ᴳʳᵉʸ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  ""  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
