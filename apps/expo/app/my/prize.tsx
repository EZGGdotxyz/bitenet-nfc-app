/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2023-12-18 17:30:12
 * @FilePath: /apps/expo/app/my/prize.tsx
 */
import PrizeScreen from 'app/pages/my/prize';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Stack.Screen
        options={{

          title: t('screen.prize.title'),
          headerShadowVisible: false,
        }}
      />
      <PrizeScreen />
    </>
  );
}
