const TelegramBot = require('node-telegram-bot-api');

// Initialize the bot with your token
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: false });

// Function to send notification
const sendNotification = async (event) => {
  const message = `
🚨 New Token Transfer Detected on Polygon Amoy!

📤 From: ${event.from}
📥 To: ${event.to}
💰 Value: ${event.value} tokens
🔗 Tx Hash: ${event.txHash}
📦 Block: ${event.blockNumber}
🕒 Timestamp: ${new Date(event.timestamp).toLocaleString()}
🔍 View on Polygonscan: https://amoy.polygonscan.com/tx/${event.txHash}
  `;

  try {
    await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message);
    console.log('Telegram notification sent successfully!');
  } catch (error) {
    console.error('Error sending Telegram notification:', error.message);
  }
};

module.exports = { sendNotification };