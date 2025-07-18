/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-02-02 10:46:31
 * @FilePath: /snapx-nfc-app/apps/expo/app/invite.tsx
 */
import InviteScreen from 'app/pages/invite';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Stack.Screen
        options={{
          title: t('screen.invite.title'),
          headerShadowVisible: false,
        }}
      />
      <InviteScreen />
    </>
  );
}
