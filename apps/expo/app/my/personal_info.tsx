/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2023-12-18 17:29:20
 * @FilePath: /apps/expo/app/my/personal_info.tsx
 */
import PersonalInfoScreen from 'app/pages/my/personal_info';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Stack.Screen
        options={{

          title: t('screen.personal_info.title'),
          headerShadowVisible: false,
        }}
      />
      <PersonalInfoScreen />
    </>
  );
}
