/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2023-12-18 17:05:16
 * @FilePath: /apps/next/pages/check_in.tsx
 */
import CheckInScreen from 'app/pages/my/check_in';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Head>
        <title>{t('screen.check_in.title')}</title>
      </Head>
      <CheckInScreen />
    </>
  );
}
