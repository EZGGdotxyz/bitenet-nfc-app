/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-02-05 14:40:25
 * @FilePath: /snapx-nfc-app/apps/expo/app/login/index.tsx
 */
import * as WebBrowser from 'expo-web-browser';
import FirebaseApp from '@react-native-firebase/app';
import LoginHomeScreen from 'app/pages/login/home';
import * as AppleAuthentication from 'expo-apple-authentication';
import {Stack, useRouter} from 'expo-router';
import {useTranslation} from 'react-i18next';
import LoginThirdButton from 'app/Components/LoginThirdButton';
import {GoogleSignin, GoogleSigninButton} from '@react-native-google-signin/google-signin';
let clientID = FirebaseApp.app()?._options.clientId;
import {makeRedirectUri, startAsync, useAuthRequest, ResponseType} from 'expo-auth-session';

import useUser from 'app/hooks/useUser';
import {useEffect} from 'react';
import {useToastController} from '@my/ui';
GoogleSignin.configure({
  // webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
  // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  // hostedDomain: '', // specifies a hosted domain restriction
  // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  // accountName: '', // [Android] specifies an account name on the device that should be used
  iosClientId: clientID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  // googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  // openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  // profileImageSize: 120, //
});

const discovery = {
  authorizationEndpoint: 'https://api.instagram.com/oauth/authorize',
  tokenEndpoint: 'https://api.instagram.com/oauth/access_token',
};

export default function Page() {
  const {t} = useTranslation();

  const {_memberAuthSiginInWithThirdpart, onLink} = useUser();
  const toast = useToastController();

  const InstagramLogin = () => {
    const [request, response, promptAsync] = useAuthRequest(
      {
        clientId: '329246383307823',
        scopes: ['user_profile'],
        responseType: 'code',
        redirectUri: makeRedirectUri({
          native: 'https://app.bitenet.io/auth/handler',
          // useProxy: Platform.select({web: false, default: true}),
        }),
      },
      discovery,
    );
    const {_memberAuthSiginInWithInstagram} = useUser();

    useEffect(() => {
      if (response?.type === 'success') {
        console.log('🚀 ~ useEffect ~ response:', response);
        if (response?.params?.code) {
          _memberAuthSiginInWithInstagram({
            redirectUri: 'https://app.bitenet.io/auth/handler',
            code: response?.params?.code,
          });
        }
        toast.show(JSON.stringify(response?.params));
      }
    }, [response]);

    return (
      <LoginThirdButton
        type="instagram"
        onPress={() => {
          promptAsync();
        }}
      />
    );
  };

  const GoogleLogin = () => {
    return (
      <LoginThirdButton
        type="google"
        onPress={async () => {
          try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            await _memberAuthSiginInWithThirdpart({
              appType: 'google.com',
              userId: userInfo?.user?.id,
              nickname: userInfo?.user?.name || userInfo?.user?.givenName + ' ' + userInfo?.user.givenName,
              avatar: userInfo?.user?.photo || '',
              gender: 'UNKNOWN',
              app: true,
            });
            onLink();
          } catch (error) {
            console.log(error);
          }
        }}
      />
    );
  };

  const AppleLogin = () => {
    return (
      <LoginThirdButton
        type={'apple'}
        onPress={async () => {
          try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            });
            await _memberAuthSiginInWithThirdpart({
              appType: 'apple.com',
              userId: credential?.user,
              nickname: credential?.fullName?.givenName + ' ' + credential?.fullName?.familyName,
              avatar: '',
              gender: 'UNKNOWN',
              app: true,
            });
            onLink();
            // signed in
          } catch (e) {
            if (e.code === 'ERR_REQUEST_CANCELED') {
              // handle that the user canceled the sign-in flow
            } else {
              // handle other errors
            }
          }
        }}
      />
    );
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: t('screen.login.title'),
          headerShadowVisible: false,
        }}
      />
      <LoginHomeScreen InstagramLogin={InstagramLogin} GoogleLogin={GoogleLogin} AppleLogin={AppleLogin} />
    </>
  );
}
