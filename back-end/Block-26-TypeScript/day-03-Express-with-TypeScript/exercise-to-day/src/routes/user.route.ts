import { Router } from "express";
import {
  getAllController,
  getByIdController,
  createUser,
  updateUser,
  destroyUser,
} from "../controllers/user.controller";
import { isValidUser } from "../middlewares/validation/user.validation";

const route = Router();

route.get("/", getAllController);
route.get("/:id", getByIdController);
route.post('/', isValidUser, createUser);
route.put("/:id", isValidUser, updateUser);
route.delete("/:id", destroyUser)

export default route;
