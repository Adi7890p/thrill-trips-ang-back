const User = require('../models/user.model');
const Bookings = require('../models/bookings.model');

exports.getUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (err) {
        return {
            error: 'Failed to fetch users',
            details: err.message
        };
    }
};

exports.getUserBookings = async (userId) => {
    try {
        const bookings = await Bookings.find({ userId: userId });
        return bookings;
    } catch (err) {
        return {
            error: 'Failed to fetch user bookings',
            details: err.message
        };
    }
};