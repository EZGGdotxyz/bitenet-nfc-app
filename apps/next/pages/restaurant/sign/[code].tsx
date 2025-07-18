/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-05 16:06:36
 * @FilePath: /snapx-nfc-app/apps/next/pages/restaurant/sign/[code].tsx
 */
import AppLoading from 'app/Components/AppLoading';
import SignScreen from 'app/pages/restaurant/sign/index';
import {useRematchModel} from 'app/store/model';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {createParam} from 'solito';
const {useParam} = createParam<{code: string}>();

export default function Page() {
  const {t} = useTranslation();
  const [code] = useParam('code');
  const [location, setLocation] = useState<any>({});
  // 是否显示加载弹窗
  const [isLoading, setIsLoading] = useState(true);
  const {replace} = useRouter();

  const _getLocation = async () => {
    navigator.permissions.query({name: 'geolocation'}).then(async (result) => {
      console.log('🚀 ~ navigator.permissions.query ~ result:', result);
      if (result.state === 'granted' || result.state === 'prompt') {
        if (navigator.geolocation) {
          const _location: any = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(function (position) {
              resolve({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            });
          });
          if (_location?.lat && _location?.lng) {
            setLocation(_location);
          }
          setIsLoading(false);
        }
        // 位置权限已被授予
      } else if (result.state === 'denied') {
        window.alert(t('tips.sign.fail'));
        setTimeout(() => {
          replace({
            pathname: '/',
          });
        }, 1000);
      }
    });
  };

  useEffect(() => {
    if (code) {
      _getLocation();
    }
  }, [code]);

  return (
    <>
      <Head>
        <title>{t('screen.restaurant.sign.title')}</title>
      </Head>
      {isLoading ? <AppLoading /> : <SignScreen location={location} />}
    </>
  );
}
