const express = require('express');
const { getParks, searchPark, addPark, deletePark, updatePark } = require('../controllers/park.controller');
const upload = require('../middleware/upload');
const router = express.Router();

router.post('/parks', getParks);
router.post('/search-park', searchPark);
router.post('/add-park', upload.single('image'), addPark);
router.post('/delete-park', deletePark);
router.post('/update-park', upload.single('image'), updatePark);


module.exports = router;