/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-02-02 10:48:39
 * @FilePath: /snapx-nfc-app/apps/next/pages/invite.tsx
 */
import InviteScreen from 'app/pages/invite';
import Head from 'next/head';
import {useTranslation} from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Head>
        <title>{t('screen.invite.title')}</title>
      </Head>
      <InviteScreen />
    </>
  );
}
