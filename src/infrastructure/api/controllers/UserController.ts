import { Request, Response, NextFunction } from 'express';
import { UserRegister } from '../../../application/usecases/UserRegister';
import { NotificationEmailRepository } from '../../implementations/NotificationEmailRepository';
import { UserMongoRepository } from '../../implementations/UserMongoRepository';

export class UserController {

    public async registerUser(req: Request, res: Response, next: NextFunction) {
        console.log(req.body)
        const name: string = req.body.name;
        const email: string = req.body.email;
        const age: number = Number(req.body.age);
        const repository = new UserMongoRepository();
        const notificationRepository = new NotificationEmailRepository();
        const register = new UserRegister(repository, notificationRepository);
        const registeredUser = await register.registerUser(name, email, age);
        res.status(200).send(registeredUser);
    }
}