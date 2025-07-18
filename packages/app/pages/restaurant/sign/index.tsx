/*
 * @Date: 2023-12-18 14:37:38
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-27 15:24:58
 * @FilePath: /snapx-nfc-app/packages/app/pages/restaurant/sign/index.tsx
 */
import {
  AppHeader,
  AppHeaderProps,
  HeaderBackButton,
  Paragraph,
  ScrollView,
  SizableText,
  XStack,
  YStack,
  AppImage,
  useToastController,
  Button,
} from '@my/ui';
import RestaurantItem from 'app/Components/RestaurantItem';
import useRequest from 'app/hooks/useRequest';
import {nfcSignInGetNextClockInGiftInfo, nfcSignInSignIn} from 'app/servers/api/4000NfCqiandao';
import {restaurantRouterGetRestaurantById} from 'app/servers/api/6006Huiyuancantingxinxi';
import React, {useEffect, useState} from 'react';
import {createParam} from 'solito';
import DragPopup from './components/DragPopup';
import LuckyDraw from './components/LuckyDraw';
import AwardsPopup from './components/AwardsPopup';
import {brandRouterGetBrandById} from 'app/servers/api/6005Huiyuanpinpaixinxi';
import {memberLuckyDrawRouterMemberParticipateInLuckyDraw} from 'app/servers/api/6002Huiyuanhuiyuancanyuchoujiangjijilu';
import PermissionPage from 'app/Components/PermissionPage';
import useResponse from 'app/hooks/useResponse';
import {useRematchModel} from 'app/store/model';
import {useRouter} from 'solito/router';
import {globalConfigFindGlobalConfig} from 'app/servers/api/9000Quanjupeizhi';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'app/store';
import AppLoading from 'app/Components/AppLoading';
import {Platform} from 'react-native';
import {PrimaryColor} from 'app/config';
import { memberWalletGetBalance } from 'app/servers/api/3000Huiyuanjifenqianbao';
const {useParam} = createParam<{code: string}>();

