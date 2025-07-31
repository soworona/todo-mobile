import notifee from '@notifee/react-native';

export default async function onDisplayNotification(title: any, body: any) {

  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  await notifee.displayNotification({
    title: title,
    body: body,
    android: {
      channelId,
      pressAction: {
        id: 'default',
      },
    },
  });

}
