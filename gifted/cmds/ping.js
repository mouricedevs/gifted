import config from '../../set.cjs';

const ping = async (m, Gifted) => {
   const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).toLowerCase() : '';

  if (cmd === "ping") {
    const startTime = new Date();
    const { key } = await Gifted.sendMessage(m.from, { text: '*_ᴘɪɴɢɪɴɢ ᴛᴏ sᴇʀᴠᴇʀ..._*' }, { quoted: m });
    // await m.React('🚀');

    const text = `*_ɢɪғᴛᴇᴅ-ᴍᴅ sᴘᴇᴇᴅ: ${new Date() - startTime} ms_*`;

    await m.React('⚡');
                                           
    return m.reply(`${text}`, { quoted: key });
    
  }
}

export default ping;
