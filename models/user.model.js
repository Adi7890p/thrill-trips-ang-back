const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    uid: { type: String } // Firebase UID for linking
});

const User = mongoose.model('User', userSchema);

module.exports = User;