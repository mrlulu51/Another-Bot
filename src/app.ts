import { Client } from "discord.js";

// Events
import { onMessage } from "./events/OnMessage";
import { OnGuildCreated } from "./events/OnGuildCreated";

// Other
import { connectDatabase } from "./database/MongooseUtils";
import { validateEnv } from "./utils/Env";

(async () => {
    if(!validateEnv()) return;

    const bot = new Client();

    bot.on('ready', () => console.log("Connected to Discord!"));
    bot.on('message', message => onMessage(message));
    bot.on('guildCreate', guild => OnGuildCreated(guild));

    await connectDatabase();

    await bot.login(process.env.DISCORD_TOKEN);
})();