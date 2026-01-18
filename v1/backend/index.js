import express from 'express';
import 'dotenv/config';
import dbConnection from './databases/connection.js';
import createDefaultAdmin from './utils/addAdmin.js';
import userRoute from './routes/userRoute.js';


const app = express();
const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('api/users', userRoute);

app.get('/', (req, res) => {
    res.send('The server is running correctly');
});

const startServer = async () => {
    try {
        await dbConnection.ConnectToDb(uri);
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