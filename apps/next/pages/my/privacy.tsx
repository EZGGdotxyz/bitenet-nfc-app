/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2023-12-18 17:03:55
 * @FilePath: /apps/next/pages/privacy.tsx
 */
import PrivacyScreen from 'app/pages/my/privacy';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Head>
        <title>{t('screen.privacy.title')}</title>
      </Head>
      <PrivacyScreen />
    </>
  );
}
