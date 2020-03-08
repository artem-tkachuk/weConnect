const fetch = require("node-fetch");

exports.getData = async (url, text) => {
    await request({
        url: url,
        method: 'POST',
        json: {"text": text}
    }, (err, response, profilePicUrl) => {

    });
};