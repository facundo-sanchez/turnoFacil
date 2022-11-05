import { Request, Response } from "express";

import User from "../models/user";

export const getUsuarios = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const usuarios = await User.findAll({where:{status:true}});
    return res.json({
      usuarios,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error,
    });
  }
};

export const getUsuariosID = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;
    const usuario = await User.findByPk(id);

    if (!usuario)
      return res.status(404).json({
        ok: false,
        msg: "User not found",
      });

    return res.json({
      usuario,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error,
    });
  }
};

export const postUsuarios = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { body } = req;

    const readyEmail = await User.findOne({
      where: {
        email: body.email,
      },
    });

    if (readyEmail)
      return res.status(400).json({
        ok: false,
        msg: "Email ready in use",
      });

    const user = await User.create(body);

    return res.json({
      msg: "postUsuaios",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error,
    });
  }
};

export const putUsuarios = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { body } = req;
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user)
      return res.status(404).json({
        ok: false,
        msg: "User not found",
      });

    await user.update(body);

    return res.json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error,
    });
  }
};

export const deleteUsuarios = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user)
      return res.status(404).json({
        ok: false,
        msg: "User not found",
      });

    // await user.destroy(); //eliminacion directa

    await user.update({ status: false }); //eliminacion logica

    return res.json({ user });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error,
    });
  }
};
