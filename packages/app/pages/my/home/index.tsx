/*
 * @Date: 2023-12-18 14:37:38
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-27 16:43:29
 * @FilePath: /snapx-nfc-app/packages/app/pages/my/home/index.tsx
 */
import {
  AppHeader,
  AppHeaderProps,
  Button,
  HeaderBackButton,
  Paragraph,
  ScrollView,
  SizableText,
  Text,
  Windowing,
  XStack,
  YStack,
} from '@my/ui';
import {ChevronRight} from '@tamagui/lucide-icons';
import {useRematchModel} from 'app/store/model';
import {setLanguage} from 'app/utils/auth';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {useRouter} from 'solito/router';
export const ESTIMATED_ITEM_SIZE = 90;
import {ComponentProps} from 'react';
import {ActivityIndicator, Platform} from 'react-native';
import {Link} from 'solito/link';
import {ExternalLinkData, PrimaryColor} from 'app/config';
import PermissionPage from 'app/Components/PermissionPage';
import useUser from 'app/hooks/useUser';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'app/store';
import useRequest from 'app/hooks/useRequest';
import {notificationGetUnreadCount} from 'app/servers/api/2001Xiaoxitongzhi';

// 我的
const MyScreen = () => {
  const {push, replace, back, parseNextPath} = useRouter();
  const {t, i18n} = useTranslation();
  const {userLogout} = useUser();
  const dispatch = useDispatch<Dispatch>();
  const {makeRequest} = useRequest();
  const [{unread}] = useRematchModel('app');
  const [{isLogin}] = useRematchModel('user');

  const [isLoading, setIsLoading] = React.useState(false);
  const InfoItems = [
    {
      title: t('screen.personal_info.title'),
      url: '/my/personal_info',
      id: 'personal_info',
      type: 'page',
    },
    {
      title: t('screen.check_in.title'),
      url: '/my/check_in?id=all',
      id: 'check_in',
      type: 'page',
    },
    {
      title: t('screen.property.title'),
      url: '/my/property',
      id: 'property',
      type: 'page',
    },
    {
      title: t('screen.prize.title'),
      url: '/my/prize?id=all',
      id: 'prize',
      type: 'page',
    },
    {
      title: t('restaurant.details.gifts.luckyDraw.title'),
      url: '/my/luckyDraw?id=all',
      id: 'luckyDraw',
      type: 'page',
    },
    {
      title: t('screen.message.title'),
      url: '/my/message',
      id: 'message',
    },
  ];

  const LoginItems = [
    // {title: t('screen.login.title'), url: '/login', id: 'login', type: 'page'}
  ];

  const DATA = [
    ...(isLogin ? InfoItems : LoginItems),
    {
      title: t('screen.language.title'),
      url: '/language',
      id: 'language',
    },
    // {
    //   title: t('screen.faq.title'),
    //   url: '/my/faq',
    //   id: 'faq',
    // },
    // {
    //   title: t('screen.contact.title'),
    //   url: ExternalLinkData.webPageContact,
    //   id: 'contact',
    //   type: '_blank',
    // },
    {
      title: t('screen.privacy.title'),
      url: ExternalLinkData.webPagePrivacy,
      id: 'privacy',
      type: '_blank',
    },
    {
      title: t('screen.about_us.title'),
      url: ExternalLinkData.webPageHome,
      id: 'about_us',
      type: '_blank',
    },
  ];

  useEffect(() => {
    if (isLogin) {
      _getUnread();
    }
  }, [isLogin]);

  // 获取 未读消息数
  const _getUnread = async () => {
    const res = await makeRequest(notificationGetUnreadCount());
    if (res?.unread) {
      dispatch.app.updateState({
        unread: res?.unread,
      });
    } else {
      dispatch.app.updateState({
        unread: 0,
      });
    }
  };

  const Row = (item: any) => {
    return (
      <Button
        unstyled
        w={'100%'}
        flexDirection="row"
        paddingVertical="$3"
        paddingHorizontal="$3"
        borderBottomColor="$gray5"
        borderBottomWidth={1}
        space="$2"
        key={item.id}
        jc={'space-between'}
        onPress={async () => {
          console.log('🚀 ~ onPress={ ~ onPress:');

          if (item.id === 'language') {
            const locale = i18n?.language === 'zh_HK' ? 'en_US' : 'zh_HK';

            console.log('🚀 ~ onPress={ ~ locale:', locale);

            setLanguage(locale);
            i18n?.changeLanguage(locale);
          } else if (item.type === '_blank') {
            if (Platform.OS !== 'web') {
              const openBrowserAsync = require('expo-web-browser').openBrowserAsync;
              openBrowserAsync(item.url);
            } else {
              window.open(item.url, '_blank');
            }
          } else {
            push(item.url);
          }
        }}
      >
        <XStack pos={'relative'}>
          <SizableText fow={'600'} fontSize="$4">
            {item.title}
          </SizableText>
          {unread > 0 && item.id === 'message' && (
            <XStack pos="absolute" t={1} r={-1} h={'100%'} w={8}>
              <XStack w={8} h={8} borderRadius={4} bc={'red'}></XStack>
            </XStack>
          )}
        </XStack>
        <XStack jc={'center'} ai={'center'} pos={'relative'}>
          {item.id === 'language' && (
            <SizableText fow={'600'} fontSize="$2">
              {i18n.language !== 'zh_HK' ? '繁體中文' : 'English'}
            </SizableText>
          )}
          <ChevronRight />
        </XStack>
      </Button>
    );
  };

  const HeaderLeft: AppHeaderProps['headerRight'] = () => <HeaderBackButton fallbackUrl="/"></HeaderBackButton>;

  const onLogout = async () => {
    setIsLoading(true);
    await userLogout();
    setIsLoading(false);
    push('/');
  };

  return (
    <PermissionPage isHomePage={true}>
      <AppHeader title={t('screen.my.title')} headerLeft={HeaderLeft} />
      <ScrollView w={'100%'} bc="$background">
        <YStack w={'100%'} ai="center">
          {DATA.map((item) => {
            return Row(item);
          })}
        </YStack>
        <XStack w={'100%'} pl="$4" pr="$4" mt="$10" pb="$10">
          {isLogin ? (
            <Button
              style={{
                width: '100%',
                borderWidth: 0,
                height: 50,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              disabled={isLoading}
              onPress={onLogout}
            >
              {isLoading ? (
                <ActivityIndicator color={PrimaryColor} />
              ) : (
                <Paragraph fontSize={'$3'}>{t('operate.button.logout')}</Paragraph>
              )}
            </Button>
          ) : (
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
                push('/login');
              }}
            >
              <Paragraph col={'$color1'} fontSize={'$3'}>
                {t('operate.button.login')}
              </Paragraph>
            </Button>
          )}
        </XStack>
      </ScrollView>
    </PermissionPage>
  );
};

export default MyScreen;
