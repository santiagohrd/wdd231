import { showQuestion } from './game_ui.js';

export function displayWelcome() {
  const modalContainer = document.querySelector('.modal-container');

  modalContainer.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>Welcome to Who Attends Seminars</h2>
    <p>Test your knowledge of the scriptures across different categories such as the Book of Mormon, Doctrine and Covenants, the Bible, and more.</p>
    <ul>
      <li>Answer each question correctly to move to the next level.</li>
      <li>You have 4 lifelines available:
        <ul>
          <li>📞 Call a Friend</li>
          <li>🔀 50/50</li>
          <li>👥 Ask the Audience</li>
          <li>📖 Search the Scriptures</li>
        </ul>
      </li>
      <li>Good luck and have fun!</li>
    </ul>
    <button id="startGameBtn" class="start-btn">Start Game</button>
  `;

  modalContainer.showModal();

  modalContainer.querySelector("#closeModal").addEventListener("click", () => {
    modalContainer.close();
  });

  modalContainer.querySelector("#startGameBtn").addEventListener("click", () => {
    modalContainer.close();
    showQuestion();
  });
}
