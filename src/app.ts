import 'dotenv/config';
import * as express from 'express';
import * as cors from 'cors';

import api from './routes/api';
import mongo from './config/mongo';

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '50mb' }));
app.use('/', api);

app.listen(3001, () => {
  console.log('App started');
});

mongo();
