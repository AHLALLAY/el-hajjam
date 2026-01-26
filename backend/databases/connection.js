import mongoose from 'mongoose';
class Connection {
    constructor() {
        this.isConnected = false;
    }

    async ConnectToDb(uri) {
        try {
            if (!uri) {
                console.error("Fatal error: MONGODB_URI is not defined in .env");
                process.exit(1);
            }
            const conn = await mongoose.connect(uri);
            this.isConnected = true;
            console.info("MongoDB Connected");
            return conn;
        } catch (e) {
            console.error(`MongoDB connection error: ${e.message}`);
            process.exit(1);
        }
    }
}

export default new Connection();