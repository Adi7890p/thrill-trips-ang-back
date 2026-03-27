const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const adminRoutes = require('./routes/admin.routes');
const parkRoutes = require('./routes/park.routes');
const bookingRoutes = require('./routes/bookings.routes');

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/park', parkRoutes);
app.use('/api/booking', bookingRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

module.exports = app;