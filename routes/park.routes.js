const express = require('express');
const { getParks, searchPark, addPark, deletePark, updatePark } = require('../controllers/park.controller');
const router = express.Router();

router.post('/parks', getParks);
router.post('/search-park', searchPark);
router.post('/add-park', addPark);
router.post('/delete-park', deletePark);
router.post('/update-park', updatePark);


module.exports = router;