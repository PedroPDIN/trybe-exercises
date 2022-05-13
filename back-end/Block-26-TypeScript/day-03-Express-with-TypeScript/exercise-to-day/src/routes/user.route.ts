import { Router } from "express";
import {
  getAllController,
  getByIdController,
} from "../controllers/user.controller";

const route = Router();

route.get("/", getAllController);
route.get("/:id", getByIdController);

export default route;
