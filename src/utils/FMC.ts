import messaging from '@react-native-firebase/messaging';
import { onDisplayNotification } from "./Notifee";

const checkToken =  async () => {
  await messaging().registerDeviceForRemoteMessages();
 const fcmToken = await messaging().getToken();
 if (fcmToken) {
    console.log("Fcm token: ",fcmToken);
 } 
}
const handleForegroundMessage = () => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {

      // Toast.show({
      //    type:'info',
      //    text1:remoteMessage.notification?.title,
      //    text2: remoteMessage.notification?.body 
      // });
          
      const { title, body } = remoteMessage.notification || {};
      const notificationId = await onDisplayNotification(title, body);
      console.log("nid",notificationId)
    });

    return unsubscribe;
  };


export { checkToken, handleForegroundMessage };
