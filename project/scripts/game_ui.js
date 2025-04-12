import {
    getRandomQuestion,
    getCurrentIndex,
    setCurrentIndex,
    getQuestions
  } from './data.js';
  
  export function showQuestion() {
    const questionData = getRandomQuestion();
    if (!questionData) return;
  
    const questionElement = document.querySelector(".question-game .question");
    const answersContainer = document.querySelector(".question-game .answers");
  
    questionElement.textContent = questionData.question;
    answersContainer.innerHTML = "";
  
    questionData.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.classList.add("answer-btn");
      btn.onclick = () => handleAnswer(btn, option, questionData.correct_answer);
      answersContainer.appendChild(btn);
    });
  }
  
  function handleAnswer(selectedButton, selected, correct) {
    const buttons = document.querySelectorAll(".answer-btn");
  
    selectedButton.classList.add("selected");
    buttons.forEach(btn => btn.disabled = true);
  
    setTimeout(() => {
      buttons.forEach(btn => {
        if (btn.textContent === correct) {
          btn.classList.add("correct");
        }
        if (btn.textContent === selected && selected !== correct) {
          btn.classList.add("incorrect");
        }
      });
  
      setTimeout(() => {
        if (selected === correct) {
          const newIndex = getCurrentIndex() + 1;
          setCurrentIndex(newIndex);
          if (newIndex < getQuestions().length) {
            showQuestion();
          } else {
            // console.log("Congratulations! You finished all the questions.");
          }
        } else {
        //   console.log("Incorrect answer, starting over.");
          setCurrentIndex(0);
          showQuestion();
        }
      }, 2000);
    }, 3000);
  }
  