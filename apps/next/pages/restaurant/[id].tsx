/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-17 20:00:05
 * @FilePath: /snapx-nfc-app/apps/next/pages/restaurant/[id].tsx
 */
import RestaurantDetailScreen from 'app/pages/restaurant/detail/index';
import Head from 'next/head';
import {useTranslation} from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();
  return (
    <>
      <Head>
        <title>{t('screen.restaurant.detail.title')}</title>
      </Head>
      <RestaurantDetailScreen />
    </>
  );
}
