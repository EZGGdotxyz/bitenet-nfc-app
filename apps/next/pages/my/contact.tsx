/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2023-12-18 17:05:01
 * @FilePath: /apps/next/pages/contact.tsx
 */
import ContactScreen from 'app/pages/my/contact';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Head>
        <title>{t('screen.contact.title')}</title>
      </Head>
      <ContactScreen />
    </>
  );
}
