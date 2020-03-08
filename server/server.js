require('dotenv').config();

const express = require('express');

const port = process.env.PORT;
const app = express();

const getHomeRoutes = require('./routes/home');
const get404 = require('./controllers/404').get404;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.use(getHomeRoutes);
app.use(get404);

app.listen(port, () => {
    console.log(`App listens on port ${port}`);
});