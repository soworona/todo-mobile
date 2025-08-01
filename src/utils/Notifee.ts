import notifee, { TimestampTrigger, TriggerType } from '@notifee/react-native';

export async function createNotifeeChannel() {
    const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });
   
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

export async function scheduleNotification(title: string, dueDate: Date) {
  const triggerTime = new Date(dueDate.getTime() - 2 * 60 * 1000);
  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: triggerTime.getTime(),
    alarmManager: true,
  };

  const notificationId = await notifee.createTriggerNotification(
    {
      title,
      body: `"${title}" is due in 5 minutes!`,
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
