/*
 * @Date: 2023-12-18 14:37:38
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-27 17:18:39
 * @FilePath: /snapx-nfc-app/packages/app/pages/my/prize/index.tsx
 */
import {
  AppHeader,
  AppHeaderProps,
  AppImage,
  HeaderBackButton,
  Paragraph,
  SizableText,
  XStack,
  YStack,
  Button,
} from '@my/ui';
import useRequest from 'app/hooks/useRequest';
import {nfcSignInPageSignIn} from 'app/servers/api/4000NfCqiandao';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, ActivityIndicator, useColorScheme} from 'react-native';
import {memberGiftExchangeRouterPageMemberGiftExchange} from 'app/servers/api/6004Cantinghuiyuanliwuduihuanjijilu';
import dayjs from 'dayjs';
import {PrimaryColor} from 'app/config';
import {createParam} from 'solito';
import PermissionPage from 'app/Components/PermissionPage';
import ListEmpty from 'app/Components/ListEmpty';
import GiftPopup from 'app/Components/GiftPopup';
import {useRouter} from 'solito/router';
import WritePopup from 'app/Components/WritePopup';

const {useParams} = createParam<any>();

type ItemProps = {
  item: any;
  isBorderBottom: boolean;
  onWrite: (item: any) => void;
  itemKey: any;
};
const Item: React.FC<any> = ({item, isBorderBottom, onWrite, itemKey}: ItemProps) => {
  const {t, i18n} = useTranslation();
  const {push} = useRouter();

  const onPress = () => {
    let recordType = 'luckyDraw';
    if (item.exchangeType === 'LUCKY_DRAW') {
      recordType = 'luckyDraw';
    }
    if (item.exchangeType === 'SIGN_IN' || item.exchangeType === 'SIGN_IN_BOUNS') {
      recordType = 'clockIn';
    }

    onWrite &&
      onWrite({
        restaurantId: item?.restaurant?.id,
        recordType: recordType,
        recordId: item?.id,
        name: item?.exchangeGiftName,
        en_name: item?.exchangeGiftEn_name,
        description: item?.exchangeGiftDescription,
        en_description: item?.exchangeGiftEn_description,
        photo: item?.exchangeGiftPhoto,
        quantity: item?.quantity,
      });
  };

  return (
    <YStack
      pt="$3"
      pb="$3"
      width={'100%'}
      ai={'center'}
      jc={'space-between'}
      bbw={1}
      key={itemKey}
      bbc={!isBorderBottom ? '#E1E1E1' : '#fff'}
    >
      <XStack jc={'space-between'} w="100%" pr="$4" pl="$4">
        <YStack w="100%">
          <Button
            unstyled
            mb={'$2'}
            w={'100%'}
            flexDirection="row"
            onPress={() => {
              push('/restaurant/' + item?.restaurant?.id);
            }}
          >
            <SizableText color={'$blue11'} size={'$3'} w="100%" numberOfLines={1}>
              {i18n.language === 'zh_HK' ? item?.restaurant?.name : item?.restaurant?.en_name}
            </SizableText>
          </Button>
          <XStack w={'100%'} mb={'$2'}>
            <SizableText color={'$color'} w="100%" fow="600" size={'$4'} numberOfLines={1}>
              {item?.exchangeType === 'LUCKY_DRAW' && t('restaurant.details.gifts.get.1')}
              {item?.exchangeType === 'SIGN_IN_BOUNS' && t('restaurant.details.gifts.get.2')}
              {item?.exchangeType === 'GENERAL' && t('restaurant.details.gifts.get.3')}
              {item?.exchangeType === 'RESTAUARNT_INVITE' && t('restaurant.details.gifts.get.4')}
              {/* {item?.exchangeType === 'SIGN_IN_BOUNS' && t('restaurant.details.gifts.get.5')} */}
            </SizableText>
          </XStack>
          <XStack w={'100%'} mb={'$2'}>
            <SizableText color={'$color'} w="100%" fow="600" size={'$4'} numberOfLines={1}>
              {i18n.language === 'zh_HK' ? item?.luckyDrawRuleTitle : item?.luckyDrawRuleEn_title}
            </SizableText>
          </XStack>
          <XStack w="100%" jc={'space-between'}>
            {item?.exchangeGiftName && (
              <XStack maxWidth="70%">
                <XStack h={54} w={54} borderRadius={8} overflow="hidden" mr="$3">
                  <AppImage
                    web={{
                      alt: '',
                      src: item?.exchangeGiftPhoto,
                      width: 54,
                      height: 54,
                    }}
                    native={{
                      source: {
                        width: 54,
                        height: 54,
                        uri: item?.exchangeGiftPhoto,
                      },
                    }}
                  />
                </XStack>
                <YStack flex={1} ai={'center'}>
                  <SizableText color={'$color'} size={'$2'} w="100%" numberOfLines={2}>
                    {`${i18n.language === 'zh_HK' ? item?.exchangeGiftName : item?.exchangeGiftEn_name}`}
                  </SizableText>
                  <SizableText color={'$color'} size={'$2'} w="100%">
                    {`x ${item?.quantity}`}
                  </SizableText>
                </YStack>
              </XStack>
            )}
            <XStack w="30%" ai={'center'} jc={'flex-end'}>
              <Button
                style={{
                  backgroundColor: item?.isSettlement ? '#afafaf' : PrimaryColor,
                  height: 30,
                  borderRadius: 15,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
                color="$color1"
                disabled={item?.isSettlement}
                onPress={onPress}
              >
                {item?.isSettlement ? t('operate.button.onWrite') : t('operate.button.write')}
              </Button>
            </XStack>
          </XStack>

          {/* {item?.quantity && (
            <YStack flex={1} ai={'center'}>
              <SizableText color={'$color'} size={'$2'} w="100%">
                {`x ${item?.quantity}`}
              </SizableText>
            </YStack>
          )} */}
          <XStack>
            <SizableText color={'#868686'} size={'$2'}>
              {dayjs(item?.createAt).format('YYYY-MM-DD HH:mm:ss')}
            </SizableText>
          </XStack>
        </YStack>
      </XStack>
    </YStack>
  );
};

// 奖品列表
const PrizeScreen = () => {
  const scheme = useColorScheme();
  const {t} = useTranslation();
  const HeaderLeft: AppHeaderProps['headerRight'] = () => <HeaderBackButton fallbackUrl="/my"></HeaderBackButton>;
  const {makeRequest} = useRequest();
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const [writeData, setWriteData] = useState<any>({});
  const [modalVisible2, setModalVisible2] = useState(false);
  const {params} = useParams();

  const fetchData = async (_page = 1) => {
    setLoading(true);
    const _params: any = {
      page: _page,
      pageSize: 10,
    };
    if (params?.id && params?.id !== 'all') {
      _params.restaurantId = Number(params?.id);
    }
    if (params?.type) {
      _params.exchangeType = params?.type;
    }
    const res = await makeRequest(memberGiftExchangeRouterPageMemberGiftExchange(_params));
    if (res?.record && res?.record.length > 0) {
      if (_page === 1) {
        setData(res.record);
      } else {
        setData([...data, ...res.record]);
      }
      setPage(_page);
      setLoading(false);
      setTotal(res.totalCount);
    } else {
      setLoading(false);
    }
  };

  const fetchMoreData = async () => {
    if (!loadingMore && data.length < total) {
      setLoadingMore(true);
      await fetchData(page + 1);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    if (params?.id) {
      fetchData();
    }
  }, [params]);

  const onWrite = (item: any) => {
    setWriteData(item);
    setModalVisible2(true);
  };

  /**
   * 加载时加载动画
   */
  const _renderFooter = () => {
    if (!loading) {
      if (data.length === total) {
        return (
          <XStack w="100%" jc={'center'}>
            <SizableText col={'$color11'} fontSize={'$3'}>
              {t('tips.list.loading.title')}
            </SizableText>
          </XStack>
        );
      } else {
        if (data.length > 0) {
          return (
            <XStack w="100%" jc={'center'}>
              <SizableText col={'$color11'} fontSize={'$3'}>
                {t('tips.list.loading.title2')}
              </SizableText>
            </XStack>
          );
        }
      }
    } else {
      return <XStack w="100%" jc={'center'}></XStack>;
    }
  };

  return (
    <PermissionPage>
      <AppHeader title={t('screen.prize.title')} headerLeft={HeaderLeft} />
      <FlatList
        data={data}
        refreshing={loading}
        keyExtractor={(item, index) => item?.id}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: scheme === 'dark' ? '#151515' : '#fff',
          flex: 1,
        }}
        contentContainerStyle={{flexGrow: 1, backgroundColor: scheme === 'dark' ? '#151515' : '#fff'}}
        onEndReached={() => {
          fetchMoreData();
        }}
        onEndReachedThreshold={50}
        onRefresh={() => {
          fetchData();
        }}
        ListFooterComponent={_renderFooter}
        ListEmptyComponent={<ListEmpty loading={loading} />}
        renderItem={({item, index}) => (
          <XStack w="100%" jc={'center'} key={item.id}>
            <Item isBorderBottom={index === data.length - 1} onWrite={onWrite} item={item} itemKey={item.id} />
          </XStack>
        )}
      />
      <WritePopup
        modalVisible={modalVisible2}
        onSuccess={() => {
          fetchData();
        }}
        setModalVisible={setModalVisible2}
        writeData={writeData}
      />
    </PermissionPage>
  );
};
export default PrizeScreen;
