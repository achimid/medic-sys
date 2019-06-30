require('dotenv').config();

const telegram = {
    TELEGRAM_BOT_CHAT_ID: process.env.TELEGRAM_BOT_CHAT_ID,
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN
}

const watson = {
    username: process.env.ASSISTANT_USERNAME,
    password: process.env.ASSISTANT_PASSWORD,
    version: process.env.ASSISTANT_VERSION,
    ASSISTANT_WORKSPACE_ID: process.env.ASSISTANT_WORKSPACE_ID
  }

module.exports = {
    telegram,
    watson
}