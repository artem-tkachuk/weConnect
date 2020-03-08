require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT;
const app = express();

const getIndexRoutes = require('./routes');
const get404 = require('./controllers/404').get404;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

//let upperBound = '100mb';
//app.use(bodyParser.urlencoded({extended: false, limit: upperBound}));
app.use(bodyParser.json());

app.use(getIndexRoutes);
app.use(get404);

app.listen(port, () => {
    console.log(`App listens on port ${port}`);
});