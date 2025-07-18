/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2023-12-18 17:04:07
 * @FilePath: /apps/next/pages/personal_info.tsx
 */
import PersonalInfoScreen from 'app/pages/my/personal_info';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const {t} = useTranslation();

  return (
    <>
      <Head>
        <title>{t('screen.personal_info.title')}</title>
      </Head>
      <PersonalInfoScreen />
    </>
  );
}
