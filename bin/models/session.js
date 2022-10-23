"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const sessionSchema = new mongoose_1.Schema({
    idUser: { type: String, require: true },
    refreshToken: { type: String, require: true },
});
const session = (0, mongoose_1.model)('session', sessionSchema);
exports.default = session;
