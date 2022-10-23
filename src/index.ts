import express, { Request, Response } from 'express';
import connect from './connect/mogodb';
import * as dotenv from 'dotenv';
import userRouter from './routes/user';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT;
connect();
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});
app.use('/auth', userRouter);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
