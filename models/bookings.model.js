const mongoose = require('mongoose');

const BookingsSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    userEmail: { type: String },
    parkName: { type: String, required: true },
    parkImage: { type: String },
    bookingDate: { type: String, required: true },
    persons: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    paymentMethod: { type: String, default: 'Online' },
    addons: { type: [String], default: [] }
});

const Bookings = mongoose.model('Bookings', BookingsSchema);

module.exports = Bookings;