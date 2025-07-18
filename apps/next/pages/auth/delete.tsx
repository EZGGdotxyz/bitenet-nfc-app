/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-02-05 14:45:27
 * @FilePath: /snapx-nfc-app/apps/next/pages/auth/delete.tsx
 */
import useUser from 'app/hooks/useUser';
import AboutUsScreen from 'app/pages/my/about_us';
import Head from 'next/head';
import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {createParam} from 'solito';

const {useParams} = createParam<any>();

export default function Page() {
  const {t} = useTranslation();

  const {params} = useParams();
  const {_memberAuthSiginInWithInstagram} = useUser();

  useEffect(() => {
    if (params?.code) {
      _memberAuthSiginInWithInstagram({
        redirectUri: 'https://app.bitenet.io/auth/handler',
        code: params.code,
      });
    }
  }, [params]);

  return (
    <>
      <Head>
        <title>{t('screen.login.title')}</title>
      </Head>
      {/* <AboutUsScreen /> */}
    </>
  );
}
