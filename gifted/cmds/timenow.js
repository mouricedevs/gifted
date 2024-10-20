import config from '../../set.cjs';

import axios from 'axios';

const time = async (m, Gifted) => {
 const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  const validCommands = ['time', 'timenow'];

  if (validCommands.includes(cmd)) {
    if (!text) return m.reply(`Hello *_${m.pushName}_,*\n Please provide a Country code/name after the command ie *${prefix}time Kenya*`);

    try {
      await m.React('🕘');

      const apiUrl = `https://levanter.onrender.com/time?code=${encodeURIComponent(text)}`;
      const response = await axios.get(apiUrl);
      const result = response.data;

      if (result && result.result) {
        const country = result.result[0].name;
        const timezone = result.result[0].timeZone;
        const answer = result.result[0].time;
        
        await Gifted.sendMessage(m.from, { text: ` Hello *_${m.pushName}_,*\n Here are Current Time In *${country}* Stats...\n *Date & Time:* ${answer}\n *Timezone:* ${timezone}\n\n> ©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃 𝐕𝟓` }, { quoted: m });

        await m.React('✅');
      } else {
        throw new Error('Invalid response from the Gifted API.');
      }
    } catch (error) {
      console.error('Error getting Gifted APi response:', error.message);
      m.reply('Error getting response from Gifted APi.');
      await m.React('❌');
    }
  }
};

export default time;
