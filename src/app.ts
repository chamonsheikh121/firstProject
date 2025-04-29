import express, { Application, Request, Response } from 'express';

const app: Application = express();

import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
import userRouter from './app/modules/user/user.route';

// parser

app.use(express.json());
app.use(cors());

app.use('/api/v1/student', StudentRoutes);
app.use('/api/v1/student', userRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
