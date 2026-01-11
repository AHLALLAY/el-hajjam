import mongoose from 'mongoose';
class Connection {
    constructor() {
        this.isConnected = false;
    }

    async ConnectToDb(uri) {
        try {
            if (!uri) {
                console.log("Erreur fatale: MONGODB_URI n'est pas défini dans .env");
                process.exit(1);
            }
            const conn = await mongoose.connect(uri);
            this.isConnected = true;
            console.log("MongoDb Connecté");
            return conn;
        } catch (e) {
            console.error(`Erreur de connexion MongoDb : ${e.message}`);
            process.exit(1);
        }
    }
}

export default new Connection();