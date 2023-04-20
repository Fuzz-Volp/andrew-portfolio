import Art from "../../models/Art";
import { Request, Response, NextFunction } from "express";

export const dataController = {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const foundArts = await Art.find({});
      console.log({ foundArts });
      res.locals.data.arts = foundArts;
      next();
    } catch (error: any) {
      console.error(error.message);
    }
  },
  async delete(req: Request, res: Response, next: NextFunction) {},
  async update(req: Request, res: Response, next: NextFunction) {},
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const createdArt = await Art.create(req.body);
      res.locals.data.art = createdArt;
      next();
    } catch (error: any) {
      console.error(error.message);
    }
  },
  async show(req: Request, res: Response, next: NextFunction) {
    try {
      const createdArt = await Art.create(req.body);
      res.locals.data.art = createdArt;
      next();
    } catch (error: any) {
      console.error(error.message);
    }
  },
};

export const apiController = {
  index(req: Request, res: Response) {
    res.json(res.locals.data.arts);
  },
  show(req: Request, res: Response) {
    res.json(res.locals.data.art);
  },
};
