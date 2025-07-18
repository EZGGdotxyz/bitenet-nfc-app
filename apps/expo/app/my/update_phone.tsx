/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-19 15:16:04
 * @FilePath: /snapx-nfc-app/apps/expo/app/my/update_phone.tsx
 */
import UpdatePhoneScreen from 'app/pages/my/update_phone';
import {Stack} from 'expo-router';
import {useTranslation} from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Stack.Screen
        options={{
          title: t('screen.update_phone.title'),
          headerShadowVisible: false,
        }}
      />
      <UpdatePhoneScreen />
    </>
  );
}
