// List of random names and messages
const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eva",
  "Frank",
  "Grace",
  "Harry",
  "Ivy",
  "Jack",
];
const messages = [
  "Hello!",
  "How are you?",
  "What's up?",
  "Nice to meet you!",
  "I'm doing well, thank you!",
  "How can I help you?",
  "I had a great day!",
  "Tell me more!",
  "I'm listening.",
  "That's interesting!",
];

// Function to generate random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate random name and message
export default function generateRandomChat() {
  const randomName = names[getRandomNumber(0, names.length - 1)];
  const randomMessage = messages[getRandomNumber(0, messages.length - 1)];
  return { name: randomName, message: randomMessage };
}



// Generate 50 random chat messages
/* const liveChat = [];
for (let i = 0; i < 50; i++) {
    const randomChat = generateRandomChat();
    liveChat.push({ name: randomChat.name, message: randomChat.message });
}

// Print the generated live chat array
console.log(liveChat); */
