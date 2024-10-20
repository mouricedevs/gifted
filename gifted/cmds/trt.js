import config from '../../set.cjs';
import Tesseract from 'tesseract.js';
import translate from 'translate-google-api';
import { writeFile } from 'fs/promises';

const translateCommand = async (m, sock, config) => {
  
  const prefixMatch = m.body.match(/^[+×÷=/_<>[\]!@#.£%^&*()\-"'1234567890?,°€£^:;?¿‽】〕」』【〔「『<>_${}\|`《○♡○¡☆《●●■◇¡¤▪︎•°~♡●♧₩$€○》☆¡Abcdefghijklmonpqrstuvwxyz]/i); 
  const prefix = prefixMatch ? prefixMatch[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const args = m.body.slice(prefix.length + cmd.length).trim().split(' ');


  const validCommands = ['translate', 'trans', 'transl', 'trt'];

   if (validCommands.includes(cmd)) {
    const targetLang = args[0];
    const text = args.slice(1).join(' ');

    if (m.quoted) {
      if (m.quoted.mtype === 'imageMessage') {
        try {
          const media = await m.quoted.download(); // Download the media from the quoted message
          if (!media) throw new Error('Failed to download media.');

          const filePath = `./${Date.now()}.png`;
          await writeFile(filePath, media); // Save the downloaded media to a file

          // Perform OCR using Tesseract.js
          const { data: { text: extractedText } } = await Tesseract.recognize(filePath, 'eng', {
            logger: m => console.log(m)
          });

          const result = await translate(extractedText, { to: targetLang });
          const translatedText = result[0];

          const responseMessage = `${targetLang}:\n\n${translatedText}`;
          await sock.sendMessage(m.from, { text: responseMessage }, { quoted: m }); // Send the extracted and translated text back to the user
        } catch (error) {
          console.error("Error extracting and translating text from image:", error);
          await sock.sendMessage(m.from, { text: 'Error extracting and translating text from image.' }, { quoted: m }); // Error handling
        }
      } else if (m.quoted.text) {
        try {
          const quotedText = m.quoted.text;
          const result = await translate(quotedText, { to: targetLang });
          const translatedText = result[0];

          const responseMessage = `${targetLang}:\n\n${translatedText}`;
          await sock.sendMessage(m.from, { text: responseMessage }, { quoted: m }); // Send the translated text back to the user
        } catch (error) {
          console.error("Error translating quoted text:", error);
          await sock.sendMessage(m.from, { text: 'Error translating quoted text.' }, { quoted: m }); // Error handling
        }
      }
    } else if (text && targetLang) {
      try {
        const result = await translate(text, { to: targetLang });
        const translatedText = result[0];

        const responseMessage = `${targetLang}:\n\n${translatedText}`;
        await sock.sendMessage(m.from, { text: responseMessage }, { quoted: m });
      } catch (error) {
        console.error("Error translating text:", error);
        await sock.sendMessage(m.from, { text: 'Error translating text.' }, { quoted: m });
      }
    } else {
      const responseMessage = "Usage: .translate <target_lang> <text>\nExample: .trt sw I am Gifted-Md Whatsapp Bot\nOr reply to an image/text message with .translate <target_lang>";
      await sock.sendMessage(m.from, { text: responseMessage }, { quoted: m });
    }
  }
};

export default translateCommand;
