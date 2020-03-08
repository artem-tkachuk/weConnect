const router = require('express').Router();

const { getHome } = require('../controllers/home');

router.get('/', getHome);
router.post('/new-recording', (req, res) => {

})

module.exports = router;