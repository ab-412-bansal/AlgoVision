import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mbno: {
        type: String,
        required: true
    },
    starRatings: {
        type: Number,
        required: true
    },
    reason: {
        type: String,
        required:true
    },
    message: {
        type: String
    }
})

const ContactModel = mongoose.model("contact", ContactSchema)
export default ContactModel