import { model, Schema, Model, Document } from 'mongoose';
import { validateEmail } from '../utils/validate';

export interface IUser extends Document {
    email: string;
    firstName: string;
    lastName: string;
    passHash: string;
    schoolId: string;
    dateOfBirth: Date;
    role: 'ADMIN' | 'USER';
}

export type TYPE_USER = "USER" | "ADMIN"

const userSchema: Schema = new Schema(
    {
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
        role: { type: String,enum: ["ADMIN", "USER"], default: 'USER' },
    },
    {
        timestamps: true,
    },
);

userSchema
    .path('email')
    .validate(validateEmail, 'The e-mail field cannot be empty.');

const User: Model<IUser> = model<IUser>('User', userSchema);

export default User;
