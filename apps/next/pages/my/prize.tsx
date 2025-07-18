/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2023-12-18 17:03:22
 * @FilePath: /apps/next/pages/prize.tsx
 */
import PrizeScreen from 'app/pages/my/prize';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Head>
        <title>{t('screen.prize.title')}</title>
      </Head>
      <PrizeScreen />
    </>
  );
}
