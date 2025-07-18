/*
 * @Date: 2023-12-08 16:25:15
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-23 16:28:41
 * @FilePath: /snapx-nfc-app/packages/app/pages/restaurant/sign/components/AwardsPopup/index.tsx
 */
import {AppImage, Button, SizableText, Text, XStack, YStack} from '@my/ui';
import {Airplay, AlignJustify} from '@tamagui/lucide-icons';
import AppModal from 'app/Components/AppModal';
import {PrimaryColor} from 'app/config';
import {useTranslation} from 'react-i18next';
import {Link} from 'solito/link';

export type AwardsPopupProps = {
  modalVisible: any;
  awardsPopupClose: (values) => void;
  awardsData: any;
};
// 中奖提示弹窗
const AwardsPopup: React.FC<any> = ({modalVisible, awardsPopupClose, awardsData}: AwardsPopupProps) => {
  const {t, i18n} = useTranslation();

  const setModalVisible = () => {
    awardsPopupClose(awardsData);
  };

  return (
    <AppModal zIndex={12} setModalVisible={setModalVisible} modalVisible={modalVisible}>
      <YStack p="$4" w="100%" pos={'absolute'} ai={'center'} jc={'center'} b={0} l={0} bc='$background'>
        <XStack mb="$6">
          <SizableText width={'100%'} col={'$color'} size={'$5'}>
            {awardsData?.luckyDrawRuleLevel === 0
              ? t('restaurant.sign.LuckyDraw.gift.noWinning')
              : t('restaurant.sign.LuckyDraw.gift.winning')}
          </SizableText>
        </XStack>

        <YStack mb="$6" jc={'center'} ai={'center'} h="$10">
          <XStack mb="$3">
            <SizableText width={'100%'} col={'$color'} size={'$5'}>
              {i18n.language === 'zh_HK' ? awardsData?.luckyDrawRuleTitle : awardsData?.luckyDrawRuleEn_title}
            </SizableText>
          </XStack>
          {awardsData?.luckyDrawGiftName && (
            <XStack mb="$3" jc={'center'} ai={'center'}>
              <XStack mr="$3" borderRadius={12} overflow="hidden">
                <AppImage
                  web={{
                    alt: '',
                    src: awardsData?.luckyDrawGiftPhoto,
                    width: 72,
                    height: 72,
                  }}
                  native={{
                    source: {
                      height: 72,
                      uri: awardsData?.luckyDrawGiftPhoto,
                      width: 72,
                    },
                  }}
                />
              </XStack>
              <XStack>
                <SizableText width={200} col={'$color'} size={'$3'}>
                  {`${i18n.language === 'zh_HK' ? awardsData?.luckyDrawGiftName : awardsData?.luckyDrawGiftEN_name} x ${
                    awardsData?.luckyDrawRuleQuantity || 1
                  }`}
                </SizableText>
              </XStack>
            </XStack>
          )}
        </YStack>

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

export default AwardsPopup;
