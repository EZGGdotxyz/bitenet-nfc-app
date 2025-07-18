/*
 * @Date: 2023-12-08 16:25:15
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-23 16:27:22
 * @FilePath: /snapx-nfc-app/packages/app/Components/GiftPopup/index.tsx
 */
import {AppImage, Button, SizableText, Text, XStack, YStack} from '@my/ui';
import {Airplay, AlignJustify} from '@tamagui/lucide-icons';
import AppModal from 'app/Components/AppModal';
import {PrimaryColor} from 'app/config';
import {useTranslation} from 'react-i18next';
import {Link} from 'solito/link';

export type GiftPopupProps = {
  modalVisible: any;
  giftPopupClose: (values) => void;
  giftData: any;
};
// 首页 餐厅详情
const GiftPopup: React.FC<any> = ({modalVisible, giftPopupClose, giftData}: GiftPopupProps) => {
  const {t, i18n} = useTranslation();

  const setModalVisible = () => {
    giftPopupClose(giftData);
  };

  return (
    <AppModal zIndex={12} setModalVisible={setModalVisible} modalVisible={modalVisible}>
      <YStack p="$4" pos={'absolute'} ai={'center'} jc={'center'} b={0} l={0} bc='$background'>
        <XStack mb="$3">
          <SizableText width={'100%'} col={'$color'} fontSize={'$5'}>
            {t('restaurant.sign.LuckyDraw.gift.winning')}
          </SizableText>
        </XStack>
        <XStack mb="$3" borderRadius={12} overflow="hidden">
          <AppImage
            web={{
              alt: '',
              src: giftData?.exchangeGiftPhoto,
              width: 120,
              height: 120,
            }}
            native={{
              source: {
                height: 120,
                uri: giftData?.exchangeGiftPhoto,
                width: 120,
              },
            }}
          />
        </XStack>
        <XStack mb="$3">
          <SizableText width={'100%'} col={'$color'} fontSize={'$4'}>
            {`${i18n.language === 'zh_HK' ? giftData?.exchangeGiftName : giftData?.exchangeGiftEn_name} x ${
              giftData?.number || 1
            }`}
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
          onPress={() => {
            setModalVisible();
          }}
        >
          {t('operate.button.continue')}
        </Button>
      </YStack>
    </AppModal>
  );
};

export default GiftPopup;
