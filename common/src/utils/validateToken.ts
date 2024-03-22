import jwt from "jsonwebtoken";

export const validateToken = (secret: string, token: string) => {
  if (!secret) throw new Error("Secret is mandatory");
  if (!token) throw new Error("Token is mandatory");

  if (typeof secret !== "string") throw new Error("secret should be string");
  if (typeof token !== "string") throw new Error("Token should be string");

  const payload = jwt.verify(token, secret);
  if (payload === null) throw new Error("Invalid token");

  return payload;
};
