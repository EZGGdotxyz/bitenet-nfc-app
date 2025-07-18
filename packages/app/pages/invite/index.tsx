/*
 * @Date: 2023-12-18 14:37:38
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-02 18:35:16
 * @FilePath: /snapx-nfc-app/packages/app/pages/invite/index.tsx
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
  useToastController,
} from '@my/ui';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import PermissionPage from 'app/Components/PermissionPage';
import {PrimaryColor} from 'app/config';
import {createParam} from 'solito';
import {setInviteCode} from 'app/utils/auth';
import {useRouter} from 'solito/router';
import {Platform} from 'react-native';
import {Alert, Share} from 'react-native';
import {inviteCodeCreateInviteCode} from 'app/servers/api/5000Tuijianzhuceyaoqingma';

//  邀请
const InviteScreen = () => {
  const {t, i18n} = useTranslation();
  const {push} = useRouter();
  const HeaderLeft: AppHeaderProps['headerRight'] = () => <HeaderBackButton fallbackUrl="/"></HeaderBackButton>;
  const toast = useToastController();
  const [inviteData, setInviteData] = React.useState<any>({});

  const onShare = async () => {
    if (!inviteData.code) {
      return Alert.alert(t('tips.invite.fail'), '', [{text: t('operate.button.confirm'), onPress: () => {}}]);
    }
    const url = `https://app.bitenet.io/register?inviteCode=${inviteData.code}`;
    if (Platform.OS === 'web') {
      await navigator.clipboard.writeText(url);
      toast.show(t('tips.invite.success'));
    } else {
      try {
        const result = await Share.share({
          message: url,
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error: any) {
        Alert.alert(error.message);
      }
    }
  };

  const _getInviteCode = async () => {
    const res = await inviteCodeCreateInviteCode();
    if (res) {
      setInviteData(res);
    }
  };

  useEffect(() => {
    _getInviteCode();
  }, []);

  return (
    <PermissionPage>
      <AppHeader title={t('screen.invite.title')} headerLeft={HeaderLeft} />
      <YStack w={'100%'} alignItems="center" jc={'center'} p="$4">
        <XStack mb={'$10'}>
          {inviteData?.base64 && (
            <AppImage
              web={{
                alt: '',
                src: inviteData?.base64,
                width: 166,
                height: 166,
              }}
              // type="local"
              native={{
                source: {
                  height: 166,
                  uri: inviteData?.base64,
                  width: 166,
                },
              }}
            />
          )}
        </XStack>
        <XStack ai={'center'} mb="$3">
          <SizableText col={PrimaryColor} fontSize={'$4'}>
            {t('login.register.tips.sub')}
          </SizableText>
        </XStack>
        <XStack ai={'center'}>
          <Button
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            color="$color1"
            chromeless
            onPress={() => {
              onShare();
              // setModalVisible(false);
            }}
          >
            <Paragraph col={'$color11'} fontSize={'$3'}>
              {t('home.invite.button')}
            </Paragraph>
          </Button>
        </XStack>
        {/* <XStack ai={'center'}>
          <Button
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            color="$color1"
            chromeless
            onPress={() => {
              onShare();
              // setModalVisible(false);
            }}
          >
            <Paragraph col={'$color11'} fontSize={'$3'}>
              展示二维码
            </Paragraph>
          </Button>
        </XStack> */}
        <XStack w="100%" ai={'center'} jc={'space-between'} mb="$3">
          <YStack>
            <SizableText col={PrimaryColor} fontSize={'$4'}>
              $ {inviteData.inviteBonus}
            </SizableText>
            <SizableText col={PrimaryColor} fontSize={'$4'}>
              {t('home.invite.inviteBonus')}
            </SizableText>
          </YStack>
          <YStack>
            <SizableText col={PrimaryColor} fontSize={'$4'}>
              $ {inviteData.invitees}
            </SizableText>
            <SizableText col={PrimaryColor} fontSize={'$4'}>
              {t('home.invite.invitees')}
            </SizableText>
          </YStack>
        </XStack>
      </YStack>
    </PermissionPage>
  );
};
export default InviteScreen;
