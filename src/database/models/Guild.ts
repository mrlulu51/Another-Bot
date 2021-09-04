import { Document, model, Schema } from "mongoose";

export const Guild = new Schema({
    guildId: String,
    prefix: {
        type: String,
        required: false,
        default: "$",
    },
});

export default model("Guild", Guild);