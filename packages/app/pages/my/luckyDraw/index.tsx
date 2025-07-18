/*
 * @Date: 2023-12-18 14:37:38
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-27 17:14:48
 * @FilePath: /snapx-nfc-app/packages/app/pages/my/luckyDraw/index.tsx
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
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, ActivityIndicator, useColorScheme} from 'react-native';
import dayjs from 'dayjs';
import {PrimaryColor} from 'app/config';
import {createParam} from 'solito';
import {useRouter} from 'solito/router';
import PermissionPage from 'app/Components/PermissionPage';
import ListEmpty from 'app/Components/ListEmpty';
import WritePopup from 'app/Components/WritePopup';
import {memberLuckyDrawRouterPageMemberLuchyDraw} from 'app/servers/api/6002Huiyuanhuiyuancanyuchoujiangjijilu';

const {useParam} = createParam<{id: string}>();

type ItemProps = {
  item: any;
  isBorderBottom: boolean;
  onWrite: (item: any) => void;
  itemKey: any;
};
const Item: React.FC<any> = ({item, isBorderBottom, itemKey, onWrite}: ItemProps) => {
  const {t, i18n} = useTranslation();
  const {push} = useRouter();

  const onPress = () => {
    onWrite(item);
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
        <YStack maxWidth={'74%'}>
          <Button
            unstyled
            mb={'$2'}
            w={'100%'}
            flexDirection="row"
            onPress={() => {
              push('/restaurant/' + item?.restaurant?.id);
            }}
          >
            <SizableText w="100%" color={'$blue11'} size={'$3'} numberOfLines={1}>
              {i18n.language === 'zh_HK' ? item?.restaurant?.name : item?.restaurant?.en_name}
            </SizableText>
          </Button>
          <XStack w={'100%'} mb={'$2'}>
            <SizableText color={'$color'} w="100%" fow="600" size={'$4'} numberOfLines={1}>
              {i18n.language === 'zh_HK' ? item?.luckyDrawRuleTitle : item?.luckyDrawRuleEn_title}
            </SizableText>
          </XStack>
          {item?.luckyDrawGiftName && (
            <XStack ai="center" jc={'space-between'} mb={'$2'}>
              <XStack h={54} w={54} borderRadius={8} overflow="hidden" mr="$3">
                <AppImage
                  web={{
                    alt: '',
                    src: item?.luckyDrawGiftPhoto,
                    width: 54,
                    height: 54,
                  }}
                  native={{
                    source: {
                      width: 54,
                      height: 54,
                      uri: item?.luckyDrawGiftPhoto,
                    },
                  }}
                />
              </XStack>
              <XStack flex={1} ai={'center'}>
                <SizableText color={'$color'} size={'$2'} w="100%" numberOfLines={2}>
                  {`${i18n.language === 'zh_HK' ? item?.luckyDrawGiftName : item?.luckyDrawGiftEN_name} x ${
                    item?.luckyDrawRuleQuantity
                  }`}
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
          {item?.luckyDrawGiftName && (
            <YStack w={'26%'} ai={'flex-end'} jc={'center'}>
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
            </YStack>
          )}
        </YStack>
      </XStack>
    </YStack>
  );
};

// 奖品列表
const LuckyDrawScreen = () => {
  const {t} = useTranslation();
  const scheme = useColorScheme();

  const HeaderLeft: AppHeaderProps['headerRight'] = () => <HeaderBackButton fallbackUrl="/my"></HeaderBackButton>;
  const {makeRequest} = useRequest();
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const [writeData, setWriteData] = useState<any>({});

  const [modalVisible, setModalVisible] = useState(false);

  const [id] = useParam('id');

  const fetchData = async (_page = 1) => {
    setLoading(true);
    const params: any = {
      page: _page,
      pageSize: 10,
    };
    if (id && id !== 'all') {
      params.restaurantId = Number(id);
    }
    const res = await makeRequest(memberLuckyDrawRouterPageMemberLuchyDraw(params));
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
    if (id) {
      fetchData();
    }
  }, [id]);

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

  const onWrite = (item: any) => {
    setWriteData({
      restaurantId: item?.restaurant?.id,
      recordType: 'luckyDraw',
      recordId: item?.memberGiftExchangeId,
      name: item?.luckyDrawGiftName,
      en_name: item?.luckyDrawGiftEN_name,
      description: item?.luckyDrawGiftDescription,
      en_description: item?.luckyDrawGiftEn_description,
      photo: item?.luckyDrawGiftPhoto,
      quantity: item?.luckyDrawRuleQuantity,
    });
    setModalVisible(true);
  };

  return (
    <PermissionPage>
      <AppHeader title={t('screen.luckyDraw.title')} headerLeft={HeaderLeft} />
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
        modalVisible={modalVisible}
        onSuccess={() => {
          fetchData();
        }}
        setModalVisible={setModalVisible}
        writeData={writeData}
      />
    </PermissionPage>
  );
};
export default LuckyDrawScreen;
