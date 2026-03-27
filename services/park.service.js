const Park = require('../models/park.model');

exports.getParks = async () => {
    try {
        const parks = await Park.find().sort({ _id: -1 });
        return parks;
    } catch (err) {
        return {
            error: 'Failed to fetch parks',
            details: err.message
        };
    }
};

exports.searchPark = async (query) => {
    try {
        const parks = await Park.find({ name: { $regex: query, $options: 'i' } });
        return parks;
    } catch (err) {
        return {
            error: 'Failed to search parks',
            details: err.message
        };
    }
};

exports.addPark = async (data) => {
    try {
        const park = await Park.create(data);
        return { message: 'Park Added' };
    } catch (err) {
        return {
            error: 'Failed to add park',
            details: err.message
        };
    }
};

exports.deletePark = async (id) => {
    try {
        const park = await Park.findByIdAndDelete(id);
        return { message: 'Park Deleted' };
    } catch (err) {
        return {
            error: 'Failed to delete park',
            details: err.message
        };
    }
};

exports.updatePark = async (id, data) => {
    try {
        const park = await Park.findByIdAndUpdate(id, data, { new: true });
        return { message: 'Park Updated' };
    } catch (err) {
        return {
            error: 'Failed to update park',
            details: err.message
        };
    }
};