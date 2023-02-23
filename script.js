import { responses } from './response.js';

const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const chatLog = document.querySelector('#chat-log');

const createUserEntry = (message, type) => {
  const avatarUrl = type === 'user' ?
    'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png' :
    'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png';

  const entry = document.createElement('div');
  entry.classList.add('chat-entry', `${type}-message`);
  entry.innerHTML = `
    <img src="${avatarUrl}" alt="${type} Avatar">
    <div class="${type}-message-text">${message}</div>
  `;
  return entry;
};

const getBotResponse = (userMessage) => {
  const match = Object.keys(responses).find((key) => new RegExp(key, 'i').test(userMessage));
  if (match) {
    const response = responses[match];
    if (typeof response === 'function') {
      // If the response is a function, call it with the user message and return its result
      return response(userMessage);
    }
    return response;
  }
  return "I'm sorry, I didn't quite catch that. Can you please rephrase your question?";
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userMessage = input.value;
  input.value = '';

  // Add user message to the chat log
  const userEntry = createUserEntry(userMessage, 'user');
  chatLog.appendChild(userEntry);

  // Wait for 1 second before generating bot response
  setTimeout(() => {
    const botMessage = getBotResponse(userMessage);

    // Add bot message to the chat log
    const botEntry = createUserEntry(botMessage, 'bot');
    chatLog.appendChild(botEntry);

    // Scroll to the bottom of the chat log
    chatLog.scrollTop = chatLog.scrollHeight;
  }, 1000);
});
