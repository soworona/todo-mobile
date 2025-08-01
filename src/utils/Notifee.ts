import notifee from '@notifee/react-native';

export async function onDisplayNotification(title: any, body: any) {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  const notificationId = await notifee.displayNotification({
    title: title,
    body: body,
    android: {
      channelId,
      pressAction: {
        id: 'default',
      },
    },
  });

  return notificationId
}


export async function cancelNotification(notificationId: string) {
  await notifee.cancelNotification(notificationId);
}

