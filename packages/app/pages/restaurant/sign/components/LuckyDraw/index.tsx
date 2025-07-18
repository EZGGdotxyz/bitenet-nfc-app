/*
 * @Date: 2023-12-08 16:25:15
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-14 22:47:07
 * @FilePath: /snapx-nfc-app/packages/app/pages/restaurant/sign/components/LuckyDraw/index.tsx
 */
import {AppImage, Button, SizableText, Text, XStack, YStack} from '@my/ui';
import {Airplay, AlignJustify} from '@tamagui/lucide-icons';
import AppModal from 'app/Components/AppModal';
import {PrimaryColor} from 'app/config';
import {useRematchModel} from 'app/store/model';
import {useTranslation} from 'react-i18next';
import {Link} from 'solito/link';

export type LuckyDrawProps = {
  setDragPopupVisible: (values) => void;
  setModalVisible: (values) => void;
  restaurantInfo: any;
};
// 首页 餐厅详情
const LuckyDraw: React.FC<any> = ({setModalVisible, setDragPopupVisible, restaurantInfo}: LuckyDrawProps) => {
  const {t, i18n} = useTranslation();
  const [app] = useRematchModel('app');

  const onPress = (e) => {
    setDragPopupVisible(true);
  };

  return (
    <YStack
      p="$4"
      pos={'absolute'}
      ai={'center'}
      jc={'space-between'}
      width={'100%'}
      h={'100%'}
      b={0}
      l={0}
      bc="$background"
    >
      <YStack width={'100%'} ai={'center'} pt="$12">
        <XStack mb="$3" h={116} w={116} bc="#D9D9D9">
          {restaurantInfo?.brand?.logo && (
            <AppImage
              web={{
                alt: '',
                src: restaurantInfo?.brand?.logo,
                width: 116,
                height: 116,
              }}
              // type="local"
              native={{
                source: {
                  uri: restaurantInfo?.brand?.logo,
                  height: 116,
                  width: 116,
                },
              }}
            />
          )}
        </XStack>
        <XStack mb="$3">
          <SizableText width={'100%'} fow={'600'} col={'#00'} fontSize={'$6'}>
            {t('restaurant.sign.LuckyDraw.title')}
          </SizableText>
        </XStack>
        <XStack mb="$3" ai={'center'} jc={'center'} bordercolor={'$color'} borderWidth={1} br={22} w={172} h={44}>
          <AppImage
            web={{
              alt: '',
              src: require('app/assets/images/token.png'),
              width: 28,
              height: 28,
            }}
            type="local"
            native={{
              source: {
                height: 28,
                uri: require('app/assets/images/token.png'),
                width: 28,
              },
            }}
          />
          <SizableText ml={'$2'} col={'$color'} fontSize={'$3'}>
            -{app?.globalConfig?.luckyDrawCost} {t('restaurant.details.gifts.snap.title')}
          </SizableText>
        </XStack>
      </YStack>
      <YStack width={'100%'} ai={'center'}>
        <XStack width={'100%'} mb="$3">
          <SizableText width={'100%'} col={'#F00'} fontSize={'$3'}>
            {t('restaurant.sign.LuckyDraw.tips', {
              name: i18n.language === 'zh_HK' ? restaurantInfo?.name : restaurantInfo?.en_name,
            })}
          </SizableText>
        </XStack>
        <Button
          style={{
            backgroundColor: PrimaryColor,
            height: 50,
            borderRadius: 25,
            paddingLeft: 20,
            paddingRight: 20,
            width: '100%',
          }}
          color="$color1"
          jc={'center'}
          ai={'center'}
          onPress={onPress}
        >
          {t('operate.button.draw')}
        </Button>
        <Button
          chromeless
          // style={{
          //   backgroundColor: PrimaryColor,
          //   height: 50,
          //   borderRadius: 25,
          //   paddingLeft: 20,
          //   paddingRight: 20,
          //   width: '100%',
          // }}
          // color="$color1"
          onPress={() => {
            setModalVisible(false);
          }}
        >
          {t('operate.button.next')}
        </Button>
      </YStack>
    </YStack>
  );
};

export default LuckyDraw;
