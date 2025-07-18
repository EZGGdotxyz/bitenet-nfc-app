/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-30 18:04:41
 * @FilePath: /snapx-nfc-app/apps/expo/app/register.tsx
 */
import RegisterScreen from 'app/pages/register';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Stack.Screen
        options={{

          title: t('screen.register.title'),
          headerShadowVisible: false,
        }}
      />
      <RegisterScreen />
    </>
  );
}
