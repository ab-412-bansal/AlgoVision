import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctOption: { type: Number, required: true }, // Index of the correct option
});

const Quiz = mongoose.model("quiz", QuestionSchema);

export default Quiz;
