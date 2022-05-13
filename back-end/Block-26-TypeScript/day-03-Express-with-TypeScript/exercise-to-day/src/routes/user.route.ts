import { Router } from "express";
import {
  getAllController,
  getByIdController,
  createUser,
} from "../controllers/user.controller";
import { isValidUser } from "../middlewares/validation/user.validation";

const route = Router();

route.get("/", getAllController);
route.get("/:id", getByIdController);
route.post('/', isValidUser, createUser);

export default route;
