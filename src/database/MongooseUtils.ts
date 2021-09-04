import { connect, connection } from "mongoose";

export const connectDatabase = async () => {
    await connect(process.env.MONGO_URI);
    console.log("Database Connected!");
};

export const getCurrentConnection = () => {
    return connection;
} 