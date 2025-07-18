/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-27 11:05:54
 * @FilePath: /snapx-nfc-app/apps/expo/app/restaurant/[id].tsx
 */
import RestaurantDetailScreen from 'app/pages/restaurant/detail/index';
import {Stack} from 'expo-router';
import {useTranslation} from 'react-i18next';
import Svg, {Path} from 'react-native-svg';

export default function Screen() {
  const {t} = useTranslation();

  return (
    <>
      <Stack.Screen
        options={{
          title: t('screen.restaurant.detail.title'),
        }}
      />
      <RestaurantDetailScreen />
    </>
  );
}
