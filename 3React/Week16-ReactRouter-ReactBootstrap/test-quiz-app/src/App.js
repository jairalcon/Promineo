import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import Quiz from "./components/Quiz";
import Login from "./components/Login";
import MusicPlayer from "./components/MusicPlayer";
// import { questions } from "./components/Questions";

export default function App() {
  const [ token, setToken] = useState();
  if(!token) {
    return <Login className='container' setToken={setToken} />
  }

  return (
    <>      
      <div className="wrapper">
        <h1>Application</h1>
        <MusicPlayer />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/preferences' element={<Preferences />} />
          <Route path='/quiz' element={<Quiz />} />
        </Routes>
      </div>
    </>
  );
}


//! function
// const [currentQuestion, setCurrentQuestion] = useState(0);
// const [score, setScore] = useState(0);
// const [showScore, setShowScore] = useState(false);

// const handleClick = (isCorrect) => {
//   if (isCorrect) {
//     setScore(score + 1);
//   }

//   const nextQuestion = currentQuestion + 1;
//   if (nextQuestion < questions.length) {
//     setCurrentQuestion(nextQuestion);
//   } else {
//     setShowScore(true);
//   }
// };

//! return()
// {/* <div className="app">
//   {showScore ? (
//     <section className="showScore-section">
//       Your score is {score} out of {questions.length}
//     </section>
//   ) : (
//     <>
//       <section className="question-section">
//         <h1>
//           Question {currentQuestion + 1}/{questions.length}
//         </h1>
//         <p>{questions[currentQuestion].questionText}</p>
//       </section>

//       <section className="answer-section">
//         {questions[currentQuestion].answerOptions.map((item) => (
//           <button onClick={() => handleClick(item.isCorrect)}>
//             {item.answerText}
//           </button>
//         ))}
//       </section>
//     </>
//   )}
// </div> */}