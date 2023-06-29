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

//cookie parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//routes
import routes from './routes';
routes(app);

//server listen
app.listen(port, () => console.log(`it's working bro, in ${port}!`));