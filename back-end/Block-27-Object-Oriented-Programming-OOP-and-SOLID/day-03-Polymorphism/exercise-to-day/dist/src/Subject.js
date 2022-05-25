"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subject {
    constructor(_name) {
        this._name = _name;
        this.name = _name; // nome da disciplina.
    }
    get name() { return this._name; }
    ;
    set name(params) {
        this.isValidName(params);
        this._name = params;
    }
    isValidName(name) {
        const LIMIT = 3;
        if (name.length < LIMIT)
            throw new Error('The name must be at least 3 characters long');
    }
}
exports.default = Subject;
