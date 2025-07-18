/*
 * @Date: 2023-12-08 16:25:15
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-25 16:14:22
 * @FilePath: /snapx-nfc-app/packages/app/pages/restaurant/detail/components/Benefits/index.tsx
 */
import {AppImage, SizableText, Text, XStack, YStack} from '@my/ui';
import {useTranslation} from 'react-i18next';
import useRequest from 'app/hooks/useRequest';
import {useEffect, useState} from 'react';
import {luckyDrawRouterGetRestaurantLuckyDrawByRestaurantId} from 'app/servers/api/6001Huiyuanchoujianghuodong';
import {clockInRouterGetClockInByBrandId} from 'app/servers/api/6007Huiyuandakahuodong';

export type BenefitsProps = {
  checkIcon: React.ReactNode;
  restaurantInfo: any;
};
// 首页 餐厅详情
const Benefits: React.FC<any> = ({checkIcon, restaurantInfo}: BenefitsProps) => {
  const {t} = useTranslation();
  const {makeRequest} = useRequest();

  const [luckyDrawData, setLuckyDrawData] = useState<any>({});
  const [frequency, setFrequency] = useState<any>('');
  const [cycleDaysLength, setCycleDaysLength] = useState<any>(0);
  const [isEnabled, setIsEnabled] = useState<any>(false);

  const _getLuckyDrawInfo = async () => {
    const res = await makeRequest(
      luckyDrawRouterGetRestaurantLuckyDrawByRestaurantId({
        restaurantId: restaurantInfo?.id,
      }),
    );
    if (res) setLuckyDrawData(res);
  };

  const _getSetSignData = async () => {
    const res = await makeRequest(
      clockInRouterGetClockInByBrandId({
        brandId: restaurantInfo?.brand?.id,
      }),
    );
    if (res?.isEnabled) {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
    if (res.isLoop && res.cycleDaysLength > 0) {
      setCycleDaysLength(res.cycleDaysLength);
    }
    if (res?.rules && res?.rules?.length > 0) {
      const _frequency: any = res?.rules.map((item) => {
        return item?.cycleDayNumber;
      });
      setFrequency(_frequency.join(', '));
    }
  };

  const getTh = () => {
    let number = cycleDaysLength % 10;
    switch (number) {
      case 1:
        if (cycleDaysLength === 11) {
          return 'th';
        }
        return 'st';
      case 2:
        if (cycleDaysLength === 12) {
          return 'th';
        }
        return 'nd';
      case 3:
        if (cycleDaysLength === 13) {
          return 'th';
        }
        return 'rd';
      default:
        return 'th';
    }
  };

  useEffect(() => {
    if (restaurantInfo?.id) {
      _getLuckyDrawInfo();
      _getSetSignData();
    }
  }, [restaurantInfo]);

  return (
    <YStack width={'100%'}>
      <SizableText size="$4" color={'$color'} fow={'600'} pt="$4" pb="$2" pr="$4" pl="$4">
        {t('restaurant.details.benefits.title')}
      </SizableText>
      <YStack pr="$4" pl="$4">
        {restaurantInfo?.minimumCharge != 0 && (
          <XStack>
            <XStack mr="$3">
              <AppImage
                web={{
                  alt: '',
                  src: require('app/assets/images/circle-check-filled.png'),
                  width: 24,
                  height: 24,
                }}
                type="local"
                native={{
                  source: {
                    uri: require('app/assets/images/circle-check-filled.png'),
                    width: 13.5,
                    height: 13.5,
                  },
                }}
              />
            </XStack>
            <YStack width={'80%'}>
              <SizableText col={'$color'} fontSize={'$3'}>
                {t('restaurant.details.benefits.1', {minimumCharge: restaurantInfo?.minimumCharge})}
              </SizableText>
            </YStack>
          </XStack>
        )}

        <XStack>
          <XStack mr="$3">
            <AppImage
              web={{
                alt: '',
                src: require('app/assets/images/circle-check-filled.png'),
                width: 24,
                height: 24,
              }}
              type="local"
              native={{
                source: {
                  uri: require('app/assets/images/circle-check-filled.png'),
                  width: 13.5,
                  height: 13.5,
                },
              }}
            />
          </XStack>
          <YStack width={'80%'}>
            <SizableText col={'$color'} fontSize={'$3'}>
              {t('restaurant.details.benefits.2')}
            </SizableText>
          </YStack>
        </XStack>
        {luckyDrawData?.id && luckyDrawData?.isEnabled && (
          <XStack>
            <XStack mr="$3">
              <AppImage
                web={{
                  alt: '',
                  src: require('app/assets/images/circle-check-filled.png'),
                  width: 24,
                  height: 24,
                }}
                type="local"
                native={{
                  source: {
                    uri: require('app/assets/images/circle-check-filled.png'),
                    width: 13.5,
                    height: 13.5,
                  },
                }}
              />
            </XStack>
            <YStack width={'80%'}>
              <SizableText col={'$color'} fontSize={'$3'}>
                {t('restaurant.details.benefits.3')}
              </SizableText>
            </YStack>
          </XStack>
        )}
        {isEnabled && (
          <XStack>
            <XStack mr="$3">
              <AppImage
                web={{
                  alt: '',
                  src: require('app/assets/images/circle-check-filled.png'),
                  width: 24,
                  height: 24,
                }}
                type="local"
                native={{
                  source: {
                    uri: require('app/assets/images/circle-check-filled.png'),
                    width: 13.5,
                    height: 13.5,
                  },
                }}
              />
            </XStack>
            <YStack width={'80%'}>
              <SizableText col={'$color'} fontSize={'$3'}>
                {t('restaurant.details.benefits.4', {frequency: frequency})}
                {t('restaurant.details.benefits.5', {number: cycleDaysLength, th: getTh()})}
              </SizableText>
            </YStack>
          </XStack>
        )}
      </YStack>
    </YStack>
  );
};

export default Benefits;
