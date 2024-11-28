const mongoose = require('mongoose');

const DeletedMessageSchema = new mongoose.Schema({
    chatId: { type: String, required: true }, 
    sender: { type: String, required: true }, 
    message: { type: String, required: true }, 
    deletedAt: { type: Date, default: Date.now }, 
});

module.exports = mongoose.model('DeletedMessage', DeletedMessageSchema);
