const adminSrv = require('../services/admin.service');

exports.getAdmin = async (req, res) => {
    try {
        const admins = await adminSrv.getAdmin();
        res.json(admins);
    } catch (err) {
        res.status(500).json({
            error: 'Failed to fetch admins',
            details: err.message
        });
    }
};

exports.addAdmin = async (req, res) => {
    try {
        const admin = await adminSrv.addAdmin(req.body);
        res.json({ message: admin.message });
    } catch (err) {
        res.status(500).json({
            error: 'Failed to add admin',
            details: err.message
        });
    }
};

exports.deleteAdmin = async (req, res) => {
    try {
        const admin = await adminSrv.deleteAdmin(req.body.unm);
        res.json({ message: admin.message });
    } catch (err) {
        res.status(500).json({
            error: 'Failed to delete admin',
            details: err.message
        });
    }
};