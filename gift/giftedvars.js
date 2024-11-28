const mongoose = require('mongoose');

const envVarSchema = new mongoose.Schema({
    key: { type: String, required: true, unique: true },
    value: { type: String, required: true }
});

const EnvVar = mongoose.model('EnvVar', envVarSchema);

module.exports = EnvVar;
