/*
 * @Date: 2024-01-09 15:33:14
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-25 16:22:20
 * @FilePath: /snapx-nfc-app/packages/app/Components/RestaurantItem/index.tsx
 */
import {XStack, YStack, Paragraph, AppImage, Button} from '@my/ui';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import dayjs from 'dayjs';
import {useRematchModel} from 'app/store/model';
import {useRouter} from 'solito/router';
import useResponse from 'app/hooks/useResponse';
import {nfcSignInGetNextClockInGiftInfo} from 'app/servers/api/4000NfCqiandao';
import useRequest from 'app/hooks/useRequest';

export const Text1 = ({children}) => (
  <Paragraph color={'#fff'} size="$2">
    {children}
  </Paragraph>
);
export const Text2 = ({children}) => (
  <Paragraph color={'#fff'} size="$4">
    {children}
  </Paragraph>
);

export type RestaurantItemProps = {
  restaurantInfo: any;
  membership: any;
  brandId: number;
  type?: string;
  nextLevel?: any;
  setSignInGetNext?: any;
  onTier?: (value) => void;
};

// 首页 餐厅详情
const RestaurantItem: React.FC<any> = (props: RestaurantItemProps) => {
  const {restaurantInfo, membership, brandId, type = 'detail', setSignInGetNext, onTier} = props;

  const {t, i18n} = useTranslation();
  const [{userInfo}] = useRematchModel('user');
  const {push} = useRouter();
  const [app] = useRematchModel('app');
  const {responseHandling} = useResponse();
  const size = responseHandling(290, 407);
  const {makeRequest} = useRequest();
  const [nextLevel, setNextLevel] = useState<any>({});

  const _getNextLevel = async (brandId) => {
    const res = await makeRequest(nfcSignInGetNextClockInGiftInfo({brandId: brandId}));
    if (res) {
      setNextLevel(res);
      if (setSignInGetNext) {
        setSignInGetNext(res);
      }
    }
  };

  useEffect(() => {
    if (brandId) {
      _getNextLevel(brandId);
    }
  }, [brandId]);

  return (
    <Button
      pos={'relative'}
      w={size.width}
      h={size.height}
      overflow="hidden"
      borderRadius={16}
      unstyled
      flexDirection="row"
      bc={'$background'}
      onPress={() => {
        if (type === 'list') {
          push('/restaurant/' + restaurantInfo?.id);
        }
      }}
    >
      <YStack w={'100%'} h={'100%'}>
        <AppImage
          web={{
            alt: '',
            src: restaurantInfo?.nft?.photo || require('app/assets/images/rectangle.png'),
            ...size,
          }}
          type={restaurantInfo?.nft?.photo ? '' : 'local'}
          native={{
            source: {
              ...size,
              uri: restaurantInfo?.nft?.photo || require('app/assets/images/rectangle.png'),
            },
          }}
        />
      </YStack>
      <YStack
        style={{
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.44) 0%, rgba(203.73, 203.73, 203.73, 0.17) 23%, rgba(255, 255, 255, 0) 40%, rgba(0, 0, 0, 0.44) 100%)',
          borderRadius: 16,
        }}
        pos="absolute"
        t={0}
        l={0}
        jc={'space-between'}
        w={'100%'}
        h={'100%'}
        p={16}
      >
        <YStack>
          <Text2>{(i18n.language === 'zh_HK' ? restaurantInfo?.name : restaurantInfo?.en_name) || ''}</Text2>
          {membership?.memberLevel?.levelCode === 'LV_GENERAL' && (
            <YStack
              pos="relative"
              mt={'$1'}
              w={99}
              h={35.2}
              onPress={() => {
                onTier && onTier('LV_GENERAL');
              }}
            >
              <Paragraph color={'#ffff'} size="$2">
                {t('restaurant.details.nfc.member')}
              </Paragraph>
            </YStack>
          )}
          {membership?.memberLevel?.levelCode === 'LV_RED' && (
            <YStack
              pos="relative"
              mt={'$1'}
              w={99}
              h={35.2}
              onPress={() => {
                onTier && onTier('LV_RED');
              }}
            >
              <AppImage
                web={{
                  alt: '',
                  src: require('app/assets/images/level_red.png'),
                  width: 99,
                  height: 35.2,
                }}
                type="local"
                native={{
                  source: {
                    uri: require('app/assets/images/level_red.png'),
                    width: 99,
                    height: 35.2,
                  },
                }}
              />
              <YStack pos="absolute" t={2} l={'$2'}>
                <Paragraph color={'#474747'} size="$1">
                  {membership?.memberLevel?.name
                    ? ` ${i18n.language === 'zh_HK' ? membership?.memberLevel?.name : membership?.memberLevel?.en_name}`
                    : ''}
                  {' ' + t('restaurant.details.nfc.member')}
                </Paragraph>
              </YStack>
            </YStack>
          )}
          {membership?.memberLevel?.levelCode === 'LV_GOLD' && (
            <YStack
              pos="relative"
              mt={'$1'}
              w={99}
              h={35.2}
              onPress={() => {
                onTier && onTier('LV_GOLD');
              }}
            >
              <AppImage
                web={{
                  alt: '',
                  src: require('app/assets/images/level_gold.png'),
                  width: 99,
                  height: 35.2,
                }}
                type="local"
                native={{
                  source: {
                    uri: require('app/assets/images/level_gold.png'),
                    width: 99,
                    height: 35.2,
                  },
                }}
              />
              <YStack pos="absolute" t={2} l={'$2'}>
                <Paragraph color={'#474747'} size="$1">
                  {membership?.memberLevel?.name
                    ? ` ${i18n.language === 'zh_HK' ? membership?.memberLevel?.name : membership?.memberLevel?.en_name}`
                    : ''}
                  {' ' + t('restaurant.details.nfc.member')}
                </Paragraph>
              </YStack>
            </YStack>
          )}
        </YStack>
        <XStack jc={'space-between'}>
          <YStack>
            <Text1>{userInfo?.nickname}</Text1>
            <Text1>
              {t('restaurant.details.nfc.minted')}:{' '}
              {membership?.firstTimeAccess ? dayjs(membership?.firstTimeAccess).format('DD.MM.YY') : ''}
            </Text1>
            <Text1>{restaurantInfo?.indexCode}</Text1>
            <Text1>
              {t('restaurant.details.nfc.perk')}: {nextLevel?.remaining || 0}
            </Text1>
          </YStack>
          <YStack jc={'flex-end'} ai={'flex-end'}>
            <Text2>{membership?.accessTimes || 0}</Text2>
            <Text1>{t('restaurant.details.nfc.visits')}</Text1>
          </YStack>
        </XStack>
      </YStack>
    </Button>
  );
};

export default RestaurantItem;
