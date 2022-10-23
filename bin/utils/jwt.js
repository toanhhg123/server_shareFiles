"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
require("dotenv/config");
const generateToken = (payload) => {
    const privateKey = process.env.JWT_PRIVATEKEY || "No key";
    const signInOptions = {
        // RS256 uses a public/private key pair. The API provides the private key
        // to generate the JWT. The client gets a public key to validate the
        // signature   
        expiresIn: '1h'
    };
    return (0, jsonwebtoken_1.sign)(payload, privateKey, signInOptions);
};
exports.generateToken = generateToken;
