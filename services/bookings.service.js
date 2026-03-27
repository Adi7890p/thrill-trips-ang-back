const Bookings = require('../models/bookings.model');

exports.getBookings = async () => {
    try {
        const bookings = await Bookings.find().sort({ _id: -1 });
        return bookings;
    } catch (err) {
        return {
            error: 'Failed to fetch bookings',
            details: err.message
        };
    }
};

exports.addBooking = async (data) => {
    try {
        const booking = await Bookings.create(data);
        return { message: 'Booking Added' };
    } catch (err) {
        return {
            error: 'Failed to add booking',
            details: err.message
        };
    }
};

exports.deleteBooking = async (id) => {
    try {
        const booking = await Bookings.findByIdAndDelete(id);
        return { message: 'Booking Deleted' };
    } catch (err) {
        return {
            error: 'Failed to delete booking',
            details: err.message
        };
    }
};

exports.updateBooking = async (id, data) => {
    try {
        const booking = await Bookings.findByIdAndUpdate(id, data, { new: true });
        return { message: 'Booking Updated' };
    } catch (err) {
        return {
            error: 'Failed to update booking',
            details: err.message
        };
    }
};
