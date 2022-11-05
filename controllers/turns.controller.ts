import { Request, Response } from "express";

export const getListTurns = (req: Request, res: Response) => {
  try {
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getTurnsID = (req: Request, res: Response) => {
  try {
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const postTurns = (req: Request, res: Response) => {
  try {
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const updateTurnsID = (req: Request, res: Response) => {
  try {
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteTurns = (req: Request, res: Response) => {
  try {
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json({ error });
  }
};
