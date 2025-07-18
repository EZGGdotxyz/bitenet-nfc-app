/*
 * @Date: 2023-12-08 16:25:15
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-03 22:52:29
 * @FilePath: /snapx-nfc-app/packages/app/Components/TierPopup/index.tsx
 */
import {AppImage, Button, Paragraph, ScrollView, SizableText, Text, XStack, YStack} from '@my/ui';
import {Airplay, AlignJustify} from '@tamagui/lucide-icons';
import AppModal from 'app/Components/AppModal';
import {PrimaryColor} from 'app/config';
import {useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'solito/link';
export type AwardsPopupProps = {
  modalVisible: any;
  setModalVisible: (values) => void;
  tier: string;
};

// ios 弹窗
const TierPopup: React.FC<any> = ({modalVisible, setModalVisible, tier}: AwardsPopupProps) => {
  const {t, i18n} = useTranslation();

  return (
    <AppModal zIndex={12} setModalVisible={setModalVisible} modalVisible={modalVisible}>
      <YStack
        // h={140}
        w="90%"
        borderRadius={'$4'}
        pos={'absolute'}
        ai={'center'}
        jc={'center'}
        b={'20%'}
        l={'5%'}
        bc="$background"
      >
        <YStack p="$4">
          <SizableText col={'$color'} fow="400" fontSize={'$3'} mb="$2">
            {t('restaurant.details.nfc.tier.title')}
          </SizableText>
          <SizableText col={'$color'} fow="600" fontSize={'$3'}>
            {t('restaurant.details.nfc.general.title')}
          </SizableText>
          <SizableText col={'$color'} fow="400" fontSize={'$3'} mb="$2">
            {t('restaurant.details.nfc.general.1')}
          </SizableText>
          <SizableText col={'$color'} w="100%" fow="600" fontSize={'$3'}>
            {t('restaurant.details.nfc.red.title')}
          </SizableText>
          <SizableText col={'$color'} w="100%" fow="400" fontSize={'$3'}>
            {t('restaurant.details.nfc.red.1')}
          </SizableText>
          <SizableText col={'$color'} w="100%" fow="400" fontSize={'$3'}>
            {t('restaurant.details.nfc.red.2')}
          </SizableText>
          <SizableText col={'$color'} w="100%" fow="400" fontSize={'$3'} mb="$2">
            {t('restaurant.details.nfc.red.3')}
          </SizableText>
          <SizableText col={'$color'} w="100%" fow="600" fontSize={'$3'}>
            {t('restaurant.details.nfc.gold.title')}
          </SizableText>
          <SizableText col={'$color'} w="100%" fow="400" fontSize={'$3'}>
            {t('restaurant.details.nfc.gold.1')}
          </SizableText>
          <SizableText col={'$color'} w="100%" fow="400" fontSize={'$3'}>
            {t('restaurant.details.nfc.gold.2')}
          </SizableText>
          <SizableText col={'$color'} w="100%" fow="400" fontSize={'$3'} mb="$2">
            {t('restaurant.details.nfc.gold.3')}
          </SizableText>
          <SizableText col={'$color'} w="100%" fow="400" fontSize={'$3'}>
            {t('restaurant.details.nfc.tier.tips')}
          </SizableText>
        </YStack>
      </YStack>
    </AppModal>
  );
};

export default TierPopup;
