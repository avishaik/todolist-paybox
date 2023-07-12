export class Wake {
    addToInterval(notification: NotificationService) {
        const interval = setInterval(() => {
            notification.processNotification();
          }, 1000 * 60 * 60); // 1 hour in milliseconds
          
          // Stop the interval after a certain period (e.g., when the application exits)
          setTimeout(() => {
            clearInterval(interval);
          }, 1000 * 60 * 60 * 24); // Stop after 24 hours
    }
}



  
