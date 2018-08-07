import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import process from 'process';
import { devLog, commonLog } from '../logging/core';
import ENV from '../../helpers/env';

console.log(`Working on '${ENV}' environment.`);
// import { apolloServer } from '../route/graphql';

const app = express();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || '';

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Logging
app.use(devLog);
app.use(commonLog);

app.use(bodyParser.json(), cors());

// Routes
app.use(require('../route/base'));

// apolloServer.applyMiddleware({ app });

export const start = () => {
  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
};

export const stop = () => {
  app.close(PORT, () => {
    console.log(`Shut down on port: ${PORT}`);
  });
};
