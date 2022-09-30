import React, { useState } from 'react'
import { questions } from './Questions';
import SubmitResults from './SubmitResults';

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="quiz-app">
            {showScore ? (
                <section className="showScore-section">
                    Your score is {score} out of {questions.length}<br/>
                    {/* passing results to SubmitResults */}
                    <SubmitResults score={score}/>
                </section>
            ) : (
                <>
                    <section className="question-section">
                        <h1>
                            Question {currentQuestion + 1}/{questions.length}
                        </h1>
                        <p>{questions[currentQuestion].questionText}</p>
                    </section>

                    <section className="answer-section">
                        {questions[currentQuestion].answerOptions.map((item, index) => (
                            <button className='btn btn-answer' key={index} onClick={() => handleClick(item.isCorrect)}>
                                {item.answerText}
                            </button>
                        ))}
                    </section>
                </>
            )}
        </div>
    );
}
