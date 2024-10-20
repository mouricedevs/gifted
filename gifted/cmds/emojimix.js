import fetch from 'node-fetch';
import fs from 'fs';
import config from '../../set.cjs';

const emojimix = async (m, Matrix) => {
  try {
    const prefix = config.PREFIX;
    const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
    const text = m.body.slice(prefix.length + cmd.length).trim();

    const validCommands = ['emojimix', 'emix'];
    if (!validCommands.includes(cmd)) return;

    let [emoji1, emoji2] = text.split('+');
    if (!emoji1 || !emoji2) {
      return m.reply(`Example: ${prefix + cmd} 😅+🤔`);
    }

    const url = `https://levanter.onrender.com/emix?q=${encodeURIComponent(emoji1)}${encodeURIComponent(emoji2)}`;
    const response = await fetch(url);
    const anu = await response.json();

    // Handle case where no emoji mix is found
    if (!anu.result) {
      return m.reply('No emoji mix found for the provided emojis.');
    }

    // Send the emoji mix as a sticker
    const encmedia = await Matrix.sendImageAsSticker(m.from, anu.result, m, { 
      packname: "GiftedTech", 
      author: "Gifted-Md", 
      categories: ['Emoji Mix'] // You can customize the categories
    });

    // No need to unlink the file if not saved locally
  } catch (error) {
    console.error('Error:', error);
    m.reply('An error occurred while processing the command.');
  }
};

export default emojimix;
