import express from 'express';
import path from 'path';
import http from 'http';
import expressValidator from 'express-validator';
import bodyparser from 'body-parser';
import logger from 'morgan';

const dotenv = require('dotenv').config();

const app = express();

app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(expressValidator());

export default app;
