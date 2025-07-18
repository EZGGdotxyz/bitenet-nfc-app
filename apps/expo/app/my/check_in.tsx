/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2023-12-18 17:28:53
 * @FilePath: /apps/expo/app/my/check_in.tsx
 */
import CheckInScreen from 'app/pages/my/check_in';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Stack.Screen
        options={{

          title: t('screen.check_in.title'),
          headerShadowVisible: false,
        }}
      />
      <CheckInScreen />
    </>
  );
}
