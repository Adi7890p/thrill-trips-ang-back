const express = require('express');
const { getAdmin, addAdmin, deleteAdmin } = require('../controllers/admin.controller');
const router = express.Router();

router.post('/admins', getAdmin);
router.post('/add-admin', addAdmin);
router.post('/delete-admin', deleteAdmin);



module.exports = router;