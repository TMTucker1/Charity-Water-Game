import React, { useState } from 'react';

type Answer = {
    text: string;
    isCorrect: boolean;
};

type Question = {
    question: string;
    answers: Answer[];
    correctAnswer: string;
};

type MissionQuizProps = {
    missionData: any; // Replace 'any' with a more specific type if available
    questions: Question[];
    onComplete: (score: number) => void;
};

const MissionQuiz: React.FC<MissionQuizProps> = ({ missionData, questions, onComplete }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuestionIndex = currentQuestionIndex + 1;

        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            setIsCompleted(true);
            onComplete(score);
        }
    };

    if (isCompleted) {
        return (
            <div>
                <h2>Quiz Completed!</h2>
                <p>Your score: {score} out of {questions.length}</p>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div>
            <h2>{currentQuestion.question}</h2>
            <ul>
                {currentQuestion.answers.map((answer, index) => (
                    <li key={index} onClick={() => handleAnswer(answer.isCorrect)}>
                        {answer.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MissionQuiz;