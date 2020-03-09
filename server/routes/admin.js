const router = require('express').Router();

const { getShowDashBoard, getLogin, getStep1, getStep2 } = require('../controllers/admin');

router.get('/dashboard', getShowDashBoard);
router.get('/step1', getStep1);
router.get('/step2', getStep2);
router.get('/login', getLogin);

module.exports = router;