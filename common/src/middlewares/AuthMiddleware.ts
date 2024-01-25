import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const AuthMiddleware = (
  req: Request & { user: JwtPayload | string },
  res: Response,
  next: NextFunction
) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).send({ msg: "User not verified" });

  const secret = process.env.JWT_KEY;
  if (!secret) return res.status(500).send({ msg: "JWT KEY must be defined" });

  try {
    const payload = jwt.verify(token, secret);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(403).send({ msg: "Athorization failed" });
  }
};
