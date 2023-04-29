import logging from "../../config/logging";
import Game from "../../models/Game";
import { Request, Response, NextFunction } from "express";

export const dataController = {
  async index(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const foundGames = await Game.find({});
      console.log({ foundGames });
      logging.info(foundGames);
      res.locals.data.games = foundGames;
      next();
    } catch (error) {
      console.error(error);
      logging.error(error);
    }
  },
  async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {},
  async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {},
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const createdGame = await Game.create(req.body);
      console.log({ createdGame });
      logging.info(createdGame);
      res.locals.data.game = createdGame;
      next();
    } catch (error: any) {
      console.error(error.message);
      logging.error(error);
    }
  },
  async show(
    req: Request | any,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const foundGame = await Game.create(req.body);
      console.log({ foundGame });
      logging.info(foundGame);
      res.locals.data.game = foundGame;
      next();
    } catch (error: any) {
      console.error(error.message);
      logging.error(error);
    }
  },
};

export const apiController = {
  index(req: Request, res: Response) {
    res.json(res.locals.data.games);
  },
  show(req: Request, res: Response) {
    res.json(res.locals.data.game);
  },
};
