const bookingSrv = require('../services/bookings.service');

exports.getBookings = async (req, res) => {
    try {
        const bookings = await bookingSrv.getBookings();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({
            error: 'Failed to fetch bookings',
            details: err.message
        });
    }
};

exports.addBooking = async (req, res) => {
    try {
        const booking = await bookingSrv.addBooking(req.body);
        res.json({ message: booking.message });
    } catch (err) {
        res.status(500).json({
            error: 'Failed to add booking',
            details: err.message
        });
    }
};

exports.deleteBooking = async (req, res) => {
    try {
        const booking = await bookingSrv.deleteBooking(req.body.id);
        res.json({ message: booking.message });
    } catch (err) {
        res.status(500).json({
            error: 'Failed to delete booking',
            details: err.message
        });
    }
};

exports.updateBooking = async (req, res) => {
    try {
        const booking = await bookingSrv.updateBooking(req.body.id, req.body);
        res.json({ message: booking.message });
    } catch (err) {
        res.status(500).json({
            error: 'Failed to update booking',
            details: err.message
        });
    }
};