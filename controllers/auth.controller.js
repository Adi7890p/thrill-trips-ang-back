const authSrv = require('../services/auth.service');

exports.signup = async (req, res) => {
    try {
        await authSrv.signup(req.body);
        res.status(201).json({ message: 'User Registered' });
    } catch (err) {
        res.status(500).json({
            error: 'Registration failed', details: err.message
        });
    }
};

exports.login_email = async (req, res) => {
    try {
        const token = await authSrv.login_email(req.body);
        res.json({ token, message: 'Login Successfull' });
    } catch (err) {
        res.status(500).json({
            error: 'Login failed', details: err.message
        });

    }
};

exports.login_google = async (req, res) => {
    try {
        const token = await authSrv.login_google(req.body.email);
        res.json({ token, message: 'Login Successfull' });
    } catch (err) {
        res.status(500).json({
            error: 'Login failed', details: err.message
        });

    }
};

exports.login_admin = async (req, res) => {
    try {
        const result = await authSrv.login_admin(req.body);
        res.json(result);
    } catch (err) {
        res.status(500).json({
            error: 'Login failed', details: err.message
        });

    }
};