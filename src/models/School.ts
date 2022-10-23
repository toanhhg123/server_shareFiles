import { model, Schema, Model, Document } from 'mongoose';

interface IShcool extends Document {
    email: string;
    firstName: string;
    lastName: string;
    passHash: string;
}

const shoolSchema: Schema = new Schema(
    {
        Name: { type: String, require: true },
    },
    {
        timestamps: true,
    },
);

const User: Model<IShcool> = model<IShcool>('Shool', shoolSchema);

export default User;
