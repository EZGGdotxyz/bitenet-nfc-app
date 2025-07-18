/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2023-12-18 17:29:27
 * @FilePath: /apps/expo/app/my/privacy.tsx
 */
import PrivacyScreen from 'app/pages/my/privacy';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Stack.Screen
        options={{

          title: t('screen.privacy.title'),
          headerShadowVisible: false,
        }}
      />
      <PrivacyScreen />
    </>
  );
}
