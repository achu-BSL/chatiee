import express, {json, urlencoded} from "express";

export class Server {
  static run(port: number) {
    const app = express();

    app.use(json());
    app.use(urlencoded({extended: true}));


    app.get("api/auth", (req, res) => {
      res.send("Auth Service");
    });



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
