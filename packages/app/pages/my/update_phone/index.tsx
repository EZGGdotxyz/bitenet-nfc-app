/*
 * @Date: 2023-12-18 14:37:38
 * @LastEditors: yosan
 * @LastEditTime: 2024-02-29 19:03:29
 * @FilePath: /snapx-nfc-app/packages/app/pages/my/update_phone/index.tsx
 */
import {
  AppHeader,
  AppHeaderProps,
  Button,
  HeaderBackButton,
  Input,
  Label,
  Paragraph,
  Separator,
  SizableText,
  Switch,
  XStack,
  YStack,
  Dialog,
  Unspaced,
  Fieldset,
  useToastController,
} from '@my/ui';
import {ActivityIndicator, Alert, Keyboard, Platform, TextInput, TouchableWithoutFeedback} from 'react-native';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'app/store';
import {PrimaryColor} from 'app/config';
import {useRematchModel} from 'app/store/model';
import {memo, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useRouter} from 'solito/router';
import useRequest from 'app/hooks/useRequest';
import AppButton from 'app/Components/AppButton';
import AppModal from 'app/Components/AppModal';
import useUser from 'app/hooks/useUser';
import OtpInput from 'app/pages/login/home/components/OtpInput';
import {memberCaptchaSendBindPhoneCode} from 'app/servers/api/1001Huiyuanyanzhengma';
import {memberProfileBindPhone} from 'app/servers/api/1002Huiyuangerenxinxi';
import {phoneAreaCodePagePhoneAreaCode} from 'app/servers/api/1099Dianhuaquyudaima';
import PermissionPage from 'app/Components/PermissionPage';
import CountryPopup from 'app/pages/login/home/components/CountryPopup';
import Feedback from 'app/Components/Feedback';

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
let timerId: any = null;

// 验证码倒计时
const initialCount = 30;

// 个人信息
const UpdatePhoneScreen = () => {
  const {t, i18n} = useTranslation();
  const [{userInfo}] = useRematchModel('user');
  const HeaderLeft: AppHeaderProps['headerRight'] = () => (
    <HeaderBackButton fallbackUrl="/my/personal_info"></HeaderBackButton>
  );
  const {initUserInfo} = useUser();
  const [phone, setPhone] = useState<string>('');
  const [captcha, setCaptcha] = useState<string>('');
  const toast = useToastController();
  const [areaCodeList, setAreaCodeList] = useState<any[]>([]);
  const [step, setStep] = useState('phone');
  const [modalVisible, setModalVisible] = useState(false);
  const {push, back} = useRouter();

  //加载状态
  const [loading, setLoading] = useState({
    phone: false,
    otp: false,
    name: false,
  });
  // 区号
  const [phoneAreaCode, setPhoneAreaCode] = useState<any>(defaultPhoneAreaCode);
  const [phoneAreaCodeValue, setPhoneAreaCodeValue] = useState(defaultPhoneAreaCode.phoneCode);

  // 倒计时
  const [count, setCount] = useState(initialCount);

  // 是否发送短信
  const [isActive, setIsActive] = useState(false);
  const {makeRequest} = useRequest();

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
        // if (item?.phoneCode === '852') {
        //   _phoneAreaCode = item;
        // }
        if (item?.phoneCode == userInfo?.phoneAreaCode) {
          _phoneAreaCode = item;
        }
        return item;
      });
      if (_phoneAreaCode?.phoneAreaCode) {
        _phoneAreaCode = defaultPhoneAreaCode;
      }

      setAreaCodeList(_areaCodeList);
      setPhoneAreaCode(_phoneAreaCode);
      setPhoneAreaCodeValue(_phoneAreaCode?.phoneCode);
    }
  };

  const onPress = async () => {
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
    const res = await makeRequest(
      memberProfileBindPhone({
        phoneAreaCode: phoneAreaCode?.phoneCode,
        captcha,
        phone,
      }),
    );
    setLoading({
      ...loading,
      otp: false,
    });
    if (res) {
      toast.show(t('tips.operation.success'));
      initUserInfo(userInfo?.id);

      try {
        back();
      } catch (error) {
        push('/my/personal_info');
      }
    }
  };

  const phoneContinue = async () => {
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
      memberCaptchaSendBindPhoneCode({
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
      reset();
    }
  };

  const reset = async () => {
    const res = await makeRequest(
      memberCaptchaSendBindPhoneCode({
        phoneAreaCode: phoneAreaCode?.phoneCode,
        phone,
      }),
    );
    if (res) {
      setIsActive(true);
      setCount(initialCount);
    }
  };

  const selectCountry = (item) => {
    setPhoneAreaCode(item);
    setModalVisible(false);
    setPhoneAreaCodeValue(item?.phoneCode);

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
    if (userInfo?.id) {
      setPhone(userInfo?.phone);
      _getAreaCodeList();
    }
  }, [userInfo]);

  return (
    <PermissionPage>
      <AppHeader title={t('screen.update_phone.title')} headerLeft={HeaderLeft} />
      <Feedback>
        <YStack w={'100%'} p="$4" ai={'center'} jc={'center'}>
          <XStack w="100%" pt="$16">
            {step === 'phone' && (
              <YStack w="100%" alignItems="center" position="relative">
                <YStack mb={'$4'}>
                  <SizableText col={'$color'} fontSize={'$5'} fow={'600'}>
                    {t('login.home.phone.title.main')}
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
                <AppButton isLoading={loading.phone} onPress={phoneContinue}>
                  {t('operate.button.continue')}
                </AppButton>
              </YStack>
            )}
            {step === 'otp' && (
              <YStack w="100%" alignItems="center" position="relative">
                <YStack mb={'$3'}>
                  <SizableText col={'$color'} fontSize={'$5'} fow={'600'}>
                    {t('login.home.code.title.main')}
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
                <AppButton isLoading={loading.otp} onPress={onPress}>
                  {t('operate.button.confirm')}
                </AppButton>
              </YStack>
            )}
          </XStack>
        </YStack>
      </Feedback>
      <CountryPopup
        areaCodeList={areaCodeList}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectCountry={selectCountry}
        phoneAreaCode={phoneAreaCode}
      />
    </PermissionPage>
  );
};
export default UpdatePhoneScreen;
