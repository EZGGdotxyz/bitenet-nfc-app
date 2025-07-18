/*
 * @Date: 2023-12-08 16:25:15
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-03 19:05:34
 * @FilePath: /snapx-nfc-app/packages/app/pages/home/components/MessagePopup/index.tsx
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
};

// ios 弹窗
const MessagePopup: React.FC<any> = ({modalVisible, setModalVisible}: AwardsPopupProps) => {
  const {t, i18n} = useTranslation();

  return (
    <AppModal zIndex={12} setModalVisible={setModalVisible} modalVisible={modalVisible}>
      <YStack
        // h={140}
        w="80%"
        borderRadius={'$4'}
        pos={'absolute'}
        ai={'center'}
        jc={'center'}
        b={'40%'}
        l={'10%'}
        bc="$background"
      >
        <XStack ai={'center'} p="$4">
          <SizableText col={'$color'} fow="600" fontSize={'$3'}>
            {t('home.token.tips')}
          </SizableText>
        </XStack>
      </YStack>
    </AppModal>
  );
};

export default MessagePopup;
