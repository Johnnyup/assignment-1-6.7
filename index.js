const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;



// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer = "Sally Ride";
let candidateAnswer = input.question(question);

console.log("Your answer: " + candidateAnswer);
console.log("Correct answer: " + correctAnswer);

if (correctAnswer === candidateAnswer) {
  console.log("Correct. 1/1")

  } else {
  console.log("Incorrect. 0/1")
}



let arrCandidateScore = [];

function ScoreCard1(arrCandidateScore)