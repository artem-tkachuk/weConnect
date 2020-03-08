const fs = require('fs');

exports.saveBlob = async (filename, blob_data) => {
    await fs.writeFile(`audio/blob/${filename}.txt`, blob_data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('Blob to > audio.txt');
    });
};