import mongoose from "mongoose";
import { dbUrl } from "./config.js";
import chalk from "chalk";

const connectDB = async() =>{
    try {
       // success 
       await mongoose.connect(dbUrl);
       console.log(`${chalk.green.bold('server connected db to the ')}${chalk.yellow.bold(dbUrl)}`)
    } catch (error) {
        // error
        console.log(`error connecting to the ${error}`);
        process.exit(1)
    }
}
export default connectDB;