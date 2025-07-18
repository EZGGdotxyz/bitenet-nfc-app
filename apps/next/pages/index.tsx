/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-02-18 14:09:44
 * @FilePath: /snapx-nfc-app/apps/next/pages/index.tsx
 */
import HomeScreen from 'app/pages/home';
import Head from 'next/head';
import {useTranslation} from 'react-i18next';
export default function Page() {
  const {t} = useTranslation();
  return (
    <>
      <Head>
        <title>{t('screen.home.title')}</title>
      </Head>
      <HomeScreen />
    </>
  );
}
