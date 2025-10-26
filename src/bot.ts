import { Client, GatewayIntentBits, Events, Partials, Message } from 'discord.js';
import config from './config.json';

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

const token = config.DISCORD_BOT_TOKEN;

if (!token) {
  console.error('❌ Error: DISCORD_TOKEN is not defined in .env file');
  process.exit(1);
}

client.login(token);

