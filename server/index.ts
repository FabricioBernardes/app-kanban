import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './src/routes';
const app: Application = express();

const allowedOrigins = ['http://127.0.0.1:8001', 'http://localhost:8001'];
const port = process.env.PORT || 8000;

dotenv.config();
app.use(express.json());

app.use(cors({
    origin: (origin, callback) => {
        if (origin && allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});