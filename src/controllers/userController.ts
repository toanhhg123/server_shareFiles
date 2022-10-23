import { Request, Response } from 'express';
import { IUserRegister, IUserResponse } from './../Interfaces/user';
import { generateToken } from './../utils/jwt';
import User, { IUser } from '../models/user';

export const login = async (
    req: Request,
    res: Response,
): Promise<Response<void>> => {
    try {
        const { email, password } = req.body as {
            email: string;
            password: string;
        };

        const user = await User.findOne({ email }).exec();
        if (!user) throw new Error('Not Found Email');

        const userResponse: IUserResponse = {
            _id: user.id,
            lastName: user.lastName,
            firstName: user.firstName,
            email: user.email,
            schoolId: user.schoolId,
            dateOfBirth: user.dateOfBirth,
        };
        return res.json(generateToken({ ...userResponse }));
    } catch (error: any) {
        return res.status(400).json({ message: error?.message });
    }
};

export const register = async (
    req: Request,
    res: Response,
): Promise<Response<void>> => {
    try {
        const { email, lastName, firstName, schoolId, password, dateOfBirth } =
            req.body as IUserRegister;

        const user = new User({
            lastName,
            firstName,
            email,
            schoolId,
            dateOfBirth,
        });

        await user.save();

        return res.json(
            generateToken({
                lastName,
                firstName,
                email,
                schoolId,
                dateOfBirth,
            }),
        );
    } catch (error: any) {
        return res.status(400).json({ message: error.message });
    }
};
