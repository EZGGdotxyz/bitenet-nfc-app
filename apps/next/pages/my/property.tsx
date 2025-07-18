/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2023-12-18 17:08:25
 * @FilePath: /snapx-nfc-app/apps/next/pages/property.tsx
 */
import PropertyScreen from 'app/pages/my/property';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Head>
        <title>{t('screen.property.title')}</title>
      </Head>
      <PropertyScreen />
    </>
  );
}
