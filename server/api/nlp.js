const language = require('@google-cloud/language');

exports.analyseText = async (text) => {
    // Instantiates a client
    const client = new language.LanguageServiceClient();

    const document = {
        content: text,
        type: 'PLAIN_TEXT',
    };

    // Detects the sentiment of the text
    const [result] = await client.analyzeEntitySentiment({document: document});

    return result;
};