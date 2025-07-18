/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2023-12-18 17:29:44
 * @FilePath: /apps/expo/app/my/property.tsx
 */
import PropertyScreen from 'app/pages/my/property';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Stack.Screen
        options={{

          title: t('screen.property.title'),
          headerShadowVisible: false,
        }}
      />
      <PropertyScreen />
    </>
  );
}
