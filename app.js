import express from 'express';
import path from 'path';
import http from 'http';
import expressValidator from 'express-validator';
import bodyparser from 'body-parser';
import logger from 'morgan';

const dotenv = require('dotenv').config();

const app = express();
const isValidDate = (value) => {
  if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) return false;

  const date = new Date(value);
  if (!date.getTime()) return false;
  return date.toISOString().slice(0, 10) === value;
};

const toLowerCase = (oldvalue) => {
  const newvalue = oldvalue.toLowerCase();
  return newvalue;
};

app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(expressValidator({
  customValidators: {
    isValidDate
  },
  customSanitizers: {
    toLowerCase
  }
}));

export default app;
