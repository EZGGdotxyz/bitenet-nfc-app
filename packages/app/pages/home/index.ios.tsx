/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-27 09:36:02
 * @FilePath: /snapx-nfc-app/packages/app/pages/home/index.ios.tsx
 */
import {
  AppImage,
  Button,
  H1,
  Image,
  Paragraph,
  ScrollView,
  Sheet,
  SizableText,
  useToastController,
  View,
  XStack,
  YStack,
} from '@my/ui';
import useRequest from 'app/hooks/useRequest';
import HomeHeader from 'app/pages/home/components/HomeHeader';
import {useRematchModel} from 'app/store/model';
import React, {useCallback, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {brandRouterListBrand, brandRouterPageRecommendedBrand} from 'app/servers/api/6005Huiyuanpinpaixinxi';
import RestaurantItem from 'app/Components/RestaurantItem';
import HomeBanner from './components/HomeBanner';
import {useRouter} from 'solito/router';
import PermissionPage from 'app/Components/PermissionPage';
import useResponse from 'app/hooks/useResponse';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'app/store';
import {notificationGetUnreadCount} from 'app/servers/api/2001Xiaoxitongzhi';
import {PrimaryColor} from 'app/config';
import {getDeviceToken, getUserToken} from 'app/utils/auth';
import {useColorScheme} from 'react-native';
import MessagePopup from './components/MessagePopup';
import {useFocusEffect} from '@react-navigation/native';
import { memberWalletGetBalance } from 'app/servers/api/3000Huiyuanjifenqianbao';
import { pushingRegisterDevice } from 'app/servers/api/2000Yidongtuisongguanli';

interface HomeScreenProps {}
// 首页
const HomeScreen = (props: HomeScreenProps) => {
  const {t, i18n} = useTranslation();
  const {makeRequest} = useRequest();
  const [app] = useRematchModel('app');
  const [{isLogin}] = useRematchModel('user');
  const {push} = useRouter();
  const {responseHandling} = useResponse();
  const dispatch = useDispatch<Dispatch>();
  const scheme = useColorScheme();
  const [modalVisible2, setModalVisible2] = useState(false);

  const size = responseHandling(290, 407);

  const [restaurantList, setRestaurantList] = useState<any>([]);

  const _getRecommendedBrand = async () => {
    // 推荐品牌
    // const res = await makeRequest(
    //   brandRouterPageRecommendedBrand({
    //     page: 1,
    //     pageSize: 10,
    //   }),
    // );

    // 用户已打卡品牌
    const res = await makeRequest(brandRouterListBrand({}));
    if (res) {
      const _restaurantList = res.map((item) => {
        let restaurant = item?.restaurants.find((item) => item.isMainStore);
        if (!restaurant) {
          restaurant = item?.restaurants[0];
        }
        return {
          ...item,
          restaurant,
        };
      });
      setRestaurantList(_restaurantList);
    }
  };

  const initData = async () => {
    const _isLogin: any = await getUserToken();

    if (_isLogin) {
      _getSnapBalance();
      _getRecommendedBrand();
      _getUnread();
      _registerDevice();
    } else {
      setRestaurantList([]);
    }
  };

  useFocusEffect(
    useCallback(() => {
      initData();
      return () => {
        // 在这里执行清理操作，例如取消获取数据
      };
    }, []),
  );

  // 注册推送 token
  const _registerDevice = async () => {
    const _deviceToken: any = await getDeviceToken();
    if (_deviceToken) {
      const res = await makeRequest(
        pushingRegisterDevice({
          deviceToken: _deviceToken,
          platform: 'SNAPX_APP_IOS',
        }),
      );
      console.log('🚀 ~ const_registerDevice= ~ res:', res);
    }
  };

  // 获取 余额
  const _getSnapBalance = async () => {
    const res = await makeRequest(memberWalletGetBalance({walletType: 'MEMBER_POINTS'}));
    if (res?.balance) {
      dispatch.app.updateState({
        snapBalance: res?.balance,
      });
    } else {
      dispatch.app.updateState({
        snapBalance: 0,
      });
    }
  };

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

  const onPress = () => {
    push('/login');
  };

  return (
    <PermissionPage isHomePage={true}>
      <HomeHeader isLogin={isLogin} />
      <YStack f={1}>
        <ScrollView bc="$background">
          <YStack jc="center" ai="center" p="$2">
            <Button
              unstyled
              jc={'center'}
              ai={'center'}
              flexDirection="row"
              onPress={() => {
                if (isLogin) {
                  push('/my/property');
                } else {
                  push('/login');
                }
              }}
            >
              <AppImage
                web={{
                  alt: '',
                  src: require('app/assets/images/token.png'),
                  width: 39,
                  height: 39,
                }}
                type="local"
                native={{
                  source: {
                    uri: require('app/assets/images/token.png'),
                    width: 39,
                    height: 39,
                  },
                }}
              />
              <SizableText ml={'$3'} size="$10" color={'$color'} fow={'600'}>
                {app?.snapBalance}
              </SizableText>
            </Button>
            <Button
              unstyled
              jc={'center'}
              ai={'center'}
              flexDirection="row"
              onPress={() => {
                setModalVisible2(true);
              }}
            >
              <SizableText size="$4" color={'$color'} fow={'600'} mr={'$2'}>
                {t('home.token.title')}
              </SizableText>
              <AppImage
                web={{
                  alt: '',
                  src: require('app/assets/images/help.png'),
                  width: 13.5,
                  height: 13.5,
                }}
                type="local"
                native={{
                  source: {
                    uri: require('app/assets/images/help.png'),
                    width: 13.5,
                    height: 13.5,
                  },
                }}
              />
            </Button>
          </YStack>
          <HomeBanner />
          <YStack pb="$6" width={'100%'} jc={'center'} ai={'center'} minHeight={size.height + 32}>
            <ScrollView
              horizontal
              contentContainerStyle={{
                height: '100%',
                flexGrow: 1,
                backgroundColor: scheme === 'dark' ? '#151515' : '#fff',
              }}
              w="100%"
            >
              <XStack
                flex={1}
                p={'$4'}
                minHeight={size.height}
                alignItems="center"
                jc={restaurantList.length <= 1 ? 'center' : 'flex-start'}
              >
                {restaurantList.length > 0 ? (
                  restaurantList?.map((item: any, index) => (
                    <XStack key={item?.id} pr={restaurantList.length <= 1 ? 0 : index >= 0 ? '$4' : 0}>
                      <RestaurantItem
                        type="list"
                        membership={item?.membership}
                        restaurantInfo={item?.restaurant}
                        brandId={item?.id}
                      />
                    </XStack>
                  ))
                ) : (
                  // <XStack flex={1} minHeight={size.height} jc={restaurantList.length <= 1 ? 'center' : 'flex-start'}>
                  <XStack borderRadius={16} w={size.width} h={size.height} bc="#f2f2f2">
                    <YStack h={'100%'} w="100%" ai={'center'} jc={'center'}>
                      <XStack>
                        <AppImage
                          web={{
                            alt: '',
                            src: require('app/assets/images/empty.png'),
                            width: 120,
                            height: 120,
                          }}
                          type="local"
                          native={{
                            source: {
                              height: 120,
                              uri: require('app/assets/images/empty.png'),
                              width: 120,
                            },
                          }}
                        />
                      </XStack>
                      <XStack w={'100%'} justifyContent='center'>
                        <SizableText col={'$color11'} fontSize={'$5'} textAlign="center">
                          {t('home.list.no')}
                        </SizableText>
                      </XStack>
                      {!isLogin && (
                        <Button
                          mt="$6"
                          style={{
                            backgroundColor: PrimaryColor,
                            height: 50,
                            borderRadius: 25,
                            paddingLeft: 30,
                            paddingRight: 30,
                          }}
                          color="$color1"
                          onPress={onPress}
                        >
                          {t('operate.button.login')}
                        </Button>
                      )}
                    </YStack>
                  </XStack>
                )}
              </XStack>
            </ScrollView>
          </YStack>
        </ScrollView>
        <MessagePopup modalVisible={modalVisible2} setModalVisible={setModalVisible2} />
      </YStack>
    </PermissionPage>
  );
};

export default HomeScreen;
