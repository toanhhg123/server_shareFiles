import { sign, SignOptions } from 'jsonwebtoken';
import 'dotenv/config';

type PayLoad = string | object | Buffer;
export const generateToken = (payload: PayLoad): string => {
    const privateKey = process.env.JWT_PRIVATEKEY || 'No key';

    const signInOptions: SignOptions = {
        // RS256 uses a public/private key pair. The API provides the private key
        // to generate the JWT. The client gets a public key to validate the
        // signature
        expiresIn: '1h',
    };

    return sign(payload, privateKey, signInOptions);
};
