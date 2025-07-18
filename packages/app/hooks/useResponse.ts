import {app} from './../store/models/app';
/*
 * @Date: 2023-12-08 10:37:32
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-19 23:48:06
 * @FilePath: /snapx-nfc-app/packages/app/hooks/useResponse.ts
 */
import {Dispatch} from 'app/store';
import {getLanguage, getUserInfo, getUserToken, setLanguage} from 'app/utils/auth';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {Dimensions, Platform} from 'react-native';
import {useEffect} from 'react';
import {useRematchModel} from 'app/store/model';

const UIWidth = 390;

export default function useResponse() {
  const {i18n} = useTranslation();
  const [app] = useRematchModel('app');
  const responseHandling = (width: any, hight: any) => {
    return {
      width: width * ((app.appWidth > 768 ? 768 : app.appWidth) / UIWidth),
      height: hight * ((app.appWidth > 768 ? 768 : app.appWidth) / UIWidth),
    };
  };

  return {responseHandling};
}
