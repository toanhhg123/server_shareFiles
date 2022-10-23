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
exports.register = exports.login = void 0;
const jwt_1 = require("./../utils/jwt");
const user_1 = __importDefault(require("../models/user"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield user_1.default.findOne({ email }).exec();
        if (!user)
            throw new Error('Not Found Email');
        const userResponse = {
            _id: user.id,
            lastName: user.lastName,
            firstName: user.firstName,
            email: user.email,
            schoolId: user.schoolId,
            dateOfBirth: user.dateOfBirth,
        };
        return res.json((0, jwt_1.generateToken)(Object.assign({}, userResponse)));
    }
    catch (error) {
        return res.status(400).json({ message: error === null || error === void 0 ? void 0 : error.message });
    }
});
exports.login = login;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, lastName, firstName, schoolId, password, dateOfBirth } = req.body;
        const user = new user_1.default({
            lastName,
            firstName,
            email,
            schoolId,
            dateOfBirth,
        });
        yield user.save();
        return res.json((0, jwt_1.generateToken)({
            lastName,
            firstName,
            email,
            schoolId,
            dateOfBirth,
        }));
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
});
exports.register = register;
