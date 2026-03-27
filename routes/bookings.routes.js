const express = require('express');
const { getBookings, addBooking, deleteBooking, updateBooking } = require('../controllers/bookings.controller');
const router = express.Router();

router.post('/bookings', getBookings);
router.post('/add-booking', addBooking);
router.post('/delete-booking', deleteBooking);
router.post('/update-booking', updateBooking);

module.exports = router;