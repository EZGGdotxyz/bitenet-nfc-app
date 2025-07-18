/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-17 17:31:20
 * @FilePath: /bitenet-nfc-app/apps/expo/app/my/index.tsx
 */
import MyScreen from 'app/pages/my/home/index';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Stack.Screen
        options={{

          title: t('screen.my.title'),
          headerShadowVisible: false,
        }}
      />
      <MyScreen />
    </>
  );
}
