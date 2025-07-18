/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-30 18:04:29
 * @FilePath: /snapx-nfc-app/apps/next/pages/register.tsx
 */
import RegisterScreen from 'app/pages/register';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Head>
        <title>{t('screen.register.title')}</title>
      </Head>
      <RegisterScreen />
    </>
  );
}
