import mongoose from "mongoose";

async function connectToDb(){
    try {
        await mongoose.connect("your_mongoode_database_link")
        console.log("Connected to db")
    } catch (error) {
        console.log("Error: ", error)        
    }
}

export default connectToDb
