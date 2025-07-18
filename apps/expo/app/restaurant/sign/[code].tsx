/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-02 18:24:41
 * @FilePath: /snapx-nfc-app/apps/expo/app/restaurant/sign/[code].tsx
 */
import AppLoading from 'app/Components/AppLoading';
import SignScreen from 'app/pages/restaurant/sign/index';
import {useRematchModel} from 'app/store/model';
import {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {createParam} from 'solito';
import * as Location from 'expo-location';
import {Alert, AppState} from 'react-native';
import * as Linking from 'expo-linking';
import {Stack, useRouter, router} from 'expo-router';
import {ChevronLeft} from '@tamagui/lucide-icons';
import {Button} from '@my/ui';

const {useParam} = createParam<{code: string}>();

export default function Page() {
  const {t} = useTranslation();
  const [code] = useParam('code');
  const {back, push, replace} = useRouter();

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  const [location, setLocation] = useState<any>({});
  // 是否显示加载弹窗
  const [isLoading, setIsLoading] = useState(true);

  const _getLocation = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return Alert.alert(
        t('tips.sign.fail'),
        '',
        [
          {
            text: t('operate.button.cancel'),
            style: 'cancel',
            onPress: () => {
              replace({
                pathname: '/',
              });
            },
          },
          {
            text: t('operate.button.confirm'),
            onPress: () => {
              Linking.openURL('app-settings:');
            },
          },
        ],
        {cancelable: false},
      );
    }
    let location: any = await Location.getLastKnownPositionAsync({});
    if (location?.coords?.latitude && location?.coords?.longitude) {
      setLocation({
        lat: location?.coords?.latitude,
        lng: location?.coords?.longitude,
      });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (code) {
      _getLocation();
    }
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (appState.current === 'background' && nextAppState === 'active') {
        if (code) {
          _getLocation();
        }
      }
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, [code]);

  return (
    <>
      <Stack.Screen
        options={{
          title: t('screen.restaurant.sign.title'),
          headerLeft: () => {
            return (
              <Button
                unstyled
                onPress={() => {
                  if (router.canGoBack()) {
                    // 如果可以返回上一页，返回上一页
                    back();
                  } else {
                    // 否则，导航到首页
                    replace('/');
                  }
                }}
              >
                <ChevronLeft size={36} color={'#428cfc'} />
              </Button>
            );
          },
        }}
      />
      {isLoading ? <AppLoading /> : <SignScreen location={location} />}
    </>
  );
}
