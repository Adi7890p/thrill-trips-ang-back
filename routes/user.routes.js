const express = require('express');
const { getUsers, getUserBookings } = require('../controllers/user.controller');
const router = express.Router();

router.post('/users', getUsers);
router.post('/bookings', getUserBookings);

module.exports = router;