import { Request, Response, NextFunction } from "express";
import User from "../../models/User";
import IUser from "../../@types/users";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { checkToken, createJWT } from "../../middleware/checkToken";
import logging from "../../config/logging";

const NAMESPACE = "User";

const dataController = {
  //Index: GET
  async index(
    req: Request | any,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const foundUsers = await User.find({});
      console.log(foundUsers);
      logging.info(foundUsers, NAMESPACE);
      res.locals.data = {};
      res.locals.data.users = foundUsers;
      next();
    } catch (error) {
      res.status(400).send("Cannot find any users");
      logging.error(error, NAMESPACE);
    }
  },
  // Destroy: DESTROY
  async destroy(
    req: Request | any,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const deleteUser = await User.findByIdAndDelete({});
      console.log(deleteUser);
      logging.info(deleteUser, NAMESPACE);
      res.locals.data = {};
      res.locals.data.users = deleteUser;
      next();
    } catch (error) {
      res.status(400).send("Error Deleting User");
      logging.error(error, NAMESPACE);
    }
  },
  // Update: PUT
  async update(
    req: Request | any,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.body.user;
    try {
      const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      logging.info(updateUser, NAMESPACE);
      res.locals.data = {};
      res.locals.data.user = updateUser;
      next();
    } catch (error) {
      res.status(400).send("Cannot find any users");
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
      const foundUser = await User.find({});
      logging.info(foundUser, NAMESPACE);
      res.locals.data = {};
      res.locals.data.user = foundUser;
      next();
    } catch (error) {
      res.status(400).send("Cannot find any users");
      logging.error(error, NAMESPACE);
    }
  },
  // Register: POST
  async register(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { firstName, lastName, email, password, isAdmin }: IUser = req.body;
    try {
      const user = await User.create(req.body);
      logging.info(user, NAMESPACE);
      const token = createJWT(user);
      logging.info(token, NAMESPACE);
      res.locals.data = {};
      res.locals.data.user = user;
      res.locals.data.token = token;
      next();
    } catch (error) {
      res.status(400).json(error);
      logging.error(error, NAMESPACE);
    }
  },
  // Login: POST
  async login(
    req: Request | any,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) throw new Error("error finding user");
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) throw new Error("unable to match passwords, try again");
      res.locals.data = {};
      res.locals.data.user = user;
      res.locals.data.token = createJWT(user);
      next();
    } catch (error) {
      res.status(400).json("Bad Credentials");
      logging.error(error, NAMESPACE);
    }
  },
};

const apiController = {
  index(req: Request, res: Response) {
    res.json(res.locals.data.users);
  },
  show(req: Request, res: Response) {
    res.json(res.locals.data.user);
  },
  auth(req: Request, res: Response) {
    res.json(res.locals.data.token);
  },
};
export { checkToken, dataController, apiController };
