import express from 'express';
import 'dotenv/config';
import dbConnection from './databases/connection.js';
import createDefaultAdmin from './utils/addAdmin.js';
import userRoute from './routes/userRoute.js';
import authRoute from './routes/authRoute.js';
import TextMsg from './config/msg.js';
import rr from './utils/returns.js';
import cors from 'cors';

const app = express();
const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 3000;
const API_BASE_URL = '/api/v1';

app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
}));

app.use(`${API_BASE_URL}/users`, userRoute);
app.use(`${API_BASE_URL}/auth`, authRoute);

app.get('/', (req, res) => {
    res.send('The server is running correctly');
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || TextMsg.serverError();
    return rr(res, statusCode, false, message, null, err.name);
});

const startServer = async () => {
    try {
        await dbConnection.connectToDb(uri);
        await createDefaultAdmin();
        app.listen(port, () => {
            console.info(`Server is running on: http://localhost:${port}/`);
        })
    } catch (e) {
        console.error(`Database connection error: ${e.message}`);
        process.exit(1);
    }
}

startServer();