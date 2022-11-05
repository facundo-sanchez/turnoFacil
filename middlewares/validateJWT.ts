import { Response, Request, NextFunction } from "express";
import User from "../models/user";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";

const SECRET_OR_PRIVATE_KEY: Secret = process.env.SECRETORPRIVATEKEY;

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const validateJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({
      msg: "Not token",
    });
  }
  try {
    jwt.verify(
      token,
      SECRET_OR_PRIVATE_KEY,
      async (err: Error, decoded: any) => {
        if (err) {
          res.status(401).json({
            msg: "Token invalid",
          });
        } else {
          const userAuth = await User.findByPk(decoded.id, {
            attributes: ["name", "email", "role"],
          });
          if (userAuth) {
            (req as CustomRequest).token = userAuth;
            next();
          } else {
            return res.status(401).json({
              msg: "User not available",
            });
          }
        }
      }
    );
  } catch (e) {
    return res.status(401).json({
      msg: "Token error",
    });
  }
};
