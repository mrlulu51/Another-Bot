import { Message } from "discord.js";

import { CommandList } from "../commands/_ComandList";
import { Guild } from "../database/models/Guild";
import { getCurrentConnection } from "../database/MongooseUtils";

export const onMessage = async (message: Message) => {
    if(message.author.bot) {
        return;
    }

    const guildConfig = await getCurrentConnection().model('Guild').findOne( { guildId: message.guild?.id } );
    const prefix = guildConfig?.get('prefix');

    if(!message.content.startsWith(prefix)) {
        return;
    }

    for(const Command of CommandList) {
        if(message.content.startsWith(prefix + Command.name)) {
            await Command.run(message);
            break;
        }
    }
};