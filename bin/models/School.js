"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const shoolSchema = new mongoose_1.Schema({
    Name: { type: String, require: true },
}, {
    timestamps: true,
});
const User = (0, mongoose_1.model)('Shool', shoolSchema);
exports.default = User;
