import config from '../../set.cjs';

import fetch from 'node-fetch';
const Jokes = async (m, Gifted) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();
  const validCommands = ['joke', 'jokes'];

  if (validCommands.includes(cmd)) {
    try {
      await m.React('🕘');
      
    const response = await fetch('https://api.popcat.xyz/joke');

    // Check if the response is OK
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    // Parse the JSON data
    const data = await response.json();

    // Reply with the joke
    await m.reply(data.joke);
    
      await m.React('✅');
    } catch (error) {
      console.error('Error from Gifted API:', error);
      await Gifted.sendMessage(m.from, { text: "Failed with error from Gifted API. Please try again later." });
    }
  }
};

export default Jokes;
