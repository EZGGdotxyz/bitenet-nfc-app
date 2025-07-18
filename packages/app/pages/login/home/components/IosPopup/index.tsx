/*
 * @Date: 2023-12-08 16:25:15
 * @LastEditors: yosan
 * @LastEditTime: 2024-02-03 22:01:34
 * @FilePath: /snapx-nfc-app/packages/app/pages/login/home/components/IosPopup/index.tsx
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
const IosPopup: React.FC<any> = ({modalVisible, setModalVisible}: AwardsPopupProps) => {
  const {t, i18n} = useTranslation();

  return (
    <AppModal zIndex={12} setModalVisible={setModalVisible} modalVisible={modalVisible}>
      <YStack h={340} w="100%" pos={'absolute'} ai={'center'} jc={'center'} b={0} l={0} bc="$background">
        <XStack ai={'center'} mb="$3" mt="$3">
          <AppImage
            web={{
              alt: '',
              src: require('app/assets/images/token.png'),
              width: 71,
              height: 71,
            }}
            type="local"
            native={{
              source: {
                uri: require('app/assets/images/token.png'),
                width: 71,
                height: 71,
              },
            }}
          />
        </XStack>
        <XStack ai={'center'} mb="$3" mt="$3">
          <SizableText ml="$4" col={'$color'} fow="600" fontSize={'$6'}>
            {t('login.home.ios.tips', {
              number: 1000,
            })}
          </SizableText>
        </XStack>
        <XStack ai={'center'} mb="$3" mt="$3">
          <Button
            style={{
              backgroundColor: PrimaryColor,
              width: '100%',
              height: 50,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            color="$color1"
            onPress={() => {
              window.location.href = "https://itunes.apple.com/cn/app/6477260172";
            }}
          >
            <Paragraph col={'$color1'} fontSize={'$5'}>
              {t('login.home.ios.download')}
            </Paragraph>
          </Button>
        </XStack>
        <XStack ai={'center'} mb="$3">
          <Button
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            color="$color1"
            chromeless
            onPress={() => {
              // push('/login');
              setModalVisible(false);
            }}
          >
            <Paragraph col={'$color11'} fontSize={'$3'}>
              {t('login.home.ios.cancel')}
            </Paragraph>
          </Button>
        </XStack>
      </YStack>
    </AppModal>
  );
};

export default IosPopup;
