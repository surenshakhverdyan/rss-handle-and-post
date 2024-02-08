import * as express from 'express';

import {
  deleteRecord,
  forgotPassword,
  getRecords,
  postRecord,
  resetPassword,
  rssHandler,
  signIn
} from '../controllers';
import { authGuard } from '../guards/auth.guard';

const router = express.Router();

router.post('/sign-in', signIn);
router.post('/forgot-password', forgotPassword);
router.patch('/reset-password/:token', resetPassword);

router.get('/dashboard', authGuard, getRecords);
router.post('/post-record', authGuard, postRecord);
router.delete('/delete-record', authGuard, deleteRecord);

router.post('/rss-handler', rssHandler);

export default router;
