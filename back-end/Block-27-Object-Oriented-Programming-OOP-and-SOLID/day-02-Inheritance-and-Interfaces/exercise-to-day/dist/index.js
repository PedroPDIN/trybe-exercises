"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const School_1 = __importDefault(require("./src/School"));
const student1 = new School_1.default('001001', 'Pedro', [10, 2, 4, 5], [10, 10]);
console.log(student1.message());
