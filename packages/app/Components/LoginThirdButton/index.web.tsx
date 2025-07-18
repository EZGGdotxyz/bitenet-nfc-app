/*
 * @Date: 2023-12-08 16:25:15
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-19 20:53:37
 * @FilePath: /snapx-nfc-app/packages/app/Components/LoginThirdButton/index.web.tsx
 */
import {AppImage, Button, View, XStack} from '@my/ui';
import instagramIcon from 'app/assets/images/icon-instagram.svg';
import appleIcon from 'app/assets/images/icon-apple.svg';
import googleIcon from 'app/assets/images/icon-google.svg';

import {Dispatch} from 'app/store/index';
import {useRematchModel} from 'app/store/model';
import {useEffect} from 'react';
import {Dimensions, Platform} from 'react-native';
import {useDispatch} from 'react-redux';
import Svg, {Path} from 'react-native-svg';

interface LoginThirdButtonProps {
  children?: React.ReactNode;
  type: any;
  onPress: () => void;
}

export default function LoginThirdButton(props: LoginThirdButtonProps) {
  const {onPress, type = 'google'} = props;
  const dispatch = useDispatch<Dispatch>();

  return (
    <Button bc={'#f1f1f1'} onPress={onPress} w={58} h={58} br={29} ml={13} mr={13} pos={'relative'}>
      {type === 'instagram' && <img width="27" height="27" src={instagramIcon.src} alt="" />}
      {type === 'google' && <img width="27" height="27" src={googleIcon.src} alt="" />}
      {type === 'apple' && <img width="22" height="27" src={appleIcon.src} alt="" />}
      {/* </XStack> */}
      {/* <View>{props?.children}</View> */}
    </Button>
  );
}
