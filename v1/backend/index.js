import express from 'express';
import 'dotenv/config';
import dbConnection from './databases/connection.js';

const app = express();
const uri = process.env.MONGODB_URI;
const port = process.env.PORT;

app.get('/', (req, res)=>{
    res.send('server running well');
});
const startServer = async () => {
    try {
        await dbConnection.ConnectToDb(uri);
        app.listen(port, () => {
            console.info(`server is running on : http://localhost:${port}/`);
        })
    } catch (e) {
        console.error(`Erreur de connexion avec la base de donnée : ${e.message}`);
        process.exit(1);
    }
}

startServer();