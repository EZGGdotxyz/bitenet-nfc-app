/*
 * @Date: 2023-12-08 16:25:15
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-27 10:52:50
 * @FilePath: /snapx-nfc-app/packages/app/pages/restaurant/detail/components/Gifts/index.tsx
 */
import {AppImage, Button, H5, Paragraph, Separator, SizableText, Tabs, Text, XStack, YStack} from '@my/ui';
import {Airplay, AlignJustify, X} from '@tamagui/lucide-icons';
import {useTranslation} from 'react-i18next';
import {Link} from 'solito/link';
import {DetailTitle} from '../..';
import {useEffect, useState} from 'react';
import useRequest from 'app/hooks/useRequest';
import {nfcSignInPageSignIn} from 'app/servers/api/4000NfCqiandao';
import GiftsItem from './GiftsItem';
import {memberLuckyDrawRouterPageMemberLuchyDraw} from 'app/servers/api/6002Huiyuanhuiyuancanyuchoujiangjijilu';
import {giftRouterPageGift} from 'app/servers/api/6003Huiyuanliwuxinxi';
import Empty from 'app/Components/Empty';
import {useRouter} from 'solito/router';
import {PrimaryColor} from 'app/config';
import {ChevronRight} from '@tamagui/lucide-icons';

export type GiftsProps = {
  restaurantInfo: any;
  onExchange: (values) => void;
  onWrite: (values) => void;
  signInGetNext: any;
  setModalVisible3: (value: boolean) => void;
};

const NavItem: React.FC<any> = ({title, active, onPress}) => {
  return (
    <Button
      unstyled
      borderBottomWidth={1}
      borderColor={active ? '#F26F21' : '$background'}
      ml={'$2'}
      mr="$2"
      onPress={onPress}
    >
      <SizableText fow={active ? '700' : '400'} col={active ? '#F26F21' : '$color'} fontSize={'$3'}>
        {title}
      </SizableText>
    </Button>
  );
};

