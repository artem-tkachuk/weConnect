const router = require('express').Router();

const { getindex, postNewRecording, getNotified } = require('../controllers');

router.get('/', getindex);
router.post('/new-recording', postNewRecording);
router.get('/notified', getNotified);

module.exports = router;