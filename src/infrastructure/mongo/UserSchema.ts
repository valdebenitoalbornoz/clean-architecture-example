import mongoose, { Schema } from 'mongoose';
import { User } from '../../domain/entities/User';

const userSchema = new Schema<User>({
    name: String,
    email: String,
    age: Number
});

export default mongoose.model<User>('User', userSchema);
