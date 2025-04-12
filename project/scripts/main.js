import { loadQuestions, resetGame } from './data.js';
import { showQuestion } from './game_ui.js';
import { displayWelcome } from './modal.js';

window.addEventListener("DOMContentLoaded", async () => {
  displayWelcome();
  await loadQuestions();
});

document.getElementById("reset-btn").addEventListener("click", () => {
  resetGame();
  showQuestion();
});
