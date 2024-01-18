import { CustomError } from "./Custom-Error";

export class ValidationError extends CustomError {
  statusCode = 400;

  constructor() {
    super("Validation Failed");

    Object.setPrototypeOf(this, ValidationError.prototype);
  }

  serializeErrors(): { message: string }[] {
    return [{ message: "Invalid request parameters" }];
  }
}
