import fs from 'fs-extra';
import config from '../../set.cjs';

const handleTakeCommand = async (m, gss) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd !== 'take') return;

  // Split text into packname and author
  const args = text.split('|');
  const [providedPackname, providedAuthor] = args;

  if (!providedPackname || !providedAuthor) {
    return m.reply('Usage: /take pkgname|author');
  }

  global.packname = providedPackname;
  global.author = providedAuthor;

  const quoted = m.quoted || {};

  if (!['imageMessage', 'videoMessage', 'stickerMessage'].includes(quoted.mtype)) {
    return m.reply(`Send/Reply with an image or video to use ${prefix + cmd}`);
  }

  try {
    const mediaBuffer = await quoted.download();
    if (!mediaBuffer) throw new Error('Failed to download media.');

    await gss.sendImageAsSticker(m.from, mediaBuffer, m, { packname: global.packname, author: global.author });
    m.reply('Sticker created successfully!');
  } catch (error) {
    m.reply(`Error: ${error.message}`);
  }
};

export default handleTakeCommand;
