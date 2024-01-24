import connectDb from "./infrastructure/database/setup";
import { Server } from "./presentation/Server"

const main = async () => {
    await connectDb();
    Server.run(3001);
};


main();