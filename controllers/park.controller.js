const parkSrv = require('../services/park.service');

exports.getParks = async (req, res) => {
    try {
        const parks = await parkSrv.getParks();
        res.json(parks);
    } catch (err) {
        res.status(500).json({
            error: 'Failed to fetch parks',
            details: err.message
        });
    }
};

exports.searchPark = async (req, res) => {
    try {
        const parks = await parkSrv.searchPark(req.body.query);
        res.json(parks);
    } catch (err) {
        res.status(500).json({
            error: 'Failed to search parks',
            details: err.message
        });
    }
};

exports.addPark = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'Image file is required' });
        }
        const imagePath = `/uploads/${req.file.filename}`;
        const parkData = { ...req.body, image: imagePath };
        const park = await parkSrv.addPark(parkData);
        res.json({ message: park.message });
    } catch (err) {
        res.status(500).json({
            error: 'Failed to add park',
            details: err.message
        });
    }
};

exports.deletePark = async (req, res) => {
    try {
        const park = await parkSrv.deletePark(req.body.id);
        res.json({ message: park.message });
    } catch (err) {
        res.status(500).json({
            error: 'Failed to delete park',
            details: err.message
        });
    }
};

exports.updatePark = async (req, res) => {
    try {
        const updateData = { ...req.body };
        if (req.file) {
            updateData.image = `/uploads/${req.file.filename}`;
        } else if (req.body.existingImage) {
            updateData.image = req.body.existingImage;
        }
        delete updateData.existingImage;
        const park = await parkSrv.updatePark(req.body.id, updateData);
        res.json({ message: park.message });
    } catch (err) {
        res.status(500).json({
            error: 'Failed to update park',
            details: err.message
        });
    }
};