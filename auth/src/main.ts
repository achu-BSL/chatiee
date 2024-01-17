import { Register } from "./application/use-cases/Register";
import { UserRepository } from "./infrastructure/repositories/UserRepository";
import { Server } from "./presentation/Server";
import { RegisterController } from "./presentation/controllers/RegisterController";

const main = () => {
  const userRepo = new UserRepository();

  const registerUseCase = new Register(userRepo);

  const registerController = new RegisterController(registerUseCase);

  Server.run(3000, registerController);
};

main();