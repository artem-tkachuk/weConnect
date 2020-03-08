const {Storage} = require('@google-cloud/storage');

const storage = new Storage();
const bucketName = 'weconnect-recordings';

exports.uploadFile = async (filename) => {
    // Uploads a local file to the bucket
    await storage.bucket(bucketName).upload(filename, {
        // Support for HTTP requests made with `Accept-Encoding: gzip`
        gzip: true,
        // By setting the option `destination`, you can change the name of the
        // object you are uploading to a bucket.
        metadata: {
            // Enable long-lived HTTP caching headers
            // Use only if the contents of the file will never change
            // (If the contents will change, use cacheControl: 'no-cache')
            cacheControl: 'public, max-age=31536000',
        },
    });

    console.log(`${filename} uploaded to ${bucketName}.`);
};

exports.downloadFile = async (filename) => {
    const options = {
        destination: `./${filename}`,   // The path to which the file should be downloaded, e.g. "./file.txt"
    };

    // Downloads the file
    await storage
        .bucket(bucketName)
        .file(srcFilename)
        .download(options);

    console.log(
        `gs://${bucketName}/${srcFilename} downloaded to ${destFilename}.`
    );
};