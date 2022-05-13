import { NotificationRepository } from "../../domain/ports/NotificationRepository";

export class NotificationEmailRepository implements NotificationRepository {
    
    async notify(email: string): Promise<void> {
        // TODO: Implement!
        return;
    }

}