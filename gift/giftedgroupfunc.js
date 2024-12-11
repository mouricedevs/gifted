const config = require('../set');
const tzone = config.TIME_ZONE;
const moment = require('moment-timezone');

module.exports = async function GroupUpdate(Gifted, { id, participants, action }) {
   try {
      const metadata = await Gifted.groupMetadata(id);
      for (const jid of participants) {
         let profile;
         try {
            profile = await Gifted.profilePictureUrl(jid, "image");
         } catch {
            profile = "https://lh3.googleusercontent.com/proxy/esjjzRYoXlhgNYXqU8Gf_3lu6V-eONTnymkLzdwQ6F6z0MWAqIwIpqgq_lk4caRIZF_0Uqb5U8NWNrJcaeTuCjp7xZlpL48JDx-qzAXSTh00AVVqBoT7MJ0259pik9mnQ1LldFLfHZUGDGY=w1200-h630-p-k-no-nu";
         }
         if (action === "add" && config.WELCOME === "true") {
            const userName = jid.split("@")[0];
            const joinTime = moment.tz(tzone).format('HH:mm:ss');
            const joinDate = moment.tz(tzone).format('DD/MM/YYYY');
            const membersCount = metadata.participants.length;
            Gifted.sendMessage(id, {
               text: `> Hello @${userName}! Welcome to *${metadata.subject}*.\n> You are the ${membersCount}th member.\n> Joined at: ${joinTime} on ${joinDate}`,
               contextInfo: {
                  mentionedJid: [jid],
                  externalAdReply: {
                     title: `User Joined the Group`,
                     mediaType: 1,
                     previewType: 0,
                     renderLargerThumbnail: true,
                     thumbnailUrl: metadata.subject,
                     sourceUrl: 'https://giftedtech.my.id'
                  }
               }
            });
         } else if (action === "remove" && config.GOODBYE === "true") {
            const userName = jid.split('@')[0];
            const leaveTime = moment.tz(tzone).format('HH:mm:ss');
            const leaveDate = moment.tz(tzone).format('DD/MM/YYYY');
            const membersCount = metadata.participants.length;
            Gifted.sendMessage(id, {
               text: `> Goodbye @${userName} from ${metadata.subject}.\n> We are now ${membersCount} in the group.\n> Left at: ${leaveTime} on ${leaveDate}`,
               contextInfo: {
                  mentionedJid: [jid],
                  externalAdReply: {
                     title: `User Left the Group`,
                     mediaType: 1,
                     previewType: 0,
                     renderLargerThumbnail: true,
                     thumbnailUrl: profile,
                     sourceUrl: 'https://giftedtech.my.id'
                  }
               }
            });
         }
      }
   } catch (e) {
      throw e;
   }
};
