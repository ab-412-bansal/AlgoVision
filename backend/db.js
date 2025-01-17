import mongoose from "mongoose";

async function connectToDb(){
    try {
        await mongoose.connect("mongodb+srv://ayush4bansal:gzGQsyn6MsWT0GdF@cluster0.8ybir.mongodb.net/algovision_db")
        console.log("Connected to db")
    } catch (error) {
        console.log("Error: ", error)        
    }
}

export default connectToDb