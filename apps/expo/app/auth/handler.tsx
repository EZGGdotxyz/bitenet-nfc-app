/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-23 16:42:19
 * @FilePath: /snapx-nfc-app/apps/expo/app/auth/handler.tsx
 */
import useUser from 'app/hooks/useUser';
import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {createParam} from 'solito';
import {Stack} from 'expo-router';

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
      <Stack.Screen />
      {/* <AboutUsScreen /> */}
    </>
  );
}
