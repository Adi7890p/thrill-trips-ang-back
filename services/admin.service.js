const Admin = require('../models/admin.model');

exports.getAdmin = async () => {
    try {
        const admins = await Admin.find().sort({ _id: -1 });
        return admins;
    } catch (err) {
        return {
            error: 'Failed to fetch admins',
            details: err.message
        };
    }
};

exports.addAdmin = async (data) => {
    const { unm, password } = data;
    try {
        const admin = await Admin.create({ unm, password });
        return { message: 'Admin Added' };
    } catch (err) {
        return {
            error: 'Failed to add admin',
            details: err.message
        };
    }
};

exports.deleteAdmin = async (unm) => {
    try {
        const admin = await Admin.findOneAndDelete({ unm });
        return { message: 'Admin Deleted' };
    } catch (err) {
        return {
            error: 'Failed to delete admin',
            details: err.message
        };
    }
};