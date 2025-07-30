import { useEffect } from "react";
import messaging from '@react-native-firebase/messaging';
import Toast from "react-native-toast-message";

const checkToken =  async () => {

 const fcmToken = await messaging().getToken();
 if (fcmToken) {
    console.log("Fcm token: ",fcmToken);
 } 
}
const handleForegroundMessage = () => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('Foreground message:', remoteMessage);

      Toast.show({
         type:'info',
         text1:remoteMessage.notification?.title,
         text2: remoteMessage.notification?.body 
      });
    });

    return unsubscribe;
  };


export {checkToken, handleForegroundMessage};