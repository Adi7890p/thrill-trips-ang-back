const userSrv = require('../services/user.service');

exports.getUsers = async (req, res) => {
    try {
        const users = await userSrv.getUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({
            error: 'Failed to fetch users',
            details: err.message
        });
    }
};

exports.getUserBookings = async (req, res) => {
    try {
        const bookings = await userSrv.getUserBookings(req.body.userId);
        res.json(bookings);
    } catch (err) {
        res.status(500).json({
            error: 'Failed to fetch user bookings',
            details: err.message
        });
    }
};