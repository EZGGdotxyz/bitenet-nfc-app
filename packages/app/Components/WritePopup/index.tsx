/*
 * @Date: 2023-12-08 16:25:15
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-27 15:07:01
 * @FilePath: /snapx-nfc-app/packages/app/Components/WritePopup/index.tsx
 */
import {AppImage, Button, SizableText, Text, XStack, YStack, useToastController} from '@my/ui';
import {Airplay, AlignJustify} from '@tamagui/lucide-icons';
import AppModal from 'app/Components/AppModal';
import {PrimaryColor, SubColor} from 'app/config';
import {useTranslation} from 'react-i18next';
import {Link} from 'solito/link';
import {
  memberGiftExchangeRouterMemberCommitGiftExchange,
  memberGiftExchangeRouterUpdateGiftSettlementStatus,
} from 'app/servers/api/6004Cantinghuiyuanliwuduihuanjijilu';
import useRequest from 'app/hooks/useRequest';
import {useState} from 'react';
import {ActivityIndicator} from 'react-native';

export type WritePopupProps = {
  modalVisible: any;
  setModalVisible: (values) => void;
  writeData: any;
  onSuccess: () => void;
};
// 核销弹窗
const WritePopup: React.FC<any> = ({modalVisible, setModalVisible, writeData, onSuccess}: WritePopupProps) => {
  const {t, i18n} = useTranslation();

  const {makeRequest} = useRequest();
  const toast = useToastController();

  const [isLoading, setIsLoading] = useState(false);

  const onPress = async () => {
    setIsLoading(true);
    const res = await makeRequest(
      memberGiftExchangeRouterUpdateGiftSettlementStatus({
        recordId: Number(writeData?.recordId),
        recordType: writeData?.recordType,
        restaurantId: writeData?.restaurantId,
      }),
    );
    setIsLoading(false);
    if (res) {
      toast.show(t('restaurant.details.write.success'));
      setModalVisible(false);
      onSuccess();
    }
  };

  return (
    <AppModal setModalVisible={setModalVisible} modalVisible={modalVisible}>
      <YStack pos={'absolute'} p="$4" b={0} l={0}>
        <YStack p="$4" ai={'center'} jc={'center'} borderRadius={50} bc="$background">
          <XStack mb="$5" w="100%" jc={'center'} ai={'center'} pos="relative">
            <Button
              pos="absolute"
              l={0}
              t={0}
              unstyled
              flexDirection="row"
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <AppImage
                web={{
                  alt: '',
                  src: require('app/assets/images/arrow-left.png'),
                  width: 30,
                  height: 30,
                }}
                type="local"
                native={{
                  source: {
                    height: 30,
                    uri: require('app/assets/images/arrow-left.png'),
                    width: 30,
                  },
                }}
              />
            </Button>
            <YStack jc={'center'} ai={'center'}>
              <SizableText width={'100%'} col={'$color'} fontSize={'$4'} fow={'600'}>
                {t('restaurant.details.write.title')}
              </SizableText>
            </YStack>
          </XStack>

          <XStack mb="$3" w="100%" jc={'center'} ai={'center'}>
            <XStack mr="$3" borderRadius={12} overflow="hidden">
              <AppImage
                web={{
                  alt: '',
                  src: writeData?.photo,
                  width: 72,
                  height: 72,
                }}
                native={{
                  source: {
                    height: 72,
                    uri: writeData?.photo,
                    width: 72,
                  },
                }}
              />
            </XStack>
            <YStack>
              <SizableText width={200} col={'$color'} size={'$3'} numberOfLines={2}>
                {`${i18n.language === 'zh_HK' ? writeData?.name : writeData?.en_name}`}
              </SizableText>
              <SizableText col={'$color'} size={'$3'} numberOfLines={2}>
                {`x ${writeData?.quantity}`}
              </SizableText>
            </YStack>
          </XStack>
          {/* <XStack mb="$6">
            <SizableText width={'100%'} col={'$color11'} fontSize={'$2'}>
              {`${i18n.language === 'zh_HK' ? writeData?.description : writeData?.en_description}`}
            </SizableText>
          </XStack> */}
          <XStack mb="$6">
            <SizableText width={'100%'} col={'$color11'} fontSize={'$2'}>
              {t('restaurant.details.ready.tips')}
            </SizableText>
          </XStack>
          <XStack mb="$3">
            <SizableText width={'100%'} col={'#F00'} fontSize={'$3'}>
              {t('restaurant.details.write.warn')}
            </SizableText>
          </XStack>
          <Button
            style={{
              backgroundColor: isLoading ? SubColor : PrimaryColor,
              height: 50,
              borderRadius: 25,
              paddingLeft: 20,
              paddingRight: 20,
              width: '100%',
            }}
            color="$color1"
            mb="$3"
            ai="center"
            jc="center"
            onPress={onPress}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color={'#fff'} />
            ) : (
              <SizableText col={'$color1'} fontSize={'$3'}>
                {t('operate.button.write')}
              </SizableText>
            )}
          </Button>
        </YStack>
      </YStack>
    </AppModal>
  );
};

export default WritePopup;
