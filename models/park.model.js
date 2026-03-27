const mongoose = require('mongoose');

const ParkSchema = new mongoose.Schema({
    name: String,
    category: String,
    city: String,
    price: String,
    image: String,
    description: String
});

const Park = mongoose.model('Park', ParkSchema);

module.exports = Park;