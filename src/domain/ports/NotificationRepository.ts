export interface NotificationRepository {

    notify(email: string): Promise<void>;

}