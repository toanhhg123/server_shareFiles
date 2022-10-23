import { model, Schema, Model, Document } from 'mongoose';

interface ISession extends Document {
    idUser: string;
    refreshToken: string;
}

const sessionSchema: Schema = new Schema({
    idUser: { type: String, require: true },
    refreshToken: { type: String, require: true },
});

const session: Model<ISession> = model<ISession>('session', sessionSchema);
export default session;
