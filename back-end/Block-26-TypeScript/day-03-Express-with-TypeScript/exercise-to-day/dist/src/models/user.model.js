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
Object.defineProperty(exports, "__esModule", { value: true });
class UserModel {
    constructor(connection) {
        this.connection = connection;
    }
    ;
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * FROM Users;';
            const [result] = yield this.connection.execute(query);
            return result;
        });
    }
    ;
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * FROM Users WHERE id = ?';
            const [data] = yield this.connection.execute(query, [id]);
            const [user] = data;
            return user || null;
        });
    }
    ;
    createdUser(u) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = u;
            const query = 'INSERT INTO TypeScriptExpress.Users (name, email, password) VALUES (?, ?, ?);';
            const [{ insertId }] = yield this.connection.execute(query, [name, email, password]);
            const newUser = { id: insertId, name, email, password };
            return newUser;
        });
    }
    ;
    updateUser(id, u) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = u;
            const query = 'UPDATE TypeScriptExpress.Users SET name = ?, email = ?, password = ? WHERE id = ?;';
            yield this.connection.execute(query, [name, email, password, id]);
            const newUser = { id, name, email, password };
            return newUser;
        });
    }
    ;
    destroyUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'DELETE FROM TypeScriptExpress.Users WHERE id = ?;';
            yield this.connection.execute(query, [id]);
        });
    }
    ;
}
exports.default = UserModel;
;
