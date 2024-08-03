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
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
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
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/94c5a65a45e7a5afec68c.mp4" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_19_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA3NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDAsXG4gICAgICAgIDY0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDM1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODIsXG4gICAgICAgIDg0LFxuICAgICAgICA5NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTksXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDcyLFxuICAgICAgICA2OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNixcbiAgICAgICAgMTY1LFxuICAgICAgICA1MixcbiAgICAgICAgMTMzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDksXG4gICAgICAgIDk0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDgyLFxuICAgICAgICA5LFxuICAgICAgICA3NSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICA1MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNixcbiAgICAgICAgODIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICA2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDMwLFxuICAgICAgICAzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3LFxuICAgICAgICA1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDY2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDcyLFxuICAgICAgICA4MixcbiAgICAgICAgOTYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjF0aTEwVmxmWTZkZldIYXBvblhIYTJxdlZkeGZ5ZlZuYS9SeHE4U0daTDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA2Mzk2MTM0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0NEQ0EyODQwRDUyODAwMTBCRUE4OUY2RkVBQkJGNDVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjQ0MzQ5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpnbzVOa2xNU2Z5TjRvUlQ0eEUybFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDc3MTZkNDMtNTY0Zi00ZGJiLWIzMTAtNDg0ZGFhZDVjZGIzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY3LFxuICAgICAgMTcwLFxuICAgICAgMTg5LFxuICAgICAgNTksXG4gICAgICAxNDksXG4gICAgICAyNDcsXG4gICAgICAxMDMsXG4gICAgICAxMTksXG4gICAgICA2NCxcbiAgICAgIDg5LFxuICAgICAgMjA3LFxuICAgICAgMjA3LFxuICAgICAgMTg4LFxuICAgICAgMTI2LFxuICAgICAgMTE0LFxuICAgICAgMjUzLFxuICAgICAgMTAzLFxuICAgICAgMjEzLFxuICAgICAgOCxcbiAgICAgIDExNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MSxcbiAgICAgIDUsXG4gICAgICAxMjMsXG4gICAgICAxNzUsXG4gICAgICA5OCxcbiAgICAgIDk3LFxuICAgICAgMTc0LFxuICAgICAgMTk5LFxuICAgICAgMTc0LFxuICAgICAgMTg3LFxuICAgICAgMTk5LFxuICAgICAgMTMsXG4gICAgICA4MCxcbiAgICAgIDQxLFxuICAgICAgODcsXG4gICAgICA0OCxcbiAgICAgIDg4LFxuICAgICAgMTg0LFxuICAgICAgMTc5LFxuICAgICAgMTIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktBM1lHUzlHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDYzOTYxMzQyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZm68J2Zt/CdmbTwnZm88J2ZuHzihIrwnZOH4oSv8J2TjlwiLFxuICAgIFwibGlkXCI6IFwiMjEwNjIxNDIxMzcxNjI1OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTJRa2FVRkVQTHV0YlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIazI4ZFhNcjR1ZEdWT1o1ZGUwL0pUampMbEJtd3NlNXQvclQzdCtPMGlvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBSRUc4TUtaMkF0Q0I2VnlaeXFzcXV0SGFndEtIWk5YY3VSaTVURnhNbDJmUTVyWkUzQzkzQXJPR3RwMkdIanNXTXNxYXN5bmRaUTBaazl1TlhFTUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlEzdDdpWkszUmVJbTY4TVBvcTNIOTFVVGkra3hZZkR3TVZJc0ZDSHRBZUlNdzZSRVBpR0kwTjN3d2p6NmllbFNYUmFIWmlmWHVzbHU5bGUrUWtOcUR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjM5NjEzNDI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2NDQzNDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFQ21cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVDbS5qc29uIjogIntcImtleURhdGFcIjpcIk5KTDhHbitRM3YwMHNod3lOT0EwOXV5bUJwNkVPdHkvbEpQTEY0YkFzSnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQyMDA1MjU1NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNjQ0MzQ1ODA4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝓚𝓗𝓔𝓜𝓘 』```", //
 
  author : process.env.PACK_AUTHER|| "𝙆𝙃𝙀𝙈𝙄",
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
