# Discord Bot - Direct Message Responder

A simple Discord bot built with Node.js and TypeScript that responds to direct messages with "Hallo World".

## Features

- Responds to all direct messages with "Hallo World"
- Built with TypeScript for type safety
- Uses discord.js v14

## Prerequisites

- Node.js (v16 or higher)
- A Discord Bot Token

## Getting Your Discord Bot Token

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" and give it a name
3. Go to the "Bot" section in the left sidebar
4. Click "Add Bot"
5. Under the "TOKEN" section, click "Copy" to copy your bot token
6. In the "Privileged Gateway Intents" section, enable:
   - MESSAGE CONTENT INTENT (if needed for your bot to read message content)
7. Go to "OAuth2" > "URL Generator"
8. Select scopes: `bot`
9. Select bot permissions: `Send Messages`, `Read Messages/View Channels`
10. Copy the generated URL and open it in your browser to invite the bot to your server

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory (you can copy from `.env.example`):
```
DISCORD_BOT_TOKEN=your_discord_bot_token_here
```

Replace `your_discord_bot_token_here` with your actual Discord bot token.

## Usage

### Build and Run

```bash
# Build the TypeScript code
npm run build

# Start the bot
npm start
```

### Development Mode

```bash
# Build and run in one command
npm run dev
```

## How It Works

The bot listens for direct messages and automatically replies with "Hallo World" to any message it receives in DMs. It ignores messages from other bots to prevent infinite loops.

## Project Structure

```
.
├── src/
│   └── bot.ts          # Main bot code
├── dist/               # Compiled JavaScript (generated)
├── .env                # Environment variables (create this)
├── .gitignore          # Git ignore rules
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md           # This file
```

## Troubleshooting

- **Bot doesn't respond to DMs**: Make sure the bot has the necessary intents enabled in the Discord Developer Portal
- **"DISCORD_BOT_TOKEN is not defined" error**: Check that your `.env` file exists and contains a valid token
- **Bot can't read messages**: Ensure you've enabled the MESSAGE CONTENT INTENT in the Discord Developer Portal

## License

ISC

