const mongoose = require('mongoose');
const config = require('../set');
const { fetchJson } = require('./giftedfunction');
const EnvVar = require('./giftedvars');

const defaultEnvVariables = [
    { key: 'BOT_PIC', value: 'https://files.giftedtech.my.id/file/gifted-md.jpg' },
    { key: 'ALIVE_MSG', value: '*👋😼 ||HEY ${pushname} DEAR I AM ALIVE NOW...😚👋||*\n\n...' },
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'MODE', value: 'public' },
];

const connectDB = async () => {
    try {
        const data = await fetchJson(`${global.mongodb}/mongodb.json`);
        const mongouri = data.giftedMongoURI;
        await mongoose.connect(mongouri);
        console.log('Database Connected ✅');

        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });
            if (!existingVar) {
                await EnvVar.create(envVar);
                console.log(`➕ Created default db var: ${envVar.key}`);
            }
        }
    } catch (err) {
        console.error('❌ MongoDB Connection Failed:', err.message);
        process.exit(1); 
    }
};

module.exports = { connectDB };
