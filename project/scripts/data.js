let questions = [];
let usedQuestions = [];
let currentIndex = 0;

export async function loadQuestions() {
  try {
    const response = await fetch("data/questions.json");
    questions = await response.json();
    usedQuestions = JSON.parse(localStorage.getItem("usedQuestions")) || [];
  } catch (error) {
    console.error("Error loading questions:", error);
  }
}

export function getRandomQuestion() {
  const remainingQuestions = questions.filter(
    q => !usedQuestions.some(uq => uq.question === q.question)
  );

  if (remainingQuestions.length === 0) {
    console.log("You have answered all questions!");
    return null;
  }

  const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
  const question = remainingQuestions[randomIndex];
  usedQuestions.push(question);
  localStorage.setItem("usedQuestions", JSON.stringify(usedQuestions));
  return question;
}

export function resetGame() {
  localStorage.removeItem("usedQuestions");
  usedQuestions = [];
  currentIndex = 0;
}
export function getCurrentIndex() {
  return currentIndex;
}
export function setCurrentIndex(val) {
  currentIndex = val;
}
export function getQuestions() {
  return questions;
}
