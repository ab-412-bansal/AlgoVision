import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    username :{
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: String,
    created: { type: Date, default: new Date() }
})

const UserModel = mongoose.model("user", UserSchema)

export default UserModel