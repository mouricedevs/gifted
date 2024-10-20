import config from '../../set.cjs';


import axios from 'axios';

const TinyUrl = async (m, Matrix) => {

  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  const validCommands = ['cuttly', 'cutly'];

  if (validCommands.includes(cmd)) {
    if (!text) {
      return m.reply(`Hello *_${m.pushName}_,*\n Gifted Cuttly Url Shortener Here.\n Please Provide a URL to shorten.\n*Usage:*\n${prefix}cuttly https://giftedtech.my.id`);
    }

    try {
      await m.React('🕘');

      const apiUrl = `https://api.maskser.me/api/linkshort/cuttly?link=${encodeURIComponent(text)}`;
      const response = await axios.get(apiUrl);
      const result = response.data.result;

      await Matrix.sendMessage(m.from, { text: result }, { quoted: m });

      await m.React('✅');
    } catch (error) {
      console.error('Error shortening URL:', error.message);
      m.reply('Error shortening URL.');
      await m.React('❌');
    }
  }
};

export default TinyUrl;
