import bcrypt from 'bcryptjs';
import { Request, Response } from "express";
import { generateJWT } from '../middlewares/generateJWT';


import User from "../models/user";

export const authUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password } = req.body;

    const isUser = await User.findOne({ where: { email, status: true } });

    const userValidPassword = bcrypt.compareSync(password, isUser.getDataValue('password'))
    if (!userValidPassword) {
      return res.status(401).json({});
    }
    const token = await generateJWT(isUser.getDataValue('id'))

    return res.status(200).json({ isUser, token });
  } catch (error) {
    return res.status(500);
  }
};
