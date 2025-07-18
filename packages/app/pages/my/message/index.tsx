/*
 * @Date: 2023-12-18 14:37:38
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-27 17:48:53
 * @FilePath: /snapx-nfc-app/packages/app/pages/my/message/index.tsx
 */
import {
  AppHeader,
  AppHeaderProps,
  Button,
  HeaderBackButton,
  Paragraph,
  SizableText,
  XStack,
  YStack,
  useToastController,
} from '@my/ui';
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
import {
  notificationFindInSiteMessage,
  notificationGetUnreadCount,
  notificationPageInSiteMessage,
  notificationUpdateAllInSiteMessageRead,
} from 'app/servers/api/2001Xiaoxitongzhi';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'app/store';
import {useRouter} from 'solito/router';
type ItemProps = {
  item: any;
  isBorderBottom: boolean;
  onSuccess: () => void;
  itemKey: any;
};
const Item: React.FC<any> = ({item, isBorderBottom, itemKey, onSuccess}: ItemProps) => {
  const {t, i18n} = useTranslation();
  const {makeRequest} = useRequest();
  const toast = useToastController();
  const {push} = useRouter();

  const onPress = async () => {
    const res = await makeRequest(notificationFindInSiteMessage({id: item?.id}));
    if (res?.id) {
      toast.show(t('tips.message.read.success'));
      onSuccess();
    }
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
      <YStack jc={'space-between'} w="100%" pr="$4" pl="$4">
        {item?.source === 'RESTAURANT' ? (
          <Button
            unstyled
            mb={'$2'}
            w={'100%'}
            flexDirection="row"
            jc={'space-between'}
            onPress={() => {
              push('/restaurant/' + item?.restaurant?.id);
            }}
          >
            <SizableText color={'$color'} size={'$3'} fow="600">
              {item?.source === 'RESTAURANT' && t('my.message.source.restaurant')}
            </SizableText>
            <SizableText color={'$blue11'} size={'$3'} numberOfLines={1}>
              {i18n.language === 'zh_HK' ? item?.restaurant?.name : item?.restaurant?.en_name}
            </SizableText>
          </Button>
        ) : (
          <XStack>
            <SizableText color={'$color'} size={'$3'} fow="600">
              {item?.source === 'SYSTEM' && t('my.message.source.system')}
              {item?.source === 'ADMIN' && t('my.message.source.admin')}
              {item?.source === 'RESTAURANT' && t('my.message.source.restaurant')}
            </SizableText>
          </XStack>
        )}

        <XStack>
          <SizableText color={'$color'} size={'$5'} fow="600">
            {item?.title}
          </SizableText>
        </XStack>
        <XStack w="100%">
          <SizableText color={'$color'} size={'$3'} style={{overflow: 'hidden', wordBreak: 'break-all'}}>
            {item.context}
          </SizableText>
        </XStack>
        <XStack flex={1} jc="space-between" ai={'center'}>
          <XStack>
            <SizableText color={'#868686'} size={'$2'} fontSize={'$3'}>
              {dayjs(item?.createAt).format('YYYY-MM-DD HH:mm:ss')}
            </SizableText>
          </XStack>
          {item?.status === 0 && (
            <Button
              style={{
                backgroundColor: item?.status === 1 ? '#afafaf' : PrimaryColor,
                height: 30,
                borderRadius: 15,
                paddingLeft: 20,
                paddingRight: 20,
              }}
              color="$color1"
              disabled={item?.status === 1}
              onPress={onPress}
            >
              {item?.status === 1 ? t('my.message.unread') : t('my.message.read')}
            </Button>
          )}
        </XStack>
      </YStack>
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
  const [{unread}] = useRematchModel('app');
  const toast = useToastController();
  const dispatch = useDispatch<Dispatch>();

  const fetchData = async (_page = 1) => {
    setLoading(true);
    const res = await makeRequest(notificationPageInSiteMessage({page: _page, pageSize: 10}));
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
    if (!loadingMore && data.length !== total) {
      setLoadingMore(true);
      await fetchData(page + 1);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchData();
    _getUnread();
  }, []);

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

  // 全部已讀
  const onAllRead = async () => {
    const res = await makeRequest(notificationUpdateAllInSiteMessageRead());
    // if (res?.id) {
    toast.show(t('tips.operation.success'));
    fetchData();
    _getUnread();
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
      <AppHeader title={t('screen.message.title')} headerLeft={HeaderLeft} />
      <XStack w="100%" jc="space-between" pr="$4" pl="$4" pt="$3" pb="$3" flexShrink={0}>
        <SizableText col={'$color'} fontSize={'$5'}>
          {t('my.message.title', {number: unread || 0})}
        </SizableText>
        {unread !== 0 && (
          <Button color={'#868686'} fontSize={'$3'} unstyled chromeless onPress={onAllRead}>
            {t('operate.button.allRead')}
          </Button>
        )}
      </XStack>
      <FlatList
        data={data}
        refreshing={loading}
        keyExtractor={(item, index) => item?.id}
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
          backgroundColor: scheme === 'dark' ? '#151515' : '#fff',
        }}
        contentContainerStyle={{flexGrow: 1, backgroundColor: scheme === 'dark' ? '#151515' : '#fff'}}
        onEndReached={() => {
          fetchMoreData();
        }}
        onEndReachedThreshold={50}
        onRefresh={() => {
          fetchData();
          _getUnread();
        }}
        ListFooterComponent={_renderFooter}
        ListEmptyComponent={<ListEmpty loading={loading} />}
        renderItem={({item, index}) => (
          <XStack w="100%" jc={'center'} key={item.id}>
            <Item
              onSuccess={() => {
                setData(
                  data.map((value: any) => {
                    if (value.id === item.id) {
                      return {
                        ...value,
                        status: 1,
                      };
                    } else {
                      return value;
                    }
                  }),
                );
                fetchData();
                _getUnread();
              }}
              isBorderBottom={index === data.length - 1}
              item={item}
              itemKey={item.id}
            />
          </XStack>
        )}
      />
    </PermissionPage>
  );
};
export default CheckInScreen;
