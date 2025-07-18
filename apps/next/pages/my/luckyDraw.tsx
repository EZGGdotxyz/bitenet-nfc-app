/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-16 22:39:33
 * @FilePath: /snapx-nfc-app/apps/next/pages/my/luckyDraw.tsx
 */
import LuckyDrawScreen from 'app/pages/my/luckyDraw';
import Head from 'next/head';
import {useTranslation} from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();
  return (
    <>
      <Head>
        <title>{t('screen.luckyDraw.title')}</title>
      </Head>
      <LuckyDrawScreen />
    </>
  );
}
