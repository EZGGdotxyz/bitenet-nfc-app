/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-12 14:28:56
 * @FilePath: /snapx-nfc-app/apps/expo/app/my/message.tsx
 */
import MessageScreen from 'app/pages/my/message';
import Head from 'next/head';
import {useTranslation} from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Head>
        <title>{t('screen.message.title')}</title>
      </Head>
      <MessageScreen />
    </>
  );
}
