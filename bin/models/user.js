"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const validate_1 = require("../utils/validate");
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        require: [true, 'Email address is required'],
        unique: true,
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    passHash: { type: String, require: true },
    schoolId: { type: String, require: true },
    dateOfBirth: { type: Date, require: true },
    role: { type: String, enum: ["ADMIN", "USER"], default: 'USER' },
}, {
    timestamps: true,
});
userSchema
    .path('email')
    .validate(validate_1.validateEmail, 'The e-mail field cannot be empty.');
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
