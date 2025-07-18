/*
 * @Date: 2023-12-18 14:37:38
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-27 17:49:04
 * @FilePath: /snapx-nfc-app/packages/app/pages/my/property/index.tsx
 */
import {AppHeader, AppHeaderProps, HeaderBackButton, Paragraph, SizableText, XStack, YStack} from '@my/ui';
import useRequest from 'app/hooks/useRequest';
import {nfcSignInPageSignIn} from 'app/servers/api/4000NfCqiandao';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, ActivityIndicator, useColorScheme} from 'react-native';
import dayjs from 'dayjs';
import PermissionPage from 'app/Components/PermissionPage';
import {PrimaryColor} from 'app/config';
import {useRematchModel} from 'app/store/model';
import ListEmpty from 'app/Components/ListEmpty';
import {memberWalletPageTransation} from 'app/servers/api/3000Huiyuanjifenqianbao';

type ItemProps = {
  item: any;
  isBorderBottom: boolean;
  itemKey: any;
};
const Item: React.FC<any> = ({item, isBorderBottom, itemKey}: ItemProps) => {
  const {t} = useTranslation();

  const onPress = () => {};

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
        <YStack>
          <XStack>
            <SizableText color={'$color'} size={'$4'}>
              {item?.remark}
            </SizableText>
          </XStack>
          <XStack>
            <SizableText color={'#868686'} size={'$2'}>
              {item.bonusMultiple}
            </SizableText>
          </XStack>
          <XStack>
            <SizableText color={'#868686'} size={'$2'} fontSize={'$3'}>
              {dayjs(item?.createAt).format('YYYY-MM-DD HH:mm:ss')}
            </SizableText>
          </XStack>
        </YStack>
        <YStack ai={'center'}>
          <XStack>
            <SizableText color={item?.transationDirection === 'DEBIT' ? '#52c41a' : '#ff4d4f'} size={'$3'} fow={'600'}>
              {item?.transationDirection === 'DEBIT' ? '+' : '-'} {item.amount}
            </SizableText>
          </XStack>
          <XStack>
            <SizableText color={'$color'} size={'$2'}>
              {t('restaurant.details.gifts.snap.title')}
            </SizableText>
          </XStack>
        </YStack>
      </XStack>
    </YStack>
  );
};

// 打卡列表
const CheckInScreen = () => {
  const {t} = useTranslation();
  const scheme = useColorScheme();

  const HeaderLeft: AppHeaderProps['headerRight'] = () => <HeaderBackButton fallbackUrl="/my"></HeaderBackButton>;
  const {makeRequest} = useRequest();
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchData = async (_page = 1) => {
    setLoading(true);
    //  交易记录
    const res = await makeRequest(memberWalletPageTransation({walletType: 'MEMBER_POINTS', page: _page, pageSize: 10}));
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
    fetchData();
  }, []);

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
      <AppHeader title={t('screen.property.title')} headerLeft={HeaderLeft} />
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
            <Item isBorderBottom={index === data.length - 1} item={item} itemKey={item.id} />
          </XStack>
        )}
      />
    </PermissionPage>
  );
};
export default CheckInScreen;
