import config from '../../set.cjs';

import axios from 'axios';

const TinyUrl = async (m, Matrix) => {
 
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  const validCommands = ['tiny', 'tinyurl', 'shorten', 'short', 'shorturl'];

  if (validCommands.includes(cmd)) {
    if (!text) {
      return m.reply(`Hello *_${m.pushName}_,*\n Gifted Tiny Url Shortener Here.\n Please provide a URL to shorten.\n*Usage:*\n${prefix}tiny https://giftedtech.us.kg or\n.${prefix}tiny https://api.giftedtech.my.id|Gifted-Api`);
    }

    try {
      await m.React('🕘');

      let apiUrl = '';
      if (text.includes('|')) {
        const [url, alias] = text.split('|').map(part => part.trim());
        apiUrl = `https://api.maskser.me/api/linkshort/tinyurlwithalias?link=${encodeURIComponent(url)}&alias=${encodeURIComponent(alias)}`;
      } else {
        apiUrl = `https://widipe.com/tinyurl?link=${encodeURIComponent(text)}`;
      }

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
