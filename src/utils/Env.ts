export const validateEnv = () => {
    if(!process.env.DISCORD_TOKEN) {
        console.warn("Missing Discord bot Token.");
        return false;
    }

    if(!process.env.MONGO_URI) {
        console.warn("Missing MongoDB connection.");
        return false;
    }

    return true;
};