import { Login } from "./application/use-cases/Login";
import { Register } from "./application/use-cases/Register";
import connectDb from "./infrastructure/database/setup";
import { UserRepository } from "./infrastructure/repositories/UserRepository";
import { Server } from "./presentation/Server";
import { LoginController } from "./presentation/controllers/LoginController";
import { RegisterController } from "./presentation/controllers/RegisterController";

const main = async () => {
  await connectDb();

  const userRepo = new UserRepository();

  const registerUseCase = new Register(userRepo);
  const loginUseCase = new Login(userRepo);

  const registerController = new RegisterController(registerUseCase);
  const loginController = new LoginController(loginUseCase);

  Server.run(3000, registerController, loginController);
};

main();
