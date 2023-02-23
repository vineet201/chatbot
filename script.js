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
  userEntry.textContent = userMessage;
  chatLog.appendChild(userEntry);

  // Generate bot response
  const botMessage = getBotResponse(userMessage);

  // Add bot message to the chat log after a delay
  setTimeout(() => {
    const botEntry = document.createElement('div');
    botEntry.classList.add('chat-entry', 'bot-message');
    botEntry.textContent = botMessage;
    chatLog.appendChild(botEntry);

    // Scroll to the bottom of the chat log
    chatLog.scrollTop = chatLog.scrollHeight;
  }, 1000);
});

function getBotResponse(userMessage) {
  // Define a dictionary of responses for various user inputs
  const responses = {
    'hello': 'Hi there! How can I assist you?',
    'hi': 'Hello! How can I help you today?',
    'hey': 'Hey there! What can I do for you?',
    'how are you': 'I\'m just a chatbot, but thanks for asking!',
    'help': 'What can I help you with?',
    'see you': 'Take care! See you soon.'
  };

  // Check if user input matches any of the keys in the responses dictionary
  for (let key in responses) {
    if (userMessage.toLowerCase().includes(key)) {
      return responses[key];
    }
  }

  // Return a generic response if no match is found
  return 'I\'m sorry, I didn\'t quite catch that. Can you please rephrase your question?';
}
