// Hi Buddy,
// Edit Anything Here Except ones Indicated "DO NOT"...
const fs = require('fs');

if (fs.existsSync('config.env')) require('dotenv').config({ path: '/.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

global.caption = "*©𝟐𝟎𝟐𝟒 Kyng Mikel 𝐕𝟓*"; // Input Yours custom...(Maintain font for Flow)
global.api = "https://api.giftedtech.my.id/api"; // DO NOT Change this.... Change and Regret Later...
global.mongodb = "https://mongo.giftedtech.my.id"; // DO NOT Change this.... Change and Regret Later...
global.pluginsdb = "https://cmds.giftedtech.my.id"; // DO NOT Change this.... Change and Regret Later...
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Gifted~DyAT1IAK#kn8uEPdH0ciID2yosL8emeOpWbYp1_GrtlShJL6QB6Y", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTOLIKE_STATUS: process.env.AUTOLIKE_STATUS || "true",
AUTOLIKE_EMOJI: process.env.AUTOLIKE_EMOJI || "💜", //Input Yours custom...
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by Gifted-Md!", // // Input Yours custom...
MODE: process.env.MODE || "public",
OWNER_NUMBER: process.env.OWNER_NUMBER || "09012236357", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "kyng-mikel", // Input Yours custom...(Maintain font for Flow)
PREFIX: process.env.PREFIX || ".",
ANTIDELETE: process.env.ANTIDELETE || "false",
ANTICALL: process.env.ANTICALL || "false",
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Activated by kyng-Mikel. 📵 No Calls Allowed Dude!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "kyng-mikel", // Input Yours custom...(Maintain font for Flow)
BOT_PIC: process.env.BOT_PIC || "https://files.giftedtech.my.id/file/gifted-md.jpg", // You can Replace with yours...
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false",
AUTO_BLOCK: process.env.AUTO_BLOCK || "212,79", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "typing", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Nigeria", // Enter yours else leave blank if not sure
};

global.myName = "gifted-md"; // DO NOT Change this.... Change and Regret Later...
global.footer = "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ᴛᴇᴄʜ*"; // Input Yours custom...(Maintain font for Flow)

let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];require(file); })
// That's All...
