/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2023-12-18 17:28:47
 * @FilePath: /apps/expo/app/my/about_us.tsx
 */
import AboutUsScreen from 'app/pages/my/about_us';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Stack.Screen
        options={{

          title: t('screen.about_us.title'),
          headerShadowVisible: false,
        }}
      />
      <AboutUsScreen />
    </>
  );
}
