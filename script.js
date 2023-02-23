import { responses } from './response.js';

const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const chatLog = document.querySelector('#chat-log');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userMessage = input.value;
  input.value = '';

  // Add user message to the chat log
  const userEntry = document.createElement('div');
  userEntry.classList.add('chat-entry', 'user-message');
  userEntry.innerHTML = `
    <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" alt="User Avatar">
    <div class="user-message-text">${userMessage}</div>
  `;
  chatLog.appendChild(userEntry);

  // Generate bot response after a delay
  setTimeout(() => {
    const botMessage = getBotResponse(userMessage);

    // Add bot message to the chat log
    const botEntry = document.createElement('div');
    botEntry.classList.add('chat-entry', 'bot-message');
    botEntry.innerHTML = `
      <img src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png" alt="Bot Avatar">
      <div class="bot-message-text">${botMessage}</div>
    `;
    chatLog.appendChild(botEntry);

    // Scroll to the bottom of the chat log
    chatLog.scrollTop = chatLog.scrollHeight;
  }, 1000);
});

function getBotResponse(userMessage) {
  // Check if user input matches any of the keys in the responses dictionary
  for (let key in responses) {
    const regex = new RegExp(key, 'i');
    if (regex.test(userMessage)) {
      return responses[key];
    }
  }

  // Return a generic response if no match is found
  return 'I\'m sorry, I didn\'t quite catch that. Can you please rephrase your question?';
}
