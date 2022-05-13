import { NotificationRepository } from "../../domain/ports/NotificationRepository";
import { UserRepository } from "../../domain/ports/UserRepository";

export class UserRegister {

    constructor(
        private repository: UserRepository,
        private notificationRepository: NotificationRepository
    ) {

    }


    async registerUser(name: string, email: string, age: number) {
        // Validar que no exista el email
        const exists = await this.repository.existsEmail(email);

        if(exists) {
            throw new Error('Ya existe un usuario con este email');
        }
        // Validar datos correctos

        // Registrar el usuario
        const registeredUser = await this.repository.register({ name, email, age });
        // Notificar
        await this.notificationRepository.notify(email);
        // Devolver el usuario registrado

        return registeredUser;
    }

}