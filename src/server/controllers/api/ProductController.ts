import logging from "../../config/logging";
import Product from "../../models/Product";
import { Request, Response, NextFunction } from "express";

const NAMESPACE = "Product";

export const dataController = {
  // Index: GET
  async index(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const foundProducts = await Product.find({}).populate("category").exec();
      console.log({ foundProducts });
      logging.info(foundProducts);
      res.locals.data.products = foundProducts;
      next();
    } catch (error) {
      console.error(error);
      logging.error(error, NAMESPACE);
    }
  },
  // Delete: DELETE
  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      console.log(deletedProduct);
      logging.info(deletedProduct, NAMESPACE);
      res.locals.data = {};
      res.locals.data.product = deletedProduct;
      next();
    } catch (error) {
      res.status(400).send("Product not found");
      logging.error(error, NAMESPACE);
    }
  },
  // Update: PUT
  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      console.log(updatedProduct);
      logging.info(updatedProduct, NAMESPACE);
      res.locals.data.product = updatedProduct;
      next();
    } catch (error: any) {
      console.error(error.message);
      logging.error(error, NAMESPACE);
    }
  },
  // Create: Post
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const createdProduct = await Product.create(req.body);
      console.log({ createdProduct });
      logging.info(createdProduct);
      res.locals.data.product = createdProduct;
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
      const foundProduct = await Product.findById(req.params.id);
      console.log({ foundProduct });
      logging.info(foundProduct);
      res.locals.data.product = foundProduct;
      next();
    } catch (error: any) {
      console.error(error.message);
      logging.error(error, NAMESPACE);
    }
  },
};

export const apiController = {
  index(req: Request, res: Response) {
    res.json(res.locals.data.products);
  },
  show(req: Request, res: Response) {
    res.json(res.locals.data.product);
  },
};
