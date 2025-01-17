import express from "express";
import Quiz from "../models/Quiz.js";
import UserQuiz from "../models/UserQuiz.js";
import authenticate from "../middleware/authMiddleware.js";

const router = express.Router();

// Fetch 20 random questions
router.get("/questions", authenticate, async (req, res) => {
    try {
        const questions = await Quiz.aggregate([{ $sample: { size: 20 } }]);
        // console.log("Questions:", questions)
        res.json(questions);
    } catch (error) {
        console.error("Error fetching quiz questions:", error);
        res.status(500).json({ msg: "Error fetching quiz questions" });
    }
});

// Submit quiz results
router.post("/submit", authenticate, async (req, res) => {
    const { score } = req.body;
    const username = req.user.username;

    try {
        // Find existing quiz submission for the user
        const existingSubmission = await UserQuiz.findOne({ username });

        if (existingSubmission) {
            // Compare the existing score with the new score
            if (score > existingSubmission.score) {
                // Update the score if the new score is higher
                existingSubmission.score = score;
                existingSubmission.date=Date.now();
                await existingSubmission.save();
                return res.json({
                    msg: "Quiz results updated with a higher score",
                    userQuiz: existingSubmission,
                });
            } else {
                // Do not update if the existing score is higher or equal
                return res.json({
                    msg: "Quiz results not updated as the existing score is higher or equal",
                    userQuiz: existingSubmission,
                });
            }
        } else {
            // If no existing submission, create a new entry
            const newSubmission = new UserQuiz({ username, score });
            await newSubmission.save();
            return res.json({
                msg: "Quiz results saved successfully",
                userQuiz: newSubmission,
            });
        }
    } catch (error) {
        console.error("Error saving quiz results:", error);
        res.status(500).json({ msg: "Error saving quiz results" });
    }
});

export default router;
