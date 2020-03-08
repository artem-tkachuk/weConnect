const fs = require('fs');
const ffmpeg = require('ffmpeg');
const ffmpegfluent = require('fluent-ffmpeg');
const Mp32Wav = require('mp3-to-wav');

const firestore = require('../database/firestore');

const db = firestore.firestore();

const {uploadFile} = require('../database/cloudstorage');
const {recognizeSpeech} = require('../api/speechToText');
const {analyseText} = require('../api/nlp');


exports.postNewRecording = async (req, res) => {
    let blob = req.body.blob;
    let location = req.body.location;

    var buf = new Buffer(req.body.blob, 'base64'); // decode

    fs.writeFile("audio/blob/audio.txt", buf, function(filename) {
        try {
            var process = new ffmpeg('audio/blob/audio.txt');
            process.then(function (audio) {
                audio.fnExtractSoundToMP3('audio/audio.mp3', async function (err, file) {
                    if (!err) {
                        console.log(`Audio mp3 file` + file);

                        let track = 'audio/audio.mp3';//your path to source file
                        let filename = 'audio/audio.flac';  //TODO generate unique id for the document?

                        let flacFile = await ffmpegfluent(track).toFormat('flac').save(filename);

                        await uploadFile(filename);

                        const transcription = await recognizeSpeech(filename);
                        const sentimentsEntities = await analyseText(transcription);


                        //TODO optional: our NN to get back age, gender, ethnicity

                        const data = {
                            ...sentimentsEntities, transcription, location
                        };

                        db.collection('recordings').add(data).then(document => {
                            //TODO based on keywords reveal what the situation is => TODO report to the needed agencies
                            console.log(document);
                            res.sendStatus(200);
                        });
                    } else {
                        console.log(err);
                    }
                });
            }, function (err) {
                console.log(`Error ${err}`);
            })
        } catch (e) {
            console.log(e);
        }
    });
};


exports.getindex = (req, res) => {
    res.render(`user/index`);
};


exports.getNotified = (req, res) => {
    res.render('user/process');
};