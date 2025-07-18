/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-27 14:40:40
 * @FilePath: /snapx-nfc-app/apps/expo/app/restaurant/exchange.tsx
 */
import ExchangeScreen from 'app/pages/restaurant/exchange/index';
import {Stack} from 'expo-router';
import {useTranslation} from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();
  return (
    <>
      <Stack.Screen
        options={{
          title: t('screen.restaurant.exchange.title'),
        }}
      />
      <ExchangeScreen />
    </>
  );
}
