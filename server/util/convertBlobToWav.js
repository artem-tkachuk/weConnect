const ffmpeg = require('ffmpeg');
const Mp32Wav = require('mp3-to-wav');

exports.convertBlobToWav = async (filename) => {
    var fileReader = new FileReader();
    fileReader.onload = function () {
        fs.writeFileSync('test.wav', Buffer(new Uint8Array(this.result)));
    };
    fileReader.readAsArrayBuffer(blob);
};