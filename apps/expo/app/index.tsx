/*
 * @Date: 2024-01-10 16:57:40
 * @LastEditors: yosan
 * @LastEditTime: 2024-02-19 16:04:09
 * @FilePath: /snapx-nfc-app/apps/expo/app/index.tsx
 */
import HomeScreen from 'app/pages/home';
import {Stack} from 'expo-router';
import Svg, {Circle, Path} from 'react-native-svg';

export default function App() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          title: '',
          headerShadowVisible: false,
        }}
      />
      <HomeScreen />
    </>
  );
}
