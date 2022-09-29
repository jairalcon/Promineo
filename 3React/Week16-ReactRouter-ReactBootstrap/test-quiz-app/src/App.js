import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LeaderBoard from "./components/LeaderBoard";
import Quiz from "./components/Quiz";
import Login from "./components/Login";
import MusicPlayer from "./components/MusicPlayer";
import { NavBar } from "./components/NavBar";
// import { questions } from "./components/Questions";

export default function App() {

  return (
    <>      
      <div className="wrapper">
        <NavBar />
        <Routes>
          <Route path='/home' element={<Login />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/leaderboard' element={<LeaderBoard />} />
          <Route path='/quiz' element={<Quiz />} />
        </Routes>
        <MusicPlayer />
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