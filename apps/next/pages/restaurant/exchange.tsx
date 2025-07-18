/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-27 10:27:20
 * @FilePath: /snapx-nfc-app/apps/next/pages/restaurant/exchange.tsx
 */
import ExchangeScreen from 'app/pages/restaurant/exchange';
import Head from 'next/head';
import {useTranslation} from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();
  return (
    <>
      <Head>
        <title>{t('screen.restaurant.exchange.title')}</title>
      </Head>
      <ExchangeScreen />
    </>
  );
}
