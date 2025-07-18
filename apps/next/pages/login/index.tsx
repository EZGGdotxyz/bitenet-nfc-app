/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-02-05 14:18:39
 * @FilePath: /snapx-nfc-app/apps/next/pages/login/index.tsx
 */
import LoginThirdButton from 'app/Components/LoginThirdButton';
import LoginHomeScreen from 'app/pages/login/home';
import {GoogleAuthProvider, OAuthProvider, getAuth, getRedirectResult, signInWithRedirect} from 'firebase/auth';
import Head from 'next/head';
import {useTranslation} from 'react-i18next';
// import {makeRedirectUri, useAuthRequest} from 'expo-auth-session';
// import {useEffect} from 'react';
// import * as WebBrowser from 'expo-web-browser';
// WebBrowser.maybeCompleteAuthSession();
// const { Constants, ExecutionEnvironment } = require('expo-constants');
export default function Page() {
  const {t} = useTranslation();

  const login = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const auth = getAuth();
    auth.languageCode = 'it';

    signInWithRedirect(auth, provider);
  };
  const appleLogin = () => {
    const provider = new OAuthProvider('apple.com');
    provider.addScope('email');
    provider.addScope('name');
    provider.setCustomParameters({
      // Localize the Apple authentication screen in French.
      locale: 'fr',
    });
    const auth = getAuth();
    signInWithRedirect(auth, provider);
  };

  const InstagramLogin = () => {
    // // Endpoint
    // const discovery = {
    //   authorizationEndpoint: 'https://api.instagram.com/oauth/authorize',
    //   tokenEndpoint: 'https://api.instagram.com/oauth/access_token',
    //   revocationEndpoint: 'https://api.instagram.com/oauth/revoke',
    // };

    // const [request, response, promptAsync] = useAuthRequest(
    //   {
    //     clientId: '<Instagram Client ID>',
    //     scopes: ['user_profile', 'user_media'],
    //     usePKCE: false,
    //     redirectUri: makeRedirectUri({useProxy: true}),
    //   },
    //   discovery,
    // );

    // useEffect(() => {
    //   if (response?.type === 'success') {
    //     const {code} = response.params;
    //     // Now send the code to your server to exchange for user's access token.
    //   }
    // }, [response]);

    return (
      <LoginThirdButton
        type={'instagram'}
        onPress={() => {
          const clientId = '329246383307823';
          const redirectUri = encodeURIComponent('https://app.bitenet.io/auth/handler');
          const responseType = 'code';
          const scope = encodeURIComponent('user_profile');
          window.location.href = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;
        }}
      />
    );
  };

  const GoogleLogin = () => {
    return (
      <LoginThirdButton
        type={'google'}
        onPress={() => {
          login();
        }}
      />
    );
  };

  const AppleLogin = () => {
    return (
      <LoginThirdButton
        type={'apple'}
        onPress={() => {
          appleLogin();
        }}
      />
    );
  };

  return (
    <>
      <Head>
        <title>{t('screen.login.title')}</title>
      </Head>
      <LoginHomeScreen InstagramLogin={InstagramLogin} GoogleLogin={GoogleLogin} AppleLogin={AppleLogin} />
    </>
  );
}
