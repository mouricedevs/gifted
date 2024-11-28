const EnvVar = require('./giftedvars');

// Function to get all environment variables
const readEnv = async () => {
    try {
        const envVars = await EnvVar.find({});
        const envVarObject = {};
        envVars.forEach(envVar => {
            envVarObject[envVar.key] = envVar.value;
        });
        return envVarObject;
    } catch (err) {
        console.error('Error retrieving environment variables:' + err.message);
        throw err;
    }
};

// Function to update an environment variable
const updateEnv = async (key, newValue) => {
    try {
        const result = await EnvVar.findOneAndUpdate(
            { key: key },
            { value: newValue },
            { new: true, upsert: true }
        );

        if (result) {
            console.log(`Updated ${key} to ${newValue}`);
        } else {
            console.log(`Environment variable ${key} not found`);
        }
    } catch (err) {
        console.error('Error updating environment variable:' + err.message);
        throw err;
    }
};

module.exports = {
    readEnv,
    updateEnv
};
