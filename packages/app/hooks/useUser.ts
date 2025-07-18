/*
 * @Date: 2023-12-08 10:37:32
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-27 09:35:31
 * @FilePath: /snapx-nfc-app/packages/app/hooks/useUser.ts
 */
import {useToastController} from '@my/ui';
import {Dispatch} from 'app/store';
import {
  getInviteCode,
  getLanguage,
  getUserInfo,
  getUserToken,
  removeInviteCode,
  setLanguage,
  setUserInfo,
  setUserToken,
} from 'app/utils/auth';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {Dimensions, Platform} from 'react-native';
import {useRematchModel} from 'app/store/model';
import {useEffect} from 'react';
import {getAnalytics} from 'firebase/analytics';
import {initializeApp} from 'firebase/app';
import useRequest from './useRequest';
import {
  memberAuthLogout,
  memberAuthSiginInWithInstagram,
  memberAuthSiginInWithThirdpart,
  memberAuthSignInByCaptcha,
  memberAuthSignUp,
} from 'app/servers/api/1000Huiyuanzhucedenglu';
import {user} from 'app/store/models/user';
import {createParam} from 'solito';
import {useRouter} from 'solito/router';
import { memberProfileFindCurrentMember } from 'app/servers/api/1002Huiyuangerenxinxi';
const firebaseConfig = {
  apiKey: "AIzaSyAOzW1V1VbZ7kwEB-uRb1tHg9hvC3v_qlQ",
  authDomain: "bitenet.firebaseapp.com",
  projectId: "bitenet",
  storageBucket: "bitenet.appspot.com",
  messagingSenderId: "850147072438",
  appId: "1:850147072438:web:a02e46e4962c2b85da0917",
  measurementId: "G-BWY1TL2TGP"
};
const {useParams} = createParam<any>();

export default function useInit() {
  const {i18n} = useTranslation();
  const dispatch = useDispatch<Dispatch>();
  const {makeRequest} = useRequest();
  const [user] = useRematchModel('user');
  const {params} = useParams();
  const {replace} = useRouter();

  // 注册登录
  // const _memberAuthSignUp = async (params: any) => {
  //   const data = await makeRequest(memberAuthSignUp({...params, inviteCode: await getInviteCode()}));
  //   if (data?.token) {
  //     initLogin(data?.token);
  //     initUserInfo(data?.id);
  //   }
  //   return data;
  // };

  const onLink = () => {
    if (params?.type === 'sign' && params?.code) {
      replace({
        pathname: '/restaurant/sign/' + params?.code,
      });
    } else {
      replace({
        pathname: '/',
      });
    }
  };

  // 注册登录
  const _memberAuthSignUp = async (params: any) => {
    const _inviteCode = await getInviteCode();
    const data = await makeRequest(memberAuthSignInByCaptcha({...params, inviteCode: _inviteCode}));
    if (data?.token) {
      initLogin(data?.token);
      initUserInfo(data?.id);
    }
    return data;
  };

  // 第三方登录
  const _memberAuthSiginInWithThirdpart = async (params: any) => {
    const _inviteCode = await getInviteCode();
    const data = await makeRequest(memberAuthSiginInWithThirdpart({...params, inviteCode: _inviteCode}));

    if (data?.token) {
      initLogin(data?.token);
      initUserInfo(data?.id);
    }
    return data;
  };

  // Instagram授权码登录
  const _memberAuthSiginInWithInstagram = async (params: any) => {
    const _inviteCode = await getInviteCode();
    const data = await makeRequest(memberAuthSiginInWithInstagram({...params, inviteCode: _inviteCode}));

    if (data?.token) {
      initLogin(data?.token);
      initUserInfo(data?.id);
      onLink();
    }
    return data;
  };

  // 初始化登录
  const initLogin = async (token) => {
    if (token) {
      dispatch.user.updateState({isLogin: true});
      setUserToken(token);
      removeInviteCode();
    }
  };

  // 获取用户信息
  const initUserInfo = async (id = '') => {
    const _id = id || user?.userInfo?.id;
    if (!_id) return;
    const res = await makeRequest(
      memberProfileFindCurrentMember({
        id: id,
      }),
    );
    if (res) {
      setUserInfo(res);
      dispatch.user.updateState({
        userInfo: res,
      });
    }
  };

  // 登出
  const userLogout = async () => {
    try {
      await memberAuthLogout();
      dispatch.user.locallyLogout();
    } catch (e) {
      dispatch.user.locallyLogout();
    }
  };

  return {
    initUserInfo,
    userLogout,
    _memberAuthSiginInWithThirdpart,
    initLogin,
    _memberAuthSignUp,
    onLink,
    _memberAuthSiginInWithInstagram,
  };
}
