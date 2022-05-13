import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/ports/UserRepository";
import UserModel from '../mongo/UserSchema';

export class UserMongoRepository implements UserRepository {
    async register(user: User): Promise<User> {
        return await UserModel.create(user);
    }
    async existsEmail(email: string): Promise<boolean> {
        const exists = await UserModel.findOne({ email });
        return Boolean(exists);
    }

} 