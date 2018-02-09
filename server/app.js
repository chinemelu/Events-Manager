import express from 'express';
import cors from 'cors';
import path from 'path';
import http from 'http';
import expressValidator from 'express-validator';
import bodyparser from 'body-parser';
import logger from 'morgan';
// import webpack from 'webpack';
// import webpackMiddleware from 'webpack-dev-middleware';
// import webpackConfig from '../webpack.dev.config';

const dotenv = require('dotenv').config();

const app = express();

// app.use(webpackMiddleware(webpack(webpackConfig)));

const isValidDate = (value) => {
  if ((!value)) {
    return;
  } {
    if (!(value.match(/^\d{4}-\d{2}-\d{2}$/))) return false;

    const date = new Date(value);
    if (!date.getTime()) return false;
    return date.toISOString().slice(0, 10) === value;
  }
};

const trimtoLowerCase = (oldvalue) => {
  const newvalue = oldvalue.trim().toLowerCase();
  return newvalue;
};

app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(expressValidator({
  customValidators: {
    isValidDate,
  },
  customSanitizers: {
    trimtoLowerCase
  }
}));

export default app;
