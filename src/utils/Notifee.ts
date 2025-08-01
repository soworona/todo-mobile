import notifee, {
  EventType,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
import { navigate } from '../navigation/NavigationService';

export async function createNotifeeChannel() {
  const permission = await notifee.requestPermission();
  console.log('Notification permission:', permission);
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });
  return channelId;
}
export async function onDisplayNotification(title: any, body: any) {
  const notificationId = await notifee.displayNotification({
    title: title,
    body: body,
    android: {
      channelId: 'default',
      pressAction: {
        id: 'default',
      },
    },
  });

  return notificationId;
}

export async function scheduleNotification(
  taskId: string,
  title: string,
  dueDate: Date,
) {
  const triggerTime = new Date(dueDate.getTime() - 1 * 60 * 1000);
  console.log('trigger time', triggerTime);
  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: triggerTime.getTime(),
    alarmManager: true,
  };

  const notificationId = await notifee.createTriggerNotification(
    {
      title,
      body: `"${title}" is due in 5 minutes!`,
      data: { taskId },
      android: {
        channelId: 'default',
        pressAction: {
          id: 'default',
        },
      },
    },
    trigger,
  );

  console.log('Notification scheduled with ID:', notificationId);

  return notificationId;
}

export async function cancelNotification(notificationId: string) {
  await notifee.cancelNotification(notificationId);
}

export function handleNotificationTap() {
  return notifee.onForegroundEvent(({ type, detail }) => {
    switch (type) {
      case EventType.PRESS:
        const taskId = String(detail.notification?.data);
        if (taskId) {
          navigate('Details', { id: taskId });
        }
    }
  });
}
