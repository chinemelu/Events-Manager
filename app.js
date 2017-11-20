import path from 'path';
import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyparser from 'body-parser';

const dotenv = require('dotenv').config();

const app = express();

app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.set('port', port);

const server = app.listen(port, () => {
  console.log('listening to port 3000');
});


export { app, server };
