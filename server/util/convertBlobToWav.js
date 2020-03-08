const ffmpeg = require('ffmpeg');
const Mp32Wav = require('mp3-to-wav');

exports.convertBlobToMP3 = async (filename) => {
    var process = new ffmpeg('audio/blob/audio.blob');
    process.then(function(audio) {
        audio.fnExtractSoundToMP3('audio/mp3/audio.mp3', function (err, file) {
            if (!error) {
                console.log(`Audio file` + file);
            }
        })
    })
};