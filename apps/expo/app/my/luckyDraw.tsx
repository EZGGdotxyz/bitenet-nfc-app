/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-17 17:31:14
 * @FilePath: /bitenet-nfc-app/apps/expo/app/my/luckyDraw.tsx
 */
import LuckyDrawScreen from 'app/pages/my/luckyDraw';
import { Stack } from 'expo-router';
import {useTranslation} from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();
  return (
    <>
      <Stack.Screen
        options={{

          title: t('screen.luckyDraw.title'),
          headerShadowVisible: false,
        }}
      />
      <LuckyDrawScreen />
    </>
  );
}
