"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyUser = exports.updateUser = exports.createUser = exports.getByIdController = exports.getAllController = void 0;
const user_services_1 = __importDefault(require("../services/user.services"));
const service = new user_services_1.default();
const getAllController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service.getAll();
    if (!result)
        return res.status(400).json({ message: 'Error' });
    return res.status(200).json(result);
});
exports.getAllController = getAllController;
const getByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service.getById(Number(req.params.id));
    if (!result)
        return res.status(400).json({ message: 'Not Found' });
    return res.status(200).json(result);
});
exports.getByIdController = getByIdController;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const result = yield service.createdUser(user);
    if (!result)
        return res.status(400).json({ message: 'Error' });
    return res.status(201).json(result);
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const userBody = req.body;
    const result = yield service.updateUser(Number(userId), userBody);
    if (!result)
        return res.status(400).json({ message: 'Not found' });
    return res.status(200).json(result);
});
exports.updateUser = updateUser;
const destroyUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.params.id);
    yield service.destroyUser(userId);
    return res.status(200).json({ message: 'User deleted success' });
});
exports.destroyUser = destroyUser;
