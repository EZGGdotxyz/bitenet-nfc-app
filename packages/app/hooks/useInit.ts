/*
 * @Date: 2023-12-08 10:37:32
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-30 18:00:04
 * @FilePath: /snapx-nfc-app/packages/app/hooks/useInit.ts
 */
import {Dispatch} from 'app/store';
import {getDeviceToken, getLanguage, getUserInfo, getUserToken, setInviteCode, setLanguage} from 'app/utils/auth';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {Dimensions, Platform} from 'react-native';
import {useEffect} from 'react';
import {getAnalytics} from 'firebase/analytics';
import {initializeApp} from 'firebase/app';
import useUser from './useUser';
import useRequest from './useRequest';
import {globalConfigFindGlobalConfig} from 'app/servers/api/9000Quanjupeizhi';
import {createParam} from 'solito';
const firebaseConfig = {
  apiKey: "AIzaSyAOzW1V1VbZ7kwEB-uRb1tHg9hvC3v_qlQ",
  authDomain: "bitenet.firebaseapp.com",
  projectId: "bitenet",
  storageBucket: "bitenet.appspot.com",
  messagingSenderId: "850147072438",
  appId: "1:850147072438:web:a02e46e4962c2b85da0917",
  measurementId: "G-BWY1TL2TGP"
};

export default function useInit() {
  const {i18n} = useTranslation();
  const dispatch = useDispatch<Dispatch>();
  const {makeRequest} = useRequest();
  const {initLogin, initUserInfo} = useUser();

  const _init = async () => {
    const token: any = await getUserToken();
    const userInfo: any = await getUserInfo();

    // 设置 token
    if (token) {
      initLogin(token);
      _getGlobalConfig();
    }
    // 获取用户信息
    if (userInfo?.id) {
      initUserInfo(userInfo?.id);
    }

    // 设置语言
    const locale = (await getLanguage()) || 'zh_HK';
    if (locale) {
      i18n?.changeLanguage(locale);
    }

    // 设置屏幕宽高
    dispatch.app.updateState({
      appWidth: Dimensions.get('window').width,
      appHeight: Dimensions.get('window').height,
    });

    if (Platform.OS === 'web') {
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      dispatch.app.updateState({
        isFirebaseApp: true,
      });
    }
  };

  // 获取全局配置
  const _getGlobalConfig = async () => {
    const res = await makeRequest(globalConfigFindGlobalConfig());
    if (res) {
      dispatch.app.updateState({
        globalConfig: res,
      });
    }
  };

  useEffect(() => {
    _init();
  }, []);

  return {_init};
}
