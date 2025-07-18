/*
 * @Date: 2023-12-08 16:25:15
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-27 14:44:24
 * @FilePath: /snapx-nfc-app/packages/app/pages/restaurant/detail/components/Locations/index.tsx
 */
import {AppImage, Button, SizableText, Text, XStack, YStack} from '@my/ui';
import {useTranslation} from 'react-i18next';
import {DetailTitle} from '../..';
import {Platform} from 'react-native';
import * as Linking from 'expo-linking';

export type LocationsProps = {
  restaurantInfo: any;
  goIcon: React.ReactNode;
};
// 首页 餐厅详情
const Locations: React.FC<any> = ({restaurantInfo, goIcon}: LocationsProps) => {
  const {t, i18n} = useTranslation();
  const openSpecificLocation = async (lat, long) => {
    const url = `http://maps.apple.com/?ll=${lat},${long}&address=${
      i18n.language === 'zh_HK' ? restaurantInfo?.address : restaurantInfo?.en_address
    }`;

    const canOpen = await Linking.canOpenURL(url);
    if (canOpen) {
      Linking.openURL(url);
    } else {
      console.log("Can't open URL");
    }
  };
  const openGoogleMaps = () => {
    const latitude = restaurantInfo?.lat || 22.3194068;
    const longitude = restaurantInfo?.lng || 114.1692081;
    const label = restaurantInfo?.name;
    if (Platform.OS === 'android') {
      // Linking.openURL(`geo:${latitude},${longitude}?q=${label}`);
    } else if (Platform.OS === 'ios') {
      openSpecificLocation(latitude, longitude);
    } else {
      const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      window.open(url, '_blank');
    }
  };
  return (
    <YStack w={'100%'}>
      <DetailTitle>{t('restaurant.details.locations.title')}</DetailTitle>
      <Button
        flexDirection="row"
        unstyled
        pr="$4"
        pl="$4"
        jc={'space-between'}
        width={'100%'}
        onPress={openGoogleMaps}
        ai={'flex-end'}
      >
        <YStack flex={4}>
          <YStack>
            <SizableText
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              color={'$blue11'}
              fontSize={'$3'}
            >
              {i18n.language === 'zh_HK' ? restaurantInfo?.address : restaurantInfo?.en_address}
            </SizableText>
          </YStack>
        </YStack>
        <XStack flex={1} jc={'flex-end'}>
          <AppImage
            web={{
              alt: '',
              src: require('app/assets/images/go.png'),
              width: 13,
              height: 13,
            }}
            type="local"
            native={{
              source: {
                uri: require('app/assets/images/go.png'),
                width: 13,
                height: 13,
              },
            }}
          />
        </XStack>
      </Button>
    </YStack>
  );
};

export default Locations;
