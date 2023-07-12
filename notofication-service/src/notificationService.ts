abstract class  NotificationService {
    abstract sendNotification(userId: number, message: string): void;
    abstract processNotification(): void ;
  }
  