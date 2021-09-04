import { Message } from "discord.js";

export interface ICommand {
    name: string;
    description: string;
    run: (message: Message) => Promise<void>;
}