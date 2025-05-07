import express from 'express';
import { updateCountPut } from '../api/update-count/updateCountPut.js';
import { textRouter } from './textRouter.js';

export const apiRouter = express.Router();

apiRouter.all('/', (req, res) => {
    return res.status(404).send('Toks adresas negalimas');
});

apiRouter.use('/text', textRouter);

apiRouter.put('/update-count/:number', updateCountPut);