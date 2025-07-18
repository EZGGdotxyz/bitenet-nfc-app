/*
 * @Date: 2023-12-18 14:37:38
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-25 16:02:53
 * @FilePath: /snapx-nfc-app/packages/app/pages/register/index.tsx
 */
import {
  AppHeader,
  AppHeaderProps,
  AppImage,
  Button,
  HeaderBackButton,
  Paragraph,
  SizableText,
  XStack,
  YStack,
} from '@my/ui';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import PermissionPage from 'app/Components/PermissionPage';
import {PrimaryColor} from 'app/config';
import {createParam} from 'solito';
import {setInviteCode} from 'app/utils/auth';
import {useRouter} from 'solito/router';
import {inviteCodeFindInviteCode} from 'app/servers/api/5000Tuijianzhuceyaoqingma';

const {useParams} = createParam<any>();

// 修改手机号
const RegisterScreen = () => {
  const {t, i18n} = useTranslation();
  const {params} = useParams();
  const [inviteInfo, setInviteInfo] = React.useState<any>({});
  const {push, replace, back, parseNextPath} = useRouter();

  const [gift, setGift] = React.useState<any>({});
  useEffect(() => {
    if (params?.code) {
      // setInviteCode(params?.code);
      _getInviteInfo();
      console.log('🚀 ~ useEffect ~ params?.code:', params?.code);
    }
    if (params?.inviteCode) {
      setInviteCode(params?.inviteCode);
      push('/login');
    }
  }, [params]);

  const _getInviteInfo = async () => {
    const res = await inviteCodeFindInviteCode({code: params?.code});
    if (res?.gift?.id) {
      setInviteInfo(res);
    }
  };

  return (
    <PermissionPage isLoginPage>
      <YStack w={'100%'} alignItems="center" jc={'center'}>
        <XStack mb={'$6'} p={'$4'} w={'100%'} h={80} ai={'center'}>
          <AppImage
            web={{
              alt: '',
              src: require('app/assets/images/homeLogo.png'),
              width: 1524 * 0.08,
              height: 357 * 0.08,
            }}
            type="local"
            native={{
              source: {
                uri: require('app/assets/images/homeLogo.png'),
                width: 1524 * 0.08,
                height: 357 * 0.08,
              },
            }}
          />
        </XStack>
        <XStack mb={'$10'}>
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
        <YStack mb={'$3'} jc={'center'}>
          <Paragraph fontWeight={'600'} fontSize={'$5'} textAlign="center">
            {i18n.language === 'zh_HK' ? inviteInfo?.restaurant?.name : inviteInfo?.restaurant?.en_name}
          </Paragraph>
        </YStack>
        <XStack ai={'center'} mb="$3">
          <SizableText col={PrimaryColor} fontSize={'$4'}>
            {t('login.register.tips.sub')}
          </SizableText>
        </XStack>
        <XStack ai={'center'} mb="$8">
          <SizableText col={'$color'} fontSize={'$4'}>
            {t('login.register.tips.gift', {
              name: i18n.language === 'zh_HK' ? inviteInfo?.gift?.name : inviteInfo?.gift?.en_name,
            })}
          </SizableText>
        </XStack>
        <XStack ai={'center'} mb="$3">
          <Button
            style={{
              backgroundColor: PrimaryColor,
              width: '100%',
              height: 50,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            color="$color1"
            onPress={() => {
              setInviteCode(params?.code);
              push('/login');
            }}
          >
            <Paragraph col={'$color1'} fontSize={'$5'}>
              {t('login.register.tips.now')}
            </Paragraph>
          </Button>
        </XStack>
        <XStack ai={'center'} mb="$10">
          <Button
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            color="$color1"
            chromeless
            onPress={() => {
              push('/');
              // setModalVisible(false);
            }}
          >
            <Paragraph col={'$color11'} fontSize={'$3'}>
              {t('login.register.tips.dont')}
            </Paragraph>
          </Button>
        </XStack>
      </YStack>
    </PermissionPage>
  );
};
export default RegisterScreen;
