/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-27 16:50:21
 * @FilePath: /snapx-nfc-app/packages/app/pages/restaurant/detail/index.tsx
 */
import {AppHeader, AppHeaderProps, Button, HeaderBackButton, Paragraph, YStack, SizableText, ScrollView} from '@my/ui';
import RestaurantItem from 'app/Components/RestaurantItem';
import useRequest from 'app/hooks/useRequest';
import {restaurantRouterGetRestaurantById} from 'app/servers/api/6006Huiyuancantingxinxi';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {createParam} from 'solito';
import {useLink} from 'solito/link';
import {useRouter} from 'solito/router';
import Gifts from './components/Gifts';
import Benefits from './components/Benefits';
import Locations from './components/Locations';
import {XStack} from '@my/ui';
import {brandRouterGetBrandById} from 'app/servers/api/6005Huiyuanpinpaixinxi';
import {Alert, Modal, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import PastryPopup from './components/PastryPopup';
import PermissionPage from 'app/Components/PermissionPage';
import useResponse from 'app/hooks/useResponse';
import WritePopup from 'app/Components/WritePopup';
import dayjs from 'dayjs';
import TierPopup from 'app/Components/TierPopup';

const {useParam} = createParam<{id: string}>();

export const DetailTitle = ({children}) => (
  <SizableText size="$4" color={'$color'} fow={'600'} pt="$4" pb="$2" pr="$4" pl="$4">
    {children}
  </SizableText>
);

interface RestaurantDetailScreenProps {}
// 餐厅详情
const RestaurantDetailScreen = ({}) => {
  const [id] = useParam('id');
  const {t, i18n} = useTranslation();
  const HeaderLeft: AppHeaderProps['headerRight'] = () => <HeaderBackButton fallbackUrl="/"></HeaderBackButton>;
  const {push} = useRouter();
  const {makeRequest} = useRequest();
  const {responseHandling} = useResponse();

  const size = responseHandling(290, 407);
  const [restaurantInfo, setRestaurantInfo] = useState<any>({});
  const [membership, setMembership] = useState<any>({});
  const [pastryData, setPastryData] = useState<any>({});

  const [modalVisible, setModalVisible] = useState(false);

  const [writeData, setWriteData] = useState<any>({});
  const [modalVisible2, setModalVisible2] = useState(false);
  const [signInGetNext, setSignInGetNext] = useState<any>({});
  const [modalVisible3, setModalVisible3] = useState(false);
  const [tierModalVisible, setTierModalVisible] = useState(false);
  const [tier, setTier] = useState<any>('');

  const _getRestaurantInfo = async () => {
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

  const onExchange = (item: any) => {
    setPastryData(item);
    setModalVisible(true);
  };
  const onWrite = (item: any) => {
    setWriteData(item);
    setModalVisible2(true);
  };
  const onTier = (value) => {
    setTier(value);
    setTierModalVisible(true);
  };

  useEffect(() => {
    _getRestaurantInfo();
  }, [id]);

  return (
    <PermissionPage>
      <AppHeader title={t('screen.restaurant.detail.title')} headerLeft={HeaderLeft} />
      <ScrollView bc="$background">
        <YStack f={1} ai="center" pt={'$5'}>
          {/* <Button
            mb="$4"
            onPress={async () => {
              push('/restaurant/sign/' + restaurantInfo?.code);
            }}
          >
            去打卡
          </Button> */}
          <XStack minHeight={size.height}>
            <RestaurantItem
              setSignInGetNext={setSignInGetNext}
              membership={membership}
              restaurantInfo={restaurantInfo}
              brandId={restaurantInfo?.brand?.id}
              onTier={onTier}
            />
          </XStack>
          <Benefits restaurantInfo={restaurantInfo} />
          <Locations restaurantInfo={restaurantInfo} />
          <Gifts
            setModalVisible3={setModalVisible3}
            signInGetNext={signInGetNext}
            onWrite={onWrite}
            onExchange={onExchange}
            restaurantInfo={restaurantInfo}
          />

          <YStack w={'100%'}>
            <DetailTitle>{t('restaurant.details.membership.title')}</DetailTitle>
            <YStack pr="$4" pl="$4">
              <XStack jc="space-between">
                <SizableText col={'$color'} fontSize={'$3'}>
                  {t('restaurant.details.membership.expires')}
                </SizableText>
                <SizableText col={'$color11'} fontSize={'$3'}>
                  {/* {` ${i18n.language === 'zh_HK' ? membership?.memberLevel?.name : membership?.memberLevel?.en_name}`} */}
                  {membership?.levelExpire ? dayjs(membership?.levelExpire).format('YYYY-MM-DD HH:mm:ss') : '-'}
                </SizableText>
              </XStack>
              <XStack jc="space-between">
                <SizableText col={'$color'} fontSize={'$3'}>
                  {t('restaurant.details.membership.bonusMultiple')}
                </SizableText>
                <SizableText col={'$color11'} fontSize={'$3'}>
                  x {membership?.memberLevel?.bonusMultiple}
                </SizableText>
              </XStack>
            </YStack>
          </YStack>

          <YStack w={'100%'}>
            <DetailTitle>{t('restaurant.details.how.title')}</DetailTitle>
            <YStack pr="$4" pl="$4">
              <SizableText col={'$color'} fontSize={'$3'}>
                {t('restaurant.details.how.tips1')}
                {`${i18n.language === 'zh_HK' ? restaurantInfo?.brand?.name : restaurantInfo?.brand?.en_name}`}
                {t('restaurant.details.how.tips2')}
              </SizableText>
            </YStack>
          </YStack>

          <YStack w={'100%'} mb="$6">
            <DetailTitle>{t('restaurant.details.about.title')}</DetailTitle>
            <YStack pr="$4" pl="$4">
              <SizableText col={'$color'} fontSize={'$3'}>
                {/* {t('restaurant.details.about.title')} */}
                {i18n.language === 'zh_HK' ? restaurantInfo?.description : restaurantInfo?.en_description}
              </SizableText>
            </YStack>
          </YStack>
        </YStack>
      </ScrollView>
      <PastryPopup
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pastryData={pastryData}
        restaurantId={restaurantInfo?.id}
        onSuccess={() => {
          _getRestaurantInfo();
        }}
      />
      <WritePopup
        modalVisible={modalVisible2}
        onSuccess={() => {
          _getRestaurantInfo();
        }}
        setModalVisible={setModalVisible2}
        writeData={writeData}
      />
      <TierPopup tier={tier} modalVisible={tierModalVisible} setModalVisible={setTierModalVisible} />
    </PermissionPage>
  );
};
export default RestaurantDetailScreen;
