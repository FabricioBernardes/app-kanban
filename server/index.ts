
import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './src/routes';
const app: Application = express();

const port = process.env.PORT || 8000;

dotenv.config();
app.use(express.json());

app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
    }));

app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});