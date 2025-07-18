/*
 * @Date: 2023-12-18 14:37:38
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-27 17:04:35
 * @FilePath: /snapx-nfc-app/packages/app/pages/restaurant/exchange/index.tsx
 */
import {AppHeader, AppHeaderProps, AppImage, HeaderBackButton, SizableText, XStack, YStack, Button} from '@my/ui';
import useRequest from 'app/hooks/useRequest';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, useColorScheme} from 'react-native';
import dayjs from 'dayjs';
import {PrimaryColor} from 'app/config';
import {createParam} from 'solito';
import PermissionPage from 'app/Components/PermissionPage';
import ListEmpty from 'app/Components/ListEmpty';
import {giftRouterPageGift} from 'app/servers/api/6003Huiyuanliwuxinxi';
import PastryPopup from '../detail/components/PastryPopup';

const {useParams} = createParam<any>();

// 奖品列表
const LuckyDrawScreen = () => {
  const {t, i18n} = useTranslation();
  const scheme = useColorScheme();

  const HeaderLeft: AppHeaderProps['headerRight'] = () => <HeaderBackButton fallbackUrl="/my"></HeaderBackButton>;
  const {makeRequest} = useRequest();
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [pastryData, setPastryData] = useState<any>({});

  const {params} = useParams();

  const fetchData = async (_page = 1) => {
    setLoading(true);
    const _params: any = {
      page: _page,
      pageSize: 10,
    };
    if (params?.brandId && params?.brandId !== 'all') {
      _params.brandId = Number(params?.brandId);
    }
    const res = await makeRequest(giftRouterPageGift(_params));
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
    if (params?.brandId) {
      fetchData();
    }
  }, [params]);

  const onExchange = (item: any) => {
    setPastryData(item);
    setModalVisible(true);
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
      <AppHeader title={t('screen.restaurant.exchange.title')} headerLeft={HeaderLeft} />
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
          <YStack
            pt="$3"
            pb="$3"
            width={'100%'}
            ai={'center'}
            jc={'space-between'}
            bbw={1}
            key={item?.id}
            bbc={index !== data.length - 1 ? '#E1E1E1' : '#fff'}
          >
            <XStack jc={'space-between'} w="100%" pr="$4" pl="$4">
              <YStack maxWidth={'74%'}>
                <XStack w={'100%'} mb={'$2'}>
                  <SizableText color={'$color'} w="100%" fow="600" size={'$4'} numberOfLines={1}>
                    {i18n.language === 'zh_HK' ? item?.name : item?.en_name}
                  </SizableText>
                </XStack>
                {item?.name && (
                  <XStack ai="center" jc={'space-between'} mb={'$2'}>
                    <XStack h={54} w={54} borderRadius={8} overflow="hidden" mr="$3">
                      <AppImage
                        web={{
                          alt: '',
                          src: item?.photo,
                          width: 54,
                          height: 54,
                        }}
                        native={{
                          source: {
                            width: 54,
                            height: 54,
                            uri: item?.photo,
                          },
                        }}
                      />
                    </XStack>
                    <XStack flex={1} ai={'center'}>
                      <SizableText color={'$color'} size={'$2'} w="100%" numberOfLines={2}>
                        {t('operate.button.need', {price: item?.exchangeCost})}
                      </SizableText>
                    </XStack>
                  </XStack>
                )}
                <XStack>
                  <SizableText color={'#868686'} size={'$2'}>
                    {dayjs(item?.createAt).format('YYYY-MM-DD HH:mm:ss')}
                  </SizableText>
                </XStack>
              </YStack>
              <YStack w={'26%'} jc="center" ai={'flex-end'}>
                <YStack w={'100%'} ai={'flex-end'} jc={'center'}>
                  <Button
                    style={{
                      backgroundColor: PrimaryColor,
                      height: 30,
                      borderRadius: 15,
                      paddingLeft: 20,
                      paddingRight: 20,
                    }}
                    onPress={() => {
                      onExchange(item);
                    }}
                    color={'$color1'}
                  >
                    {t('operate.button.exchange')}
                  </Button>
                </YStack>
              </YStack>
            </XStack>
          </YStack>
        )}
      />
      <PastryPopup
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pastryData={pastryData}
        restaurantId={params?.id}
        onSuccess={() => {
          fetchData();
        }}
      />
    </PermissionPage>
  );
};
export default LuckyDrawScreen;
