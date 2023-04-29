import logging from "../../config/logging";
import Category from "../../models/Category";
import { Request, Response, NextFunction } from "express";

const NAMESPACE = "Category";

export const dataController = {
  // Index: GET
  async index(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const foundCats = await Category.find({});
      console.log({ foundCats });
      logging.info(foundCats);
      res.locals.data.categories = foundCats;
      next();
    } catch (error) {
      console.error(error);
      logging.error(error, NAMESPACE);
    }
  },
  // Delete: DELETE
  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const deleteCat = await Category.findByIdAndDelete(req.params.id);
      console.log(deleteCat);
      logging.info(deleteCat, NAMESPACE);
      res.locals.data = {};
      res.locals.data.category = deleteCat;
      next();
    } catch (error) {
      res.status(400).send("Cannot find category");
      logging.error(error, NAMESPACE);
    }
  },
  // Update: PUT
  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const updatedCat = await Category.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      console.log(updatedCat);
      logging.info(updatedCat, NAMESPACE);
      res.locals.data.product = updatedCat;
      next();
    } catch (error: any) {
      console.error(error.message);
      logging.error(error, NAMESPACE);
    }
  },
  // Create: Post
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const createdCat = await Category.create(req.body);
      console.log({ createdCat });
      logging.info(createdCat);
      res.locals.data.category = createdCat;
      next();
    } catch (error: any) {
      console.error(error.message);
      logging.error(error, NAMESPACE);
    }
  },
  // Show: GET
  async show(
    req: Request | any,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const foundCat = await Category.findById(req.params.id);
      console.log({ foundCat });
      logging.info(foundCat);
      res.locals.data.category = foundCat;
      next();
    } catch (error: any) {
      console.error(error.message);
      logging.error(error, NAMESPACE);
    }
  },
};

export const apiController = {
  index(req: Request, res: Response) {
    res.json(res.locals.data.categories);
  },
  show(req: Request, res: Response) {
    res.json(res.locals.data.category);
  },
};
