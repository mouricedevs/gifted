import config from '../../set.cjs';

const flirtList = [
  "Neither a Gift is desired nor a Rose,\nI just want to be your lover,\nI want one kiss every day.",
  "Some like crazy lovers, some like admirers,\nBut I only love seeing you smile.",
  "In waiting for your free time,\nI remain in love even while away.\nAnd only with your will can my fate change.\nOtherwise, even in victory, I remain in loss.",
  "Don't get upset with me,\nOh my moon,\nWithout you, even my upcoming Eid\nfeels incomplete.",
  "I give you a kiss 😘,\nIf you don't like it,\nYou can return it 😜.",
  "H - yes 😅,\nM - my 🙃,\nM - beloved 😍.",
  "The tea is hot, the water is cold,\nI'm fine, you tell me,\nhow are you dear 😘🙃😅.",
  "Listening to you,\nI blushed.\nYou called, so here I am 😍🥰😘.",
  "I'm like a crazy kid 🙃,\nbut my heart is true 😘,\na little wild 😍,\nbut struck by your love 🥰💌.",
  "This is the first time in 17-18 years,\nDay and night I'm immersed only\nin thoughts of you 😜😚😅.",
  "I don't want the moon, nor the sky,\nNot much, just a glimpse of you.",
  "Yes, we will love 🥰,\nAttack straight at the heart 💘,\nDarling don't worry,\nI'll never let you out of my heart 😘..",
  "In a black suit 👗,\nYou look so cute 👱‍♀️.\nNo pistol 🔫, no dagger ⚔️,\nYour eyes 😍 do the shooting.",
  "A sea of feelings comes into my heart,\nWhen you reply within a minute 😍😘🤩.",
  "Banaras is famous for its paan,\nSay 'I love you', my dear 😍🙃.\n\n(\\___/)\n( ^ _ ^)\n/ >❤️\nI love you.",
  "In one house, 'I Love You' lived,\nand 'I Miss You' lived.\n'I Miss You' left, now guess who is left in the house? 🤔😜.",
  "Actually, my sister wants a sister-in-law\nfor her birthday,\nSo will you marry me? 😜😍.",
  "I promise,\nI'll always lose when we fight.\nTogether, we'll climb the remaining steps of life 😘😍.",
  "Kohl in the eyes,\nEarrings in the ears,\nAsk your sister,\nWill she be my sister-in-law? 😜🙃😘.",
  "Black is called 'kaala' in Hindi.\nMake your brother-in-law my brother-in-law 😅.",
  "I'm smitten by your sweet smile,\nSince I saw you, I've fallen in love 😍🥰😘.\n\n(\\___/)\n( ^ _ ^)\n/ >❤️\nI love you.",
  "Love should be like this..😍,\nTalk on one day,😘,\nMeet the next day, ❣️,\nAnd get married on the third day ❤️.",
  "Not sugar, we'll add love to the milk.\nCome close, we'll serve tea with our own hands 🙃😊.\n\n(\\__/)\n( • - •)\n/ >☕👌.",
  "You're my chocolate,\nI'm your pasta.\nSay 'I love you',\nFor God's sake 😍😜😘.",
  "Is it love or something else,\nI don't understand,\nYou're just a beautiful thought 🥰,\nThat doesn't leave my heart 😍.",
  "Even a mirror can't tell you\nabout yourself.\nCome, see in my eyes\nhow beautiful you look when you're angry 🙈😍😘.",
  "Life is short, the road is long 😍😘,\nBecome my wife,\nFor God's sake ❣️.",
  "Enough of the fighting,\nAsk your dad,\nWill he make me his son-in-law? 😜😚😆.",
  "I'll share every thought of my heart with you ❤️,\nI'll care for you more than my life 🥰😍🙈.",
  "You've been living in my heart for so long,\nYou need to pay rent, don't you?"
];

function flirrt() {
  // Get a random shayari
  const randomIndex = Math.floor(Math.random() * flirtList.length);
  return flirtList[randomIndex];
}

const flirting = async (m, Matrix) => {
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();
  const validCommands = ['flirt'];

  if (validCommands.includes(cmd)) {
    try {

      const result = await flirrt();

      await Matrix.sendMessage(m.from, { text: result, mentions: [m.sender] }, { quoted: m });
    } catch (error) {
      console.error('Error fetching flirt message:', error);
      await Matrix.sendMessage(m.from, { text: "Failed to retrieve flirt message. Please try again later." });
    }
  }
};

export default flirting;
