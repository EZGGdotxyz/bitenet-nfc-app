/*
 * @Date: 2023-12-18 14:37:38
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-27 09:37:01
 * @FilePath: /snapx-nfc-app/packages/app/pages/login/home/index.tsx
 */
import {
  Adapt,
  AppHeaderProps,
  AppImage,
  FontSizeTokens,
  HeaderBackButton,
  Paragraph,
  Select,
  SelectProps,
  Sheet,
  XStack,
  YStack,
  Text,
  getFontSize,
  View,
  Button,
  Dialog,
  ExternalLink,
  SizableText,
  Input,
  useToastController,
} from '@my/ui';
import {Check, ChevronDown, ChevronUp} from '@tamagui/lucide-icons';
import AppButton from 'app/Components/AppButton';
import loginBg from 'app/assets/images/login.jpg';
import {ExternalLinkData, PrimaryColor} from 'app/config';
import React, {useEffect, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {GoogleAuthProvider, OAuthProvider, getAuth, getRedirectResult, signInWithRedirect} from 'firebase/auth';
import {memberAuthSiginInWithThirdpart, memberAuthSignUp} from 'app/servers/api/1000Huiyuanzhucedenglu';
import useRequest from 'app/hooks/useRequest';
import {getInviteCode, getLanguage, setLanguage, setUserToken} from 'app/utils/auth';
import {Dispatch} from 'app/store';
import {useDispatch} from 'react-redux';
import {
  ActivityIndicator,
  Dimensions,
  Keyboard,
  Modal,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {useRematchModel} from 'app/store/model';
import useUser from 'app/hooks/useUser';
import AppLoading from 'app/Components/AppLoading';
import {createParam} from 'solito';
import {useRouter} from 'solito/router';
import PermissionPage from 'app/Components/PermissionPage';
import {phoneAreaCodePagePhoneAreaCode} from 'app/servers/api/1099Dianhuaquyudaima';
import {
  memberCaptchaSendSignInCode,
  memberCaptchaSendSignUpCode,
  memberCaptchaVerifySignUpCode,
} from 'app/servers/api/1001Huiyuanyanzhengma';
import OtpInput from './components/OtpInput';
import RecommendList from './components/RecommendList';
import CountryPopup from './components/CountryPopup';
import Feedback from 'app/Components/Feedback';
import IosPopup from './components/IosPopup';
import { memberProfileUpdateMemberProfile } from 'app/servers/api/1002Huiyuangerenxinxi';

interface LoginHomeProps {
  InstagramLogin: any;
  AppleLogin: any;
  GoogleLogin: any;
}
let timerId: any = null;

// 验证码倒计时
const initialCount = 30;

const defaultPhoneAreaCode = {
  id: 98,
  createBy: 0,
  updateBy: 0,
  createAt: '2024-01-08T16:09:42.768Z',
  updateAt: '2024-01-08T16:09:42.768Z',
  deleteAt: 0,
  englishName: 'Hong Kong S.A.R.',
  chineseName: '中国香港',
  countryCode: 'HK',
  phoneCode: '852',
  emoji: '🇭🇰',
  mix: 'Hong Kong S.A.R.中国香港HK852',
};

// 登录
const LoginHomeScreen = (props: LoginHomeProps) => {
  const {InstagramLogin, AppleLogin, GoogleLogin} = props;
  const {t, i18n} = useTranslation();
  const [app] = useRematchModel('app');
  const {_memberAuthSignUp, _memberAuthSiginInWithThirdpart, onLink} = useUser();
  const toast = useToastController();
  const {makeRequest} = useRequest();

  const [step, setStep] = useState('home');
  // 是否显示加载弹窗
  const [isLoading, setIsLoading] = useState(true);
  const [areaCodeList, setAreaCodeList] = useState<any[]>([]);
  // 区号
  const [phoneAreaCode, setPhoneAreaCode] = useState<any>(defaultPhoneAreaCode);

  // 手机号
  const [phone, setPhone] = useState('');
  // 验证码
  const [captcha, setCaptcha] = useState('');

  // 倒计时
  const [count, setCount] = useState(initialCount);
  // 昵称
  const [nickname, setNickname] = useState('');
  // 是否发送短信
  const [isActive, setIsActive] = useState(false);
  //加载状态
  const [loading, setLoading] = useState({
    phone: false,
    otp: false,
    name: false,
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const [phoneAreaCodeValue, setPhoneAreaCodeValue] = useState(defaultPhoneAreaCode.phoneCode);

  useEffect(() => {
    if (isActive) {
      if (count !== 0) {
        timerId = setInterval(() => {
          setCount((prevCount) => prevCount - 1);
        }, 1000);
      } else {
        clearInterval(timerId);
        setIsActive(false);
      }
    } else if (!isActive && count !== 0) {
      clearInterval(timerId);
      setIsActive(false);
    }
    return () => clearInterval(timerId);
  }, [isActive, count]);

  const reset = async () => {
    const res = await makeRequest(
      memberCaptchaSendSignInCode({
        phoneAreaCode: phoneAreaCode?.phoneCode,
        phone,
      }),
    );
    if (res) {
      setIsActive(true);
      setCount(initialCount);
    }
  };

  useEffect(() => {
    // if (params?.first) {
    //   setIsLoading(false);
    // }
    if (Platform.OS === 'web') {
      if (app.isFirebaseApp) {
        _getRedirectResult();
      }
    } else {
      setIsLoading(false);
    }
  }, [app]);

  const _getRedirectResult = async () => {
    const auth = getAuth();
    const result = await getRedirectResult(auth);
    setIsLoading(true);
    if (result?.providerId) {
      const user = result.user.providerData[0];
      await _memberAuthSiginInWithThirdpart({
        appType: result?.providerId,
        userId: user?.uid,
        nickname: user?.displayName,
        avatar: user?.photoURL,
        gender: 'UNKNOWN',
      });
      onLink();
    }
    setIsLoading(false);
    const _inviteCode = await getInviteCode();

    // 判断是否为苹果设备
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !_inviteCode) {
      setModalVisible2(true);
    }
  };

  const _getAreaCodeList = async () => {
    const res = await makeRequest(
      phoneAreaCodePagePhoneAreaCode({
        page: 1,
        pageSize: 999,
      }),
    );
    if (res?.record) {
      let _phoneAreaCode: any = {};
      const _areaCodeList = res?.record.map((item) => {
        if (item?.phoneCode === '852') {
          _phoneAreaCode = item;
        }
        return item;
      });
      setAreaCodeList(_areaCodeList);
      setPhoneAreaCode(_phoneAreaCode);
    }
  };

  const homeContinue = () => {
    setStep('phone');
  };

  const selectCountry = (item) => {
    setPhoneAreaCode(item);
    setModalVisible(false);
    setPhoneAreaCodeValue(item?.phoneCode);
  };

  // 手机号下一步
  const phoneContinue = async () => {
    console.log('🚀 ~ phoneContinue ~ phone:', phone);
    if (!phone) {
      toast.show(t('login.input.placeholder') + t('login.home.phone.input.placeholder'), {
        type: 'error',
      });
      return;
    }
    setLoading({
      ...loading,
      phone: true,
    });
    const res = await makeRequest(
      memberCaptchaSendSignInCode({
        phoneAreaCode: phoneAreaCode?.phoneCode,
        phone,
      }),
    );
    setLoading({
      ...loading,
      phone: false,
    });
    if (res) {
      setStep('otp');
      setIsActive(true);
      setCount(initialCount);
    }
  };

  // 验证码登录
  const otpContinue = async () => {
    if (!captcha) {
      toast.show(t('login.input.placeholder') + t('login.home.code.title.main'), {
        type: 'error',
      });
      return;
    }
    setLoading({
      ...loading,
      otp: true,
    });
    const res = await _memberAuthSignUp({
      phoneAreaCode: phoneAreaCode?.phoneCode,
      phone,
      nickname,
      captcha,
      app: Platform.OS !== 'web',
    });
    setLoading({
      ...loading,
      otp: false,
    });
    if (res?.id) {
      if (!res?.isSignUp) {
        onLink();
      } else {
        setStep('name');
      }
    }
  };

  // 填写昵称注册
  const nameContinue = async () => {
    if (!nickname) {
      toast.show(t('login.input.placeholder') + t('login.register.input.placeholder'), {
        type: 'error',
      });
      return;
    }
    setLoading({
      ...loading,
      name: true,
    });
    const res = await makeRequest(
      memberProfileUpdateMemberProfile({
        nickname,
      }),
    );
    setLoading({
      ...loading,
      name: false,
    });
    if (res?.id) {
      setStep('recommend');
      //       onLink();
    }
  };

  const handelPhoneAreaCode = (value) => {
    const _phoneAreaCode = areaCodeList.find((item) => {
      if (item?.phoneCode === value) {
        return item;
      }
    });
    if (_phoneAreaCode) {
      setPhoneAreaCode(_phoneAreaCode);
    } else {
      setPhoneAreaCode({});
    }
  };

  const debounce = (fn, delay) => {
    let timer: any = null;
    return (...param) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...param);
      }, delay);
    };
  };

  useEffect(() => {
    _getAreaCodeList();
    return () => {
      setStep('home');
    };
  }, []);

  return (
    <PermissionPage isLoginPage>
      {isLoading && <AppLoading />}
      {step !== 'recommend' && (
        <XStack p={'$4'} w={'100%'} h={80} ai={'center'} pos="absolute" t={0} l={0} zIndex={100}>
          <AppImage
            web={{
              alt: '',
              src: require('app/assets/images/homeLogo.png'),
              width: 114,
              height: 27,
            }}
            type="local"
            native={{
              source: {
                uri: require('app/assets/images/homeLogo.png'),
                width: 114,
                height: 27,
              },
            }}
          />
        </XStack>
      )}

      <Feedback>
        <YStack alignItems="center" jc={'center'} w={'100%'} flex={1} h={'100%'} position="relative" bc="$background">
          {step === 'home' && (
            <YStack w={'100%'} alignItems="center" jc={'center'}>
              <XStack>
                <AppImage
                  web={{
                    alt: '',
                    src: require('app/assets/images/login.jpg'),
                    width: 177,
                    height: 166,
                  }}
                  type="local"
                  native={{
                    source: {
                      height: 166,
                      uri: require('app/assets/images/login.jpg'),
                      width: 177,
                    },
                  }}
                />
              </XStack>
              <YStack mb={'$6'} h={104} jc={'center'}>
                <Paragraph fontWeight={'400'} lineHeight={42} fontSize={32} textAlign="center">
                  {t('login.home.title.main')}
                </Paragraph>
                <Paragraph fontWeight={'400'} lineHeight={34} fontSize={26} textAlign="center">
                  {t('login.home.title.sub')}
                </Paragraph>
              </YStack>
              <XStack w={'90%'}>
                <AppButton onPress={homeContinue}> {t('operate.button.mobile')}</AppButton>
              </XStack>
              <XStack marginBottom={14}>
                <Paragraph
                  fontWeight={'400'}
                  color={'#767676'}
                  lineHeight={59}
                  height={59}
                  fontSize={14}
                  textAlign="center"
                >
                  or
                </Paragraph>
              </XStack>
              <XStack alignItems="center" justifyContent="center" width={'100%'}>
                <AppleLogin />
                <GoogleLogin />
                <InstagramLogin />
              </XStack>
            </YStack>
          )}
          {step === 'phone' && (
            <YStack w="100%" alignItems="center" position="relative">
              <YStack mb={'$3'}>
                <SizableText col={'$color'} fontSize={'$5'} fow={'600'}>
                  {t('login.home.phone.title.main')}
                </SizableText>
              </YStack>
              <YStack mb={'$6'}>
                <SizableText col={'#767676'} fontSize={'$2'}>
                  {t('login.home.phone.title.sub')}
                </SizableText>
              </YStack>
              <Button
                unstyled
                pl={'$3'}
                mb={'$2'}
                w={'90%'}
                h={53}
                ac="center"
                jc={'flex-start'}
                flexDirection="row"
                borderTopWidth={1}
                borderTopColor={'#C7C7C7'}
                onPress={() => {
                  setModalVisible(true);
                }}
              >
                <YStack ac="center" jc={'center'} mr={'$2'}>
                  <SizableText color={'$blue11'} size={'$5'} numberOfLines={1}>
                    {`${phoneAreaCode?.emoji ? phoneAreaCode?.emoji : t('login.home.phone.country')}`}
                  </SizableText>
                </YStack>
                <YStack ac="center" jc={'center'} mr={'$2'}>
                  <SizableText color={'$blue11'} size={'$5'} numberOfLines={1}>
                    {`${
                      phoneAreaCode?.emoji
                        ? i18n.language === 'zh_HK'
                          ? phoneAreaCode?.chineseName
                          : phoneAreaCode?.englishName
                        : ''
                    }`}
                  </SizableText>
                </YStack>
              </Button>
              <XStack
                h={53}
                ai={'center'}
                w={'90%'}
                // jc={'space-between'}
                borderWidth={1}
                borderColor={'#C7C7C7'}
                borderRadius={8}
                mb={'$3'}
              >
                <XStack
                  h={53}
                  pl={'$3'}
                  flexShrink={0}
                  w={72}
                  pr={8}
                  ai={'center'}
                  // onPress={() => {
                  //   setModalVisible(true);
                  // }}
                >
                  <SizableText color={'$color'} size={'$3'} numberOfLines={1}>
                    +
                  </SizableText>
                  <XStack w={'100%'}>
                    <Input
                      unstyled
                      value={phoneAreaCodeValue}
                      style={{width: '100%', borderWidth: 0, paddingLeft: 8, height: 50}}
                      onChangeText={(text) => {
                        const newText = text.replace(/[^\d]+/, '');
                        setPhoneAreaCodeValue(newText);
                        debounce(handelPhoneAreaCode(newText), 500);
                      }}
                      color={'$color'}
                      keyboardType="phone-pad"
                    />
                  </XStack>
                </XStack>
                <XStack flexShrink={0} mr={8} h={20} width={1} backgroundColor={'#C7C7C7'}></XStack>
                <XStack w={'100%'}>
                  <Input
                    unstyled
                    style={{borderWidth: 0, paddingLeft: 8, height: 50}}
                    value={phone}
                    onChangeText={(text) => {
                      const newText = text.replace(/[^\d]+/, '');
                      setPhone(newText);
                    }}
                    color={'$color'}
                    keyboardType="phone-pad"
                    placeholder={t('login.home.phone.input.placeholder')}
                  />
                </XStack>
              </XStack>
              <YStack mb={'$6'}>
                <SizableText col={'#767676'} fontSize={'$2'}>
                  {t('login.home.phone.input.tips')}
                </SizableText>
              </YStack>
              <XStack w={'90%'}>
                <AppButton isLoading={loading.phone} onPress={phoneContinue}>
                  {t('operate.button.continue')}
                </AppButton>
              </XStack>
            </YStack>
          )}
          {step === 'otp' && (
            <YStack w={'100%'} jc={'center'} alignItems="center" position="relative">
              <YStack mb={'$3'}>
                <SizableText col={'$color'} fontSize={'$5'} fow={'600'}>
                  {t('login.home.code.title.main')}
                </SizableText>
              </YStack>
              <YStack mb={'$6'}>
                <SizableText col={'#767676'} fontSize={'$2'}>
                  {t('login.home.code.title.sub', {phone})}
                </SizableText>
              </YStack>
              <XStack w="100%" mb={'$3'} ai={'center'} jc={'center'}>
                <OtpInput value={captcha} setValue={setCaptcha} />
              </XStack>
              <YStack mb={'$6'}>
                {isActive ? (
                  <SizableText col={'#767676'} fontSize={'$2'}>
                    {t('login.home.code.input.tips', {time: count})}
                  </SizableText>
                ) : (
                  <Button chromeless fontSize={'$2'} unstyled color={'$blue11'} onPress={reset}>
                    {t('operate.button.resend')}
                  </Button>
                )}
              </YStack>
              <XStack w={'90%'}>
                <AppButton isLoading={loading.otp} onPress={otpContinue}>
                  {t('operate.button.continue')}
                </AppButton>
              </XStack>
            </YStack>
          )}
          {step === 'name' && (
            <YStack w="100%" alignItems="center" position="relative">
              <YStack mb={'$3'}>
                <SizableText col={'$color'} fontSize={'$5'} fow={'600'}>
                  {t('login.register.title.main')}
                </SizableText>
              </YStack>
              <YStack mb={'$6'}>
                <SizableText col={'#767676'} fontSize={'$2'}>
                  {t('login.register.title.sub')}
                </SizableText>
              </YStack>
              <XStack
                h={53}
                pl={22}
                pr={22}
                ai={'center'}
                w={'90%'}
                // jc={'space-between'}
                borderWidth={1}
                borderColor={'#C7C7C7'}
                borderRadius={8}
                mb={'$6'}
              >
                <Input
                  unstyled
                  style={{borderWidth: 0, paddingLeft: 8, height: 50, width: '100%'}}
                  value={nickname}
                  onChangeText={(text) => {
                    setNickname(text);
                  }}
                  color={'$color'}
                  placeholder={t('login.register.input.placeholder')}
                />
              </XStack>
              <XStack w={'90%'}>
                <AppButton isLoading={loading.name} onPress={nameContinue}>
                  {t('operate.button.continue')}
                </AppButton>
              </XStack>
            </YStack>
          )}
          {step === 'recommend' && (
            <YStack w="100%" alignItems="center" position="relative">
              <YStack mb={'$3'}>
                <SizableText col={'$color'} fontSize={'$5'} fow={'600'}>
                  {t('login.recommend.title.main')}
                </SizableText>
              </YStack>
              <RecommendList />
              <XStack w={'90%'}>
                <AppButton
                  onPress={() => {
                    onLink();
                  }}
                >
                  {t('operate.button.continue')}
                </AppButton>
              </XStack>
            </YStack>
          )}
          {step !== 'home' && (
            <XStack
              pos="absolute"
              l={26}
              t={step !== 'recommend' ? 80 : 26}
              onPress={() => {
                if (step === 'recommend') {
                  onLink();
                } else if (step === 'name') {
                  setStep('otp');
                } else if (step === 'otp') {
                  setStep('phone');
                } else if (step === 'phone') {
                  setStep('home');
                }
              }}
            >
              <AppImage
                web={{
                  alt: '',
                  src: require('app/assets/images/arrow-left.png'),
                  width: 30,
                  height: 30,
                }}
                type="local"
                native={{
                  source: {
                    height: 30,
                    uri: require('app/assets/images/arrow-left.png'),
                    width: 30,
                  },
                }}
              />
            </XStack>
          )}
          <YStack pos="absolute" pb={'$4'} b={0} l={0} w={'100%'} alignItems="center" justifyContent="center">
            {step === 'home' && (
              <XStack>
                <Paragraph fontWeight={'400'} color={'#767676'} fontSize={'$2'} textAlign="center">
                  {t('login.home.about')}
                </Paragraph>
                <ExternalLink href={ExternalLinkData.webPageHome}>
                  <Paragraph
                    fontWeight={'400'}
                    style={{textDecorationLine: 'underline'}}
                    color={'#767676'}
                    fontSize={'$2'}
                    textAlign="center"
                    marginLeft={3}
                  >
                    {t('login.home.here')}
                  </Paragraph>
                </ExternalLink>
              </XStack>
            )}
            {(step === 'phone' || step === 'otp') && (
              <>
                <XStack>
                  <Paragraph fontWeight={'400'} color={'#767676'} fontSize={'$2'} textAlign="center">
                    {t('login.home.phone.agree')}
                  </Paragraph>
                </XStack>
                <XStack>
                  <ExternalLink href={ExternalLinkData.webPagePrivacy}>
                    <Paragraph
                      fontWeight={'400'}
                      style={{textDecorationLine: 'underline'}}
                      color={'#767676'}
                      fontSize={'$2'}
                      textAlign="center"
                      marginRight={3}
                    >
                      {t('login.home.phone.policy')}
                    </Paragraph>
                  </ExternalLink>
                  <Paragraph fontWeight={'400'} color={'#767676'} fontSize={'$2'} textAlign="center">
                    &
                  </Paragraph>
                  <ExternalLink href={ExternalLinkData.webPageAgreement}>
                    <Paragraph
                      fontWeight={'400'}
                      style={{textDecorationLine: 'underline'}}
                      color={'#767676'}
                      fontSize={'$2'}
                      textAlign="center"
                      marginLeft={3}
                    >
                      {t('login.home.phone.terms')}
                    </Paragraph>
                  </ExternalLink>
                </XStack>
              </>
            )}
          </YStack>
        </YStack>
      </Feedback>
      <CountryPopup
        areaCodeList={areaCodeList}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        phoneAreaCode={phoneAreaCode}
        selectCountry={selectCountry}
      />
      <IosPopup modalVisible={modalVisible2} setModalVisible={setModalVisible2} />
    </PermissionPage>
  );
};
export default LoginHomeScreen;
