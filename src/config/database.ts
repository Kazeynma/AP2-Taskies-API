import mongoose from "mongoose";
import * as dotenv from "dotenv"

dotenv.config();

//set up default mongoose connection
const mongoDB = process.env.MONGO_URL || "";
mongoose.connect(mongoDB)
    .then(() => {
        console.log("Successfully connect to MongoDB");
    })

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongo connection error"));