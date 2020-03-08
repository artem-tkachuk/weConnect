await fs.writeFileSync(`${filename}`, blob_data);
const sentimentEntities = await getData(languageFunctionURL, transcription);

const languageFunctionURL = "https://us-central1-weconnect-270421.cloudfunctions.net/language";

// // get new recording + location + save it locally
//   console.log(req.body);
//   let blob_data = '';
//   Object.keys(req.body).forEach(part => blob_data += part);

const { getData } = require('../util/getData');
// const { saveBlob } = require('../util/saveBlob');
// const { convertBlobToWav } = require('../util/convertBlobToWav');