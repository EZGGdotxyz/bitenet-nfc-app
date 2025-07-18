/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2023-12-18 17:29:08
 * @FilePath: /apps/expo/app/my/faq.tsx
 */
import FaqScreen from 'app/pages/my/faq';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Stack.Screen
        options={{

          title: t('screen.faq.title'),
          headerShadowVisible: false,
        }}
      />
      <FaqScreen />
    </>
  );
}
