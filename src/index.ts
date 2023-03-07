import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({ message: `Server is working on port ${port}` });
});

app.listen(port, () => {
    console.log(`Server is working on port ${port}`)
});
