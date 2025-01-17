import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Quiz.css";

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);
    const [error, setError] = useState(null);
    const [msg, setMsg] = useState(null);

    const fetchQuestions = () => {
        axios
            .get("http://localhost:8000/quiz/questions", { withCredentials: true })
            .then((response) => {
                setQuestions(response.data);
                setAnswers({});
                setScore(null);
                setMsg(null);
            })
            .catch((error) => {
                console.error("Error fetching questions:", error);
                setError("Failed to fetch quiz questions. Please log in.");
            });
    };

    useEffect(() => {
        fetchQuestions();
    }, []);

    const handleAnswerChange = (questionIndex, optionIndex) => {
        setAnswers({ ...answers, [questionIndex]: optionIndex });
    };

    const submitQuiz = () => {
        const calculatedScore = questions.reduce((acc, question, index) => {
            if (answers[index] === question.correctOption) acc += 1;
            return acc;
        }, 0);

        setScore(calculatedScore);

        axios
            .post("http://localhost:8000/quiz/submit", { score: calculatedScore }, { withCredentials: true })
            .then(() => setMsg("Quiz submitted successfully!"))
            .catch((error) => console.error("Error submitting quiz:", error));
    };

    if (error) {
        return <div className="quiz-container">{error}</div>;
    }

    if (score !== null) {
        return (
            <div className="quiz-container">
                <div className="quiz-result">{msg}</div>
                <div className="quiz-result">Your Score: {score}/20</div>
                <button className="retry-btn" onClick={fetchQuestions}>Take Quiz Again</button>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <h1 className="quiz-title">Quiz</h1>
            {questions.length > 0 ? (
                questions.map((question, index) => (
                    <div key={index}>
                        <h3 className="quiz-question">{question.question}</h3>
                        <div className="options-container">
                            {question.options.map((option, optionIndex) => (
                                <div
                                    key={optionIndex}
                                    className={`quiz-option ${answers[index] === optionIndex ? "active" : ""}`}
                                    onClick={() => handleAnswerChange(index, optionIndex)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading questions...</p>
            )}
            <button className="quiz-nav-btn" onClick={submitQuiz}>Submit Quiz</button>
        </div>
    );
};

export default Quiz;