interface SignScreenProps {
  location: any;
}
// 打卡
const SignScreen = ({location}: SignScreenProps) => {
  const {t, i18n} = useTranslation();
  const [code] = useParam('code');
  const {responseHandling} = useResponse();
  const [{isLogin}] = useRematchModel('user');
  const [{globalConfig, snapBalance}] = useRematchModel('app');
  const {replace} = useRouter();

  const size = responseHandling(290, 407);
  const {makeRequest} = useRequest();
  const toast = useToastController();

  //餐厅信息
  const [restaurantInfo, setRestaurantInfo] = useState<any>({});
  // 打卡信息
  const [signInData, setSignInData] = useState<any>({});
  //  中奖信息
  const [awardsData, setAwardsData] = useState<any>({});

  const [luckyDrawPopupVisible, setLuckyDrawPopupVisible] = useState(false);
  const [awardsPopupVisible, setAwardsPopupVisible] = useState(false);
  const [dragPopupVisible, setDragPopupVisible] = useState(false);
  const [membership, setMembership] = useState<any>({});
  const dispatch = useDispatch<Dispatch>();

  // 打卡
  const _getCheckIn = async () => {
    try {
      if (code) {
        if (Platform.OS === 'ios') {
        }
        const params = {
          code,
          lat: String(location?.lat) || '',
          lng: String(location?.lng) || '',
        };
        const res = await makeRequest(nfcSignInSignIn(params));
        // const res = demo;
        if (res?.signInRecord?.restaurantId) {
          _getRestaurantInfo(res?.signInRecord?.restaurantId);
          const _signInData: any = {
            ...res,
          };
          if (res?.giftList && res?.giftList?.length > 0) {
            _signInData.giftInfo = res?.giftList[0];
          }
          setSignInData(_signInData);
          _getSnapBalance();
        } else {
          console.log('🚀 ~ const_getCheckIn= ~ res:', res);
          // toast.show(t('tips.error.sign.title'), {
          //   duration: 3000,
          // });
        }
      }
    } catch (error) {
      console.log('🚀 ~ const_getCheckIn= ~ error:', error);
    }
  };

  //获取餐厅详情
  const _getRestaurantInfo = async (id: number) => {
    if (id) {
      const res = await makeRequest(
        restaurantRouterGetRestaurantById({
          id: Number(id),
        }),
      );
      if (res?.id) {
        setRestaurantInfo(res);
        const res2 = await makeRequest(
          brandRouterGetBrandById({
            id: res?.brandId,
          }),
        );
        if (res2?.membership) {
          setMembership(res2?.membership);
        }
      }
    }
  };

  // 礼物弹窗关闭
  const awardsPopupClose = () => {
    setAwardsPopupVisible(false);
    setAwardsData({});
  };

  // 抽奖
  const onLottery = async () => {
    setDragPopupVisible(false);
    setLuckyDrawPopupVisible(false);

    const res = await makeRequest(
      memberLuckyDrawRouterMemberParticipateInLuckyDraw({
        luckyDrawId: signInData?.luckyDraw?.id,
      }),
    );
    if (res) {
      setAwardsData(res);
      setAwardsPopupVisible(true);
    }
  };
  // 获取全局配置
  const _getGlobalConfig = async () => {
    const res = await makeRequest(globalConfigFindGlobalConfig());
    if (res) {
      dispatch.app.updateState({
        globalConfig: res,
      });
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

  useEffect(() => {
    if (isLogin) {
      if (location) {
        _getCheckIn();
        _getGlobalConfig();
      }
    } else {
      replace({
        pathname: '/login',
        query: {
          code: code,
          type: 'sign',
        },
      });
    }
  }, [location, isLogin]);

  useEffect(() => {
    if (signInData?.luckyDraw?.id && snapBalance >= globalConfig?.luckyDrawCost) {
      setLuckyDrawPopupVisible(true);
    }
  }, [signInData, globalConfig, snapBalance]);

  const HeaderLeft: AppHeaderProps['headerRight'] = () => <HeaderBackButton fallbackUrl="/"></HeaderBackButton>;

  return (
    <PermissionPage isHomePage={true}>
      <AppHeader title={t('screen.restaurant.sign.title')} headerLeft={HeaderLeft} />
      {luckyDrawPopupVisible ? (
        <LuckyDraw
          modalVisible={luckyDrawPopupVisible}
          setDragPopupVisible={setDragPopupVisible}
          setModalVisible={setLuckyDrawPopupVisible}
          restaurantInfo={restaurantInfo}
        />
      ) : (
        <ScrollView bc="$background">
          <YStack f={1} ai="center" pt={'$5'}>
            <XStack minHeight={size.height}>
              <RestaurantItem
                brandId={restaurantInfo?.brand?.id}
                membership={membership}
                restaurantInfo={restaurantInfo}
              />
            </XStack>
            {signInData?.signInRecord?.id && (
              <YStack pt={'$6'} ai={'center'} pb={'$6'}>
                <XStack>
                  <SizableText col={'$color'} fow={'500'} fontSize={'$4'}>
                    {t('check_in.title.main')}
                  </SizableText>
                </XStack>
                {signInData?.giftInfo && (
                  <XStack jc={'space-between'} mb="$3" mt="$3">
                    <XStack ai={'center'} borderRadius={8} overflow="hidden">
                      <AppImage
                        web={{
                          alt: '',
                          src: signInData?.giftInfo?.exchangeGiftPhoto,
                          width: 54,
                          height: 54,
                        }}
                        native={{
                          source: {
                            height: 54,
                            uri: signInData?.giftInfo?.exchangeGiftPhoto,
                            width: 54,
                          },
                        }}
                      />
                    </XStack>
                    <XStack ai={'center'}>
                      <SizableText ml="$4" col={'$color'} fow="600" fontSize={'$3'}>
                        {`${
                          i18n.language === 'zh_HK'
                            ? signInData?.giftInfo?.exchangeGiftName
                            : signInData?.giftInfo?.exchangeGiftEn_name
                        } x ${signInData?.giftInfo?.number || 1}`}
                      </SizableText>
                    </XStack>
                  </XStack>
                )}
                <XStack ai={'center'} mb="$3" mt="$3">
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
                  <SizableText ml="$4" col={'$color'} fow="600" fontSize={'$6'}>
                    + {signInData?.signInRecord?.bonus || 0}
                  </SizableText>
                </XStack>
                <XStack>
                  <SizableText col={'$color'} fontSize={'$3'}>
                    {t('restaurant.details.gifts.snap.title')}
                  </SizableText>
                </XStack>
              </YStack>
            )}
            <XStack pt="$8" pr="$4" pl="$4" w={'100%'}>
              <Button
                style={{
                  backgroundColor: PrimaryColor,
                  height: 50,
                  borderRadius: 25,
                  paddingLeft: 20,
                  paddingRight: 20,
                  width: '100%',
                }}
                color="$color1"
                mb="$3"
                ai="center"
                jc="center"
                onPress={() => {
                  replace('/');
                }}
              >
                <SizableText col={'$color1'} fontSize={'$3'}>
                  {t('operate.button.returnHomepage')}
                </SizableText>
              </Button>
            </XStack>
          </YStack>
        </ScrollView>
      )}
      <DragPopup modalVisible={dragPopupVisible} setModalVisible={setDragPopupVisible} onLottery={onLottery} />
      <AwardsPopup modalVisible={awardsPopupVisible} awardsPopupClose={awardsPopupClose} awardsData={awardsData} />
    </PermissionPage>
  );
};
export default SignScreen;
