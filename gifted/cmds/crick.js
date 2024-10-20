import config from '../../set.cjs';
import axios from 'axios';

const cricketScore = async (m, Matrix) => {
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

  const validCommands = ['score', 'crick', 'crickterscore', 'cricket'];

  if (validCommands.includes(cmd)) {
    if (!text) {
      await m.React("❌");
      return m.reply(`*Provide a match ID for cricket score.*\nExample: ${prefix}cricketscore 12345`);
    }

    const matchId = encodeURIComponent(text);

    try {
      const apiUrl = `https://iol.apinepdev.workers.dev/${matchId}`;
      const response = await axios.get(apiUrl);

      if (!response.status === 200) {
        await m.React("❌");
        return m.reply(`Invalid response from the cricket score API. Status code: ${response.status}`);
      }

      const result = response.data;

      let formattedResult = `╭══════════════•∞•══╮\n`;
      formattedResult += `│⿻   *GIFTED-MD 😎 🔥*\n`;
      formattedResult += `│⿻   *LIVE MATCH INFO* ✨\n`;
      formattedResult += `│⿻\n`;

      if (result.code === 200) {
        formattedResult += `│⿻   *${result.data.title}*\n`;
        formattedResult += `│⿻   *${result.data.update}*\n`;
        formattedResult += `│⿻ \n`;
      } else {
        await m.reply(`*Update:* Data not found for the specified match ID.`);
        await m.React("❌");
        return;
      }

      if (result.data.liveScore && result.data.liveScore.toLowerCase() !== "data not found") {
        formattedResult += `│⿻   *Live Score:* ${result.data.liveScore}\n`;
        formattedResult += `│⿻   *Run Rate:* ${result.data.runRate}\n`;
        formattedResult += `│⿻\n`;
        formattedResult += `│⿻   *Batter 1:* ${result.data.batsmanOne}\n`;
        formattedResult += `│⿻   *${result.data.batsmanOneRun} (${result.data.batsmanOneBall})* SR: ${result.data.batsmanOneSR}\n`;
        formattedResult += `│⿻\n`;
        formattedResult += `│⿻   *Batter 2:* ${result.data.batsmanTwo}\n`;
        formattedResult += `│⿻   *${result.data.batsmanTwoRun} (${result.data.batsmanTwoBall})* SR: ${result.data.batsmanTwoSR}\n`;
        formattedResult += `│⿻\n`;
        formattedResult += `│⿻   *Bowler 1:* ${result.data.bowlerOne}\n`;
        formattedResult += `│⿻   *${result.data.bowlerOneOver} overs, ${result.data.bowlerOneRun}/${result.data.bowlerOneWickets}, Econ:* ${result.data.bowlerOneEconomy}\n`;
        formattedResult += `│⿻\n`;
        formattedResult += `│⿻   *Bowler 2:* ${result.data.bowlerTwo}\n`;
        formattedResult += `│⿻   *${result.data.bowlerTwoOver} overs, ${result.data.bowlerTwoRun}/${result.data.bowlerTwoWicket}, Econ:* ${result.data.bowlerTwoEconomy}\n`;
      }

      formattedResult += `╰══•∞•═══════════════╯ `;

      await m.reply(formattedResult);
      await m.React("✅");
    } catch (error) {
      console.error(error);
      await m.React("❌");
      return m.reply(`An error occurred while processing the cricket score request. ${error.message}`);
    }
  }
};

export default cricketScore;
