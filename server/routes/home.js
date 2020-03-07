const router = require('express').Router();

const { getHome } = require('../controllers/home');

router.get('/', getHome);

module.exports = router;