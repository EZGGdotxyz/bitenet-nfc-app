/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2023-12-18 17:04:52
 * @FilePath: /apps/next/pages/faq.tsx
 */
import FaqScreen from 'app/pages/my/faq';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Head>
        <title>{t('screen.faq.title')}</title>
      </Head>
      <FaqScreen />
    </>
  );
}
