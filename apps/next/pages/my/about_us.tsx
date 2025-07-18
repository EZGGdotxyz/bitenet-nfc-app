/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2023-12-18 17:05:42
 * @FilePath: /apps/next/pages/about_us.tsx
 */
import AboutUsScreen from 'app/pages/my/about_us';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Head>
        <title>{t('screen.about_us.title')}</title>
      </Head>
      <AboutUsScreen />
    </>
  );
}
