import mongoose from "mongoose";

const UserQuizSchema = new mongoose.Schema({
    username: { type: String, required: true },
    score: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});

const UserQuiz = mongoose.model("userQuiz", UserQuizSchema);

export default UserQuiz;
