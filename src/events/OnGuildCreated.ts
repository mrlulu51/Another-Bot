import { Guild } from "discord.js";

import GuildSchema from "../database/models/Guild";

export const OnGuildCreated = async (guild: Guild) => {
    try {
        await GuildSchema.create({
            guildId: guild.id
        });
        console.log(`Bot joined the server ${guild.name}`)
    }catch(err) {
        console.error(err)
    }
}