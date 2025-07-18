/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2023-12-18 16:59:55
 * @FilePath: /snapx-nfc-app/apps/next/pages/my.tsx
 */
import MyScreen from 'app/pages/my/home/index';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Head>
        <title>{t('screen.my.title')}</title>
      </Head>
      <MyScreen />
    </>
  );
}
