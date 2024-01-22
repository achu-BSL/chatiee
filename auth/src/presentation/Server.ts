import express, {json, urlencoded} from "express";
import { RegisterController } from "./controllers/RegisterController";
import cors from 'cors';
import { LoginController } from "./controllers/LoginController";

export class Server {
  static run(port: number, registerController: RegisterController, loginController: LoginController) {
    const app = express();

    app.use(json());
    app.use(urlencoded({extended: true}));
    app.use(cors({origin: 'http://localhost:3000', credentials: true}));


    app.get("/api/auth", (req, res) => res.send("Hello World!"));

    app.post("/api/auth/register", (req, res) => registerController.handle(req, res));
    app.post('/api/auth/login', (req, res) => loginController.handle(req, res));

    app.listen(port, () => {
        console.log(
            `
         _         _   _       ____                  _ \n\         
        / \\  _   _| |_| |__   / ___|  ___ _ ____   _(_) ___ ___\n\ 
       / _ \\| | | | __| '_ \\  \\___ \\ / _ \\ '__\\ \\ / / |/ __/ _ \\\n\
      / ___ \\ |_| | |_| | | |  ___) |  __/ |   \\ V /| | (_|  __/\n\
     /_/   \\_\\__,_|\\__|_| |_| |____/ \\___|_|    \\_/ |_|\\___\\___|\n\
     `
        )
    });
  }
}
