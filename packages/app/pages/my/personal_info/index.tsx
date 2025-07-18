/*
 * @Date: 2023-12-18 14:37:38
 * @LastEditors: yosan
 * @LastEditTime: 2024-02-01 16:50:19
 * @FilePath: /snapx-nfc-app/packages/app/pages/my/personal_info/index.tsx
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
} from '@my/ui';
import {ActivityIndicator, Alert, Platform} from 'react-native';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'app/store';
import {PrimaryColor} from 'app/config';
import {useRematchModel} from 'app/store/model';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import UpdateNamePopup from './components/UpdateNamePopup';
import PermissionPage from 'app/Components/PermissionPage';
import {memberProfileDeleteAccount} from 'app/servers/api/1002Huiyuangerenxinxi';
import {useRouter} from 'solito/router';
import useRequest from 'app/hooks/useRequest';

// 个人信息
const PersonalInfoScreen = () => {
  const {t} = useTranslation();
  const HeaderLeft: AppHeaderProps['headerRight'] = () => <HeaderBackButton fallbackUrl="/my"></HeaderBackButton>;
  const [user] = useRematchModel('user');
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<Dispatch>();
  const {makeRequest} = useRequest();
  const {push} = useRouter();

  const onDeleteAccount = () => {
    if (Platform.OS === 'web') {
      if (window.confirm(t('tips.personal_info.deleteAccount.title'))) {
        onDelete();
      }
    } else {
      Alert.alert(
        t('operate.button.confirm'), // 弹窗的标题
        t('tips.personal_info.deleteAccount.title'), // 弹窗的内容
        [
          {
            text: t('operate.button.cancel'),
            style: 'cancel',
          },
          {text: t('operate.button.confirm'), onPress: () => onDelete()},
        ],
      );
    }
  };

  const onDelete = async () => {
    setIsLoading(true);
    const res = await makeRequest(memberProfileDeleteAccount());
    setIsLoading(false);
    if (res) {
      setModalVisible(false);
      dispatch.user.locallyLogout();
      push('/');
    }
  };

  return (
    <PermissionPage>
      <AppHeader title={t('screen.personal_info.title')} headerLeft={HeaderLeft} />
      <YStack w={'100%'}>
        <XStack w={'100%'} pb="$2" pt="$2" pl="$4" pr="$4" alignItems="center" jc={'space-between'}>
          <YStack flex={5}>
            <XStack>
              <SizableText width={'100%'} col={'$color'} fontSize={'$4'} fow={'600'}>
                {t('my.personal_info.name.label')}
              </SizableText>
            </XStack>

            <XStack>
              <SizableText
                width={'100%'}
                col={'$color11'}
                fontSize={'$2'}
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
              >
                {user?.userInfo?.nickname || '-'}
              </SizableText>
            </XStack>
          </YStack>
          <XStack flex={1} jc={'flex-end'}>
            <Button
              style={{
                // backgroundColor: PrimaryColor,
                height: 30,
                borderRadius: 15,
              }}
              color={'$blue11'}
              unstyled
              chromeless
              onPress={() => {
                setModalVisible(true);
              }}
            >
              {t('operate.button.edit')}
            </Button>
          </XStack>
        </XStack>
        <Separator />
        <XStack w={'100%'} pb="$2" pt="$2" pl="$4" pr="$4" alignItems="center" jc={'space-between'}>
          <YStack flex={5}>
            <XStack>
              <SizableText width={'100%'} col={'$color'} fontSize={'$4'} fow={'600'}>
                {t('my.personal_info.phone.label')}
              </SizableText>
            </XStack>

            <XStack>
              <SizableText
                width={'100%'}
                col={'$color11'}
                fontSize={'$2'}
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
              >
                {user?.userInfo?.phone || '-'}
              </SizableText>
            </XStack>
          </YStack>
          <XStack flex={1} jc={'flex-end'}>
            <Button
              style={{
                // backgroundColor: PrimaryColor,
                height: 30,
                borderRadius: 15,
              }}
              color={'$blue11'}
              unstyled
              chromeless
              onPress={() => {
                push('/my/update_phone');
              }}
            >
              {t('operate.button.edit')}
            </Button>
          </XStack>
        </XStack>
        <Separator />
        <XStack w={'100%'} pl="$4" pr="$4" mt="$6">
          <Button
            borderColor={'$red9'}
            backgroundColor={'$red9'}
            unstyled={true}
            style={{
              width: '100%',
              borderWidth: 0,
              height: 50,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: PrimaryColor,
              // height: 30,
              // borderRadius: 15,
              // paddingLeft: 20,
              // paddingRight: 20,
            }}
            // color="$color1"
            disabled={isLoading}
            onPress={onDeleteAccount}
          >
            {isLoading ? (
              <ActivityIndicator color={PrimaryColor} />
            ) : (
              <SizableText col={'$color1'} fow={'600'} fontSize={'$4'}>
                {t('operate.button.deleteAccount')}
              </SizableText>
            )}
          </Button>
        </XStack>
      </YStack>
      <UpdateNamePopup userInfo={user?.userInfo} modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </PermissionPage>
  );
};
export default PersonalInfoScreen;
