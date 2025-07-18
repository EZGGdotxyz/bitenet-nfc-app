/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-19 15:14:51
 * @FilePath: /snapx-nfc-app/apps/next/pages/my/update_phone.tsx
 */
import UpdatePhoneScreen from 'app/pages/my/update_phone';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Head>
        <title>{t('screen.update_phone.title')}</title>
      </Head>
      <UpdatePhoneScreen />
    </>
  );
}
