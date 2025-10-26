import { Client, GatewayIntentBits, Events, Partials, Message } from 'discord.js';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

// Load environment variables from .env file
dotenv.config();

// Create Express server
const app = express();
app.use(express.json());

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel]
});

client.once(Events.ClientReady, (c) => {
  console.log(`✅ Bot is online! Logged in as ${c.user.tag}`);
});

client.on(Events.MessageCreate, async (message: Message) => {
  if (message.author.bot) return; // this point is never reached!

  if (message.channel.isDMBased()) {
    console.log(`📩 Received DM from ${message.author.tag}: ${message.content}`);
    
    try {
      await message.reply('Hallo World');
      console.log(`✉️ Replied to ${message.author.tag}`);
    } catch (error) {
      console.error('❌ Error sending reply:', error);
    }
  } else if (message.mentions.has(client.user!.id)) {
    // Bot was mentioned in a channel
    console.log(`💬 Mentioned in channel by ${message.author.tag}: ${message.content}`);
    
    try {
      await message.reply('Hallo World');
      console.log(`✉️ Replied to ${message.author.tag} in channel`);
    } catch (error) {
      console.error('❌ Error sending reply:', error);
    }
  }
});

const token = process.env.DISCORD_BOT_TOKEN;

if (!token) {
  console.error('❌ Error: DISCORD_BOT_TOKEN is not defined in .env file');
  process.exit(1);
}

client.login(token);

// Express route: POST /message
app.post('/message', (req: Request, res: Response) => {
  const { userId, message } = req.body;
  
  console.log(`📨 Received POST /message - userId: ${userId}, message: ${message}`);
  
  res.json({ errorId: 0 });
});

// Start Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Express server running on port ${PORT}`);
});
