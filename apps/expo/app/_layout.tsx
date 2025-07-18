/*
 * @Date: 2024-01-10 16:57:40
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-23 16:06:48
 * @FilePath: /bitenet-nfc-app/apps/expo/app/_layout.tsx
 */
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {Provider} from 'app/provider';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import AWS from 'aws-sdk';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import {useEffect, useRef, useState} from 'react';
import {router} from 'expo-router';
import {pushingRegisterDevice} from 'app/servers/api/1100Yidongtuisongguanli';
import {setDeviceToken} from 'app/utils/auth/index';
import {useColorScheme} from 'react-native';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  region: process.env.AWS_REGION || 'ap-southeast-1',
});
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function useNotificationObserver() {
  // 设置推送权限
  const registerForPushNotificationsAsync = async () => {
    if (Device.isDevice) {
      const {status: existingStatus} = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const {status} = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      // if (finalStatus !== 'granted') {
      //   alert('Failed to get push token for push notification!');
      //   return;
      // }
      const res = await Notifications.getDevicePushTokenAsync();
      if (res) {
        console.log('🚀 ~ 设备 token ~ res:', res.data);
        setDeviceToken(res.data);
        // _registerDevice(res.data);
      }
    }
  };

  useEffect(() => {
    registerForPushNotificationsAsync();
    let isMounted = true;
    const redirect = (notification: Notifications.Notification) => {
      const url = notification.request.content.data?.url;
      if (url) {
        router.push(url);
      } else {
        router.push('/my/message');
      }
    };

    // 从后台进入前台
    Notifications.getLastNotificationResponseAsync().then((response) => {
      if (!isMounted || !response?.notification) {
        return;
      }
      redirect(response?.notification);
    });

    // 从前台进入后台
    const subscription = Notifications.addNotificationResponseReceivedListener((response) => {
      redirect(response.notification);
    });

    return () => {
      isMounted = false;
      subscription.remove();
    };
  }, []);
}

export default function HomeLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });
  const scheme = useColorScheme();

  // const scheme = useColorScheme();
  useNotificationObserver();

  if (!loaded) {
    return null;
  }
  return (
    <Provider>
      <ThemeProvider value={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack />
      </ThemeProvider>
    </Provider>
  );
}
