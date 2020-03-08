const speech = require('@google-cloud/speech');
const fs = require('fs');

exports.recognizeSpeech = async (fileName) => {
    // Creates a client
    const client = new speech.SpeechClient();

    // The audio file's encoding, sample rate in hertz, and BCP-47 language code
    const audio = {
        content: fs.readFileSync(fileName).toString('base64'),
    };
    const config = {
        encoding: 'FLAC',
        'audioChannelCount': 2,
        'enableSeparateRecognitionPerChannel': true,
        languageCode: 'en-US',
        // sample_rate_hertz: 44100
    };
    const request = {
        audio: audio,
        config: config,
    };

    // Detects speech in the audio file
    const [response] = await client.recognize(request);
    console.log(response);
    const transcription = response.results.map(result => result.alternatives[0].transcript).join('\n');
    console.log(`Transcription: ${transcription}`);

    return transcription;
};