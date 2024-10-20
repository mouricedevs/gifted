
import config from '../../set.cjs';

const restartBot = async (m,Gifted) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

  if (cmd === 'reboot') {
    try {
       // Get the bot's own number in WhatsApp format
    const botNumber = await Gifted.decodeJid(Gifted.user.id);
    
    // Check if the sender is the bot owner (creator)
    const isCreator = [botNumber, config.OWNER_NUMBER + '@s.whatsapp.net'].includes(m.sender);
      
    if (!isCreator) return m.reply("*📛 THIS IS AN OWNER COMMAND*");
      
    await m.reply(`Hello *_${m.pushName}_,*\n *Gifted-Md is Rebooting....*`)
      process.exit()
    } catch (error) {
      console.error(error);
      await m.React("❌");
      return m.reply(`An error occurred while restarting the bot: ${error.message}`);
    }
  }
};

export default restartBot;