// 礼物
const Gifts: React.FC<any> = ({restaurantInfo, onExchange, onWrite, signInGetNext, setModalVisible3}: GiftsProps) => {
  const {t, i18n} = useTranslation();

  const [activeTab, setActiveTab] = useState('perks');
  const [perksList, setPerksList] = useState<any>([]);
  const [luckyDrawList, setLuckyDrawList] = useState<any>([]);
  const [snapList, setSnapList] = useState<any>([]);
  const {push} = useRouter();

  const {makeRequest} = useRequest();

  // 打卡礼物列表
  const _getPerksList = async () => {
    const res = await makeRequest(
      nfcSignInPageSignIn({
        page: 1,
        pageSize: 10,
        restaurantId: restaurantInfo?.id,
        hasGift: 'true',
      }),
    );
    if (res?.record && res?.record.length > 0) {
      const _record = res.record.map((item: any) => {
        const _item = item;
        if (item?.giftList && item?.giftList?.length > 0) {
          _item.giftInfo = item?.giftList[0];
          _item.isSettlement = item?.giftList[0]?.isSettlement;
        }
        return _item;
      });
      setPerksList(_record);
    }
  };

  //  抽奖列表
  const _getLuckyDrawList = async () => {
    const res = await makeRequest(
      memberLuckyDrawRouterPageMemberLuchyDraw({
        page: 1,
        pageSize: 10,
        restaurantId: restaurantInfo?.id,
        hasGift: 'true',
      }),
    );
    if (res?.record && res?.record.length > 0) {
      setLuckyDrawList(res.record);
    }
  };

  // 可兑换礼物列表
  const _getSnap = async () => {
    const res = await makeRequest(
      giftRouterPageGift({
        page: 1,
        pageSize: 10,
        brandId: restaurantInfo?.brand?.id,
      }),
    );
    if (res?.record && res?.record.length > 0) {
      const _snapList = res.record.map((item: any) => {
        return {
          ...item,
        };
      });
      setSnapList(_snapList);
    }
  };

  useEffect(() => {
    if (restaurantInfo?.id) {
      _getPerksList();
      _getSnap();
      _getLuckyDrawList();
    }
  }, [restaurantInfo]);

  return (
    <YStack w={'100%'}>
      <DetailTitle>{t('restaurant.details.gifts.title')}</DetailTitle>

      <XStack jc={'space-between'} pr="$4" pl="$4">
        <XStack>
          <NavItem
            title={t('restaurant.details.gifts.perks.title')}
            active={activeTab === 'perks'}
            onPress={() => {
              setActiveTab('perks');
            }}
          />

          <NavItem
            title={t('restaurant.details.gifts.luckyDraw.title')}
            active={activeTab === 'luckyDraw'}
            onPress={() => {
              setActiveTab('luckyDraw');
            }}
          />

          <NavItem
            title={t('restaurant.details.gifts.snap.title')}
            active={activeTab === 'snap'}
            onPress={() => {
              setActiveTab('snap');
            }}
          />
        </XStack>
        {activeTab === 'snap' && (
          <XStack
            onPress={() => {
              let url = '';
              if (activeTab === 'perks') {
                url = '/my/check_in';
                push({
                  pathname: url,
                  query: {
                    id: restaurantInfo?.id,
                  },
                });
              } else if (activeTab === 'luckyDraw') {
                url = '/my/luckyDraw';
                push({
                  pathname: url,
                  query: {
                    id: restaurantInfo?.id,
                  },
                });
              } else if (activeTab === 'snap') {
                url = '/my/prize';
                push({
                  pathname: url,
                  query: {
                    id: restaurantInfo?.id,
                    type: 'GENERAL',
                  },
                });
              }
            }}
          >
            <SizableText fontSize={'$3'}>{t(`restaurant.details.gifts.${activeTab}.history`)}</SizableText>
          </XStack>
        )}
      </XStack>
      <YStack pr="$4" pl="$4">
        <YStack pt="$2" display={activeTab === 'perks' ? 'flex' : 'none'}>
          {signInGetNext?.gift?.name && (
            <XStack
              pt="$3"
              pb="$3"
              width={'100%'}
              ai={'center'}
              jc={'space-between'}
              borderBottomWidth={1}
              borderColor={perksList.length > 0 ? '#e1e1e1' : '#ffffff'}
            >
              <XStack ai={'center'} width={'68%'}>
                <XStack mr="$3">
                  <AppImage
                    web={{
                      alt: '',
                      src: require('app/assets/images/circle-arrow-right-filled.png'),
                      width: 24,
                      height: 24,
                    }}
                    type="local"
                    native={{
                      source: {
                        uri: require('app/assets/images/circle-arrow-right-filled.png'),
                        width: 24,
                        height: 24,
                      },
                    }}
                  />
                </XStack>
                <YStack width={'80%'}>
                  <SizableText col={'$color11'} fontSize={'$2'}>
                    {t('restaurant.details.gifts.perks.ready')}
                  </SizableText>
                  <SizableText
                    width={'100%'}
                    col={'$color'}
                    fontSize={'$3'}
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                  >
                    {i18n.language === 'zh_HK' ? signInGetNext?.gift?.name : signInGetNext?.gift?.en_name}
                  </SizableText>
                </YStack>
              </XStack>
              <YStack>
                <SizableText col={'$color11'} fontSize={'$2'}>
                  {t('restaurant.details.gifts.perks.visit', {count: signInGetNext?.remaining || 0})}
                </SizableText>
              </YStack>
              {/* <Button
                style={{
                  backgroundColor: PrimaryColor,
                  height: 30,
                  borderRadius: 15,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
                          color="$color1"

                onPress={() => {
                  setModalVisible3(true);
                }}
              >
                {t('operate.button.details')}
              </Button> */}
            </XStack>
          )}
          {perksList.length > 0 ? (
            perksList.map((item: any, index: number) => {
              return (
                <GiftsItem
                  activeTab={activeTab}
                  isBorderBottom={index === perksList.length - 1 && index > 0}
                  item={item}
                  itemKey={item.id}
                  restaurantId={restaurantInfo?.id}
                  onWrite={onWrite}
                />
              );
            })
          ) : (
            <Empty minHeight={'$8'} />
          )}
          {perksList.length > 0 && (
            <Button
              unstyled
              fd="row"
              alignItems="center"
              jc={'center'}
              onPress={() => {
                push({
                  pathname: '/my/check_in',
                  query: {
                    id: restaurantInfo?.id,
                  },
                });
              }}
            >
              <Paragraph col={'$color11'} fontSize={'$3'}>
                {t('restaurant.details.gifts.perks.all')}
              </Paragraph>
              <ChevronRight size={20} color={'$color11'} style={{marginLeft: -8}} />
            </Button>
          )}
        </YStack>
        <YStack pt="$2" display={activeTab === 'luckyDraw' ? 'flex' : 'none'}>
          {luckyDrawList.length > 0 ? (
            luckyDrawList.map((item: any, index: number) => {
              return (
                <GiftsItem
                  activeTab={activeTab}
                  isBorderBottom={index === luckyDrawList.length - 1 && index > 0}
                  item={item}
                  itemKey={item.id}
                  restaurantId={restaurantInfo?.id}
                  onWrite={onWrite}
                />
              );
            })
          ) : (
            <Empty minHeight={'$8'} />
          )}
          {luckyDrawList.length > 0 && (
            <Button
              unstyled
              fd="row"
              alignItems="center"
              jc={'center'}
              onPress={() => {
                push({
                  pathname: '/my/luckyDraw',
                  query: {
                    id: restaurantInfo?.id,
                  },
                });
              }}
            >
              <Paragraph col={'$color11'} fontSize={'$3'}>
                {t('restaurant.details.gifts.luckyDraw.all')}
              </Paragraph>
              <ChevronRight size={20} color={'$color11'} style={{marginLeft: -8}} />
            </Button>
          )}
        </YStack>
        <YStack pt="$2" display={activeTab === 'snap' ? 'flex' : 'none'}>
          {snapList.length > 0 ? (
            snapList.map((item: any, index: number) => {
              return (
                <GiftsItem
                  activeTab={activeTab}
                  isBorderBottom={index === snapList.length - 1 && index > 0}
                  item={item}
                  itemKey={item.id}
                  restaurantId={restaurantInfo?.id}
                  onExchange={onExchange}
                />
              );
            })
          ) : (
            <Empty minHeight={'$8'} />
          )}
          {snapList.length > 0 && (
            <Button
              unstyled
              fd="row"
              alignItems="center"
              jc={'center'}
              onPress={() => {
                push({
                  pathname: '/restaurant/exchange',
                  query: {
                    brandId: restaurantInfo?.brand?.id,
                    id: restaurantInfo?.id,
                  },
                });
              }}
            >
              <Paragraph col={'$color11'} fontSize={'$3'}>
                {t('restaurant.details.gifts.snap.all')}
              </Paragraph>
              <ChevronRight size={20} color={'$color11'} style={{marginLeft: -8}} />
            </Button>
          )}
        </YStack>
      </YStack>
    </YStack>
  );
};

export default Gifts;
