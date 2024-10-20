import config from '../../set.cjs';

import axios from 'axios';

const teraboxApiBaseUrl = 'https://teraboxvideodownloader.nepcoderdevs.workers.dev/?url=';

const teraboxDownload = async (m, Matrix) => { 
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  const validCommands = ['terabox', 'tb', 'tbdl', 'teraboxdl'];

  if (validCommands.includes(cmd)) {
    if (!text) return m.reply('Please provide a Terabox URL.');

    try {
      await m.React('🕘');

      const apiUrl = `${teraboxApiBaseUrl}${encodeURIComponent(text)}`;
      const response = await axios.get(apiUrl);
      const result = response.data;

      if (result.response && result.response.length > 0) {
        const mediaInfo = result.response[0];
        const mediaUrl = mediaInfo.resolutions["Fast Download"];
        const caption = "> *©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓*";
        
        if (mediaUrl) {
          const sendVideo = {
            video: { url: mediaUrl },
            caption: caption,
          };
          await Matrix.sendMessage(m.from, sendVideo, { quoted: m });
          await m.React('✅');
          await m.reply('Download Success...');
        } else {
          throw new Error('Fast Download URL not found.');
        }
      } else {
        throw new Error('Invalid response from the downloader.');
      }
    } catch (error) {
      console.error('Error downloading Terabox media:', error.message);
      m.reply('Error downloading Terabox media.');
      await m.React('❌');
    }
  }
};

export default teraboxDownload;
