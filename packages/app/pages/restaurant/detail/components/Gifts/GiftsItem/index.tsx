/*
 * @Date: 2023-12-08 16:25:15
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-27 17:14:36
 * @FilePath: /snapx-nfc-app/packages/app/pages/restaurant/detail/components/Gifts/GiftsItem/index.tsx
 */
import {AppImage, Button, SizableText, Text, XStack, YStack} from '@my/ui';
import {Airplay, AlignJustify} from '@tamagui/lucide-icons';
import AppButton from 'app/Components/AppButton';
import {useTranslation} from 'react-i18next';
import {Link} from 'solito/link';
import {PrimaryColor} from 'app/config';
import {memberGiftExchangeRouterMemberCommitGiftExchange} from 'app/servers/api/6004Cantinghuiyuanliwuduihuanjijilu';
import useRequest from 'app/hooks/useRequest';

export type GiftsItemProps = {
  activeTab: string;
  item: any;
  isBorderBottom: boolean;
  onExchange?: (values) => void;
  onWrite?: (values) => void;
  itemKey: any;
};
// 首页 餐厅详情
const GiftsItem: React.FC<any> = ({activeTab, item, isBorderBottom, itemKey, onExchange, onWrite}: GiftsItemProps) => {
  const {t, i18n} = useTranslation();
  const {makeRequest} = useRequest();

  const onPress = async () => {
    if (activeTab === 'snap') {
      // const res = await makeRequest(
      //   memberGiftExchangeRouterMemberCommitGiftExchange({
      //     giftId: Number(item?.id),
      //     restaurantId: Number(restaurantId),
      //   }),
      // );
      onExchange && onExchange(item);
    } else if (activeTab === 'perks') {
      onWrite &&
        onWrite({
          restaurantId: item?.restaurant?.id,
          recordType: 'clockIn',
          recordId: item?.giftInfo?.id,
          name: item?.giftInfo?.exchangeGiftName,
          en_name: item?.giftInfo?.exchangeGiftEn_name,
          description: item?.giftInfo?.exchangeGiftDescription,
          en_description: item?.giftInfo?.exchangeGiftEn_description,
          photo: item?.giftInfo?.exchangeGiftPhoto,
          quantity: item?.giftInfo?.quantity,
        });
    } else if (activeTab === 'luckyDraw') {
      onWrite &&
        onWrite({
          restaurantId: item?.restaurant?.id,
          recordType: 'luckyDraw',
          recordId: item?.memberGiftExchangeId,
          name: item?.luckyDrawGiftName,
          en_name: item?.luckyDrawGiftEN_name,
          description: item?.luckyDrawGiftDescription,
          en_description: item?.luckyDrawGiftEn_description,
          photo: item?.luckyDrawGiftPhoto,
          quantity: item?.luckyDrawRuleQuantity,
        });
    }
  };

  const perksName = () => {
    let name = '';
    if (item?.giftList && item?.giftList.length > 0) {
      name = i18n.language === 'zh_HK' ? item?.giftList[0].exchangeGiftName : item?.giftList[0]?.exchangeGiftEn_name;
    }
    return name;
  };

  return (
    <XStack
      pt="$3"
      pb="$3"
      width={'100%'}
      ai={'center'}
      jc={'space-between'}
      key={itemKey}
      borderBottomWidth={1}
      borderColor={!isBorderBottom ? '#e1e1e1' : '#ffffff'}
    >
      <XStack ai={'center'} width={'68%'}>
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
                width: 24,
                height: 24,
              },
            }}
          />
        </XStack>
        <YStack width={'80%'}>
          <SizableText col={'$color11'} fontSize={'$2'}>
            {/* {t('restaurant.details.gifts.perks.ready')} */}
            {activeTab === 'perks' && t('restaurant.details.write.title')}
            {activeTab === 'luckyDraw' && t('restaurant.details.write.title')}
            {activeTab === 'snap' && t('restaurant.details.ready.title')}
          </SizableText>
          <SizableText
            width={'100%'}
            col={'$color'}
            fontSize={'$3'}
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
          >
            {activeTab === 'perks' && perksName()}
            {activeTab === 'luckyDraw' && i18n.language === 'zh_HK'
              ? item?.luckyDrawGiftName
              : item?.luckyDrawGiftEN_name}
            {activeTab === 'snap' && i18n.language === 'zh_HK' ? item?.name : item?.en_name}
          </SizableText>
        </YStack>
      </XStack>
      {activeTab !== 'snap' ? (
        <Button
          style={{
            backgroundColor: item?.isSettlement ? '#afafaf' : PrimaryColor,
            height: 30,
            borderRadius: 15,
            paddingLeft: 20,
            paddingRight: 20,
          }}
          disabled={item?.isSettlement}
          onPress={onPress}
          color="$color1"
        >
          {item?.isSettlement ? t('operate.button.onWrite') : t('operate.button.write')}
        </Button>
      ) : (
        <Button
          style={{
            backgroundColor: PrimaryColor,
            height: 30,
            borderRadius: 15,
            paddingLeft: 20,
            paddingRight: 20,
          }}
          onPress={onPress}
          color="$color1"
        >
          {t('operate.button.exchange')}
        </Button>
      )}
    </XStack>
  );
};

export default GiftsItem;
