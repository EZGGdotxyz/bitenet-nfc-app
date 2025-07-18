/*
 * @Date: 2023-12-08 16:25:15
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-27 10:18:33
 * @FilePath: /snapx-nfc-app/packages/app/pages/restaurant/detail/components/PastryPopup/index.tsx
 */
import {AppImage, Button, SizableText, Text, XStack, YStack, useToastController} from '@my/ui';
import {Airplay, AlignJustify} from '@tamagui/lucide-icons';
import AppModal from 'app/Components/AppModal';
import {PrimaryColor, SubColor} from 'app/config';
import {useTranslation} from 'react-i18next';
import {Link} from 'solito/link';
import {memberGiftExchangeRouterMemberCommitGiftExchange} from 'app/servers/api/6004Cantinghuiyuanliwuduihuanjijilu';
import useRequest from 'app/hooks/useRequest';
import {useState} from 'react';
import {ActivityIndicator} from 'react-native';

export type PastryPopupProps = {
  modalVisible: any;
  setModalVisible: (values) => void;
  pastryData: any;
  restaurantId: number;
  onSuccess: () => void;
};
// 首页 餐厅详情
const PastryPopup: React.FC<any> = ({
  modalVisible,
  setModalVisible,
  pastryData,
  restaurantId,
  onSuccess,
}: PastryPopupProps) => {
  const {t, i18n} = useTranslation();

  const [isPastry, setIsPastry] = useState(false); // 是否兑换
  const {makeRequest} = useRequest();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToastController();

  const onPress = async () => {
    setIsLoading(true);

    const res = await makeRequest(
      memberGiftExchangeRouterMemberCommitGiftExchange({
        giftId: Number(pastryData?.id),
        restaurantId: Number(restaurantId),
      }),
    );
    setIsLoading(false);
    if (res) {
      toast.show(t('restaurant.details.ready.success'));
      setIsPastry(true);
      onSuccess();
    }
  };

  const onCancel = () => {
    setModalVisible(false);
    setTimeout(() => {
      setIsPastry(false);
    });
  };

  return (
    <AppModal setModalVisible={onCancel} modalVisible={modalVisible}>
      <YStack pos={'absolute'} p="$4" b={0} l={0}>
        <YStack p="$4" ai={'center'} jc={'center'} borderRadius={50} bc="$background">
          <XStack mb="$5" w="100%" jc={'center'} ai={'center'} pos="relative">
            <Button
              unstyled
              pos="absolute"
              flexDirection="row"
              l={0}
              t={0}
              onPress={() => {
                onCancel();
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
                {t('restaurant.details.gifts.perks.ready')}
              </SizableText>
            </YStack>
          </XStack>

          <XStack mb="$3" w="100%" jc={'center'} ai={'center'}>
            <XStack mr="$3" borderRadius={12} overflow="hidden">
              <AppImage
                web={{
                  alt: '',
                  src: pastryData?.photo,
                  width: 72,
                  height: 72,
                }}
                native={{
                  source: {
                    height: 72,
                    uri: pastryData?.photo,
                    width: 72,
                  },
                }}
              />
            </XStack>
            <XStack>
              <SizableText width={200} col={'$color'} size={'$3'}>
                {`${i18n.language === 'zh_HK' ? pastryData?.name : pastryData?.en_name}`}
              </SizableText>
            </XStack>
          </XStack>
          <XStack mb="$6">
            <SizableText width={'100%'} col={'$color11'} fontSize={'$2'}>
              {t('restaurant.details.ready.tips')}
            </SizableText>
          </XStack>
          {!isPastry && (
            <XStack mb="$3">
              <SizableText width={'100%'} col={'#F00'} fontSize={'$3'}>
                {t('restaurant.details.ready.warn')}
              </SizableText>
            </XStack>
          )}
          {!isPastry ? (
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
                <>
                  <AppImage
                    web={{
                      alt: '',
                      src: require('app/assets/images/token.png'),
                      width: 39,
                      height: 39,
                    }}
                    type="local"
                    native={{
                      source: {
                        uri: require('app/assets/images/token.png'),
                        width: 39,
                        height: 39,
                      },
                    }}
                  />
                  <SizableText col={'$color1'} fontSize={'$3'} ml="$2">
                    -{t('operate.button.redeem', {price: pastryData?.exchangeCost})}
                  </SizableText>
                </>
              )}
              {/* {`${pastryData?.exchangeCost} ${t('restaurant.details.gifts.snap.title')} ${t('operate.button.details')}`} */}
            </Button>
          ) : (
            <XStack mb="$3">
              <SizableText width={'100%'} col={'$color'} fow={'600'} fontSize={'$4'}>
                {t('restaurant.details.ready.exchange')}
              </SizableText>
            </XStack>
          )}
        </YStack>
      </YStack>
    </AppModal>
  );
};

export default PastryPopup;
