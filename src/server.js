//dotenv cofig
const dotenv = require('dotenv');
dotenv.config();

//express config
const express = require('express');
const app = express();
const port = process.env.PORT;
const routes = require('./routes');

//cors config
const cors = require('cors');
app.use(cors({ credentials: true }));
app.use(express.json());

//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//session config
const session = require('express-session');
app.use(
    session({
        secret: 'mysecretkey',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 30 * 60 * 1000,
        },
    })
);

//routes
import routes from './routes';
routes(app);

//server listen
app.listen(port, () => console.log(`it's working bro, in ${port}!`));
