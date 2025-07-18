/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-02-29 19:28:21
 * @FilePath: /snapx-nfc-app/packages/app/pages/home/components/NFCButton/index.tsx
 */
import {AppImage, Button, SizableText, Text, useToastController, XStack, YStack} from '@my/ui';
import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Platform, useColorScheme} from 'react-native';
import NfcManager, {Ndef, NfcTech} from 'react-native-nfc-manager';
import {useRouter} from 'solito/router';

const RTD_MAP = {
  TEXT: 'T', // [0x54]
  URI: 'U', // [0x55]
  SMART_POSTER: 'Sp', // [0x53, 0x70]
  ALTERNATIVE_CARRIER: 'ac', //[0x61, 0x63]
  HANDOVER_CARRIER: 'Hc', // [0x48, 0x63]
  HANDOVER_REQUEST: 'Hr', // [0x48, 0x72]
  HANDOVER_SELECT: 'Hs', //
};

export type NFCButtonProps = {};
// 首页 餐厅详情
const NFCButton: React.FC<any> = (props: NFCButtonProps) => {
  // 是否有nfc 功能
  const scheme = useColorScheme();

  const [hasNfc, setHasNFC] = useState<any>(null);
  const [url, setUrl] = useState<any>(null);
  const toast = useToastController();
  const {t, i18n} = useTranslation();
  const {push, replace, back, parseNextPath} = useRouter();

  useEffect(() => {
    const checkIsSupported = async () => {
      const deviceIsSupported = await NfcManager.isSupported();
      setHasNFC(deviceIsSupported);
      if (deviceIsSupported) {
        await NfcManager.start();
      }
    };
    checkIsSupported();
  }, []);

  // 读取卡片
  const readNdef = async () => {
    if (!readNdef) {
      toast.show(t('error.app.noNfc'));
    }

    let tag: any = null;
    setUrl('');
    try {
      await NfcManager.requestTechnology([NfcTech.Ndef]);
      tag = await NfcManager.getTag();
      tag.ndefStatus = await NfcManager.ndefHandler.getNdefStatus();
      // await NfcManager.setAlertMessageIOS('Success');
      const ndefData = Array.isArray(tag.ndefMessage) && tag.ndefMessage.length > 0 ? tag.ndefMessage[0] : null;
      const rtdName = rtdValueToName(ndefData.type);
      if (rtdName === 'URI') {
        let uri = Ndef.uri.decodePayload(ndefData.payload);
        if (uri.indexOf('https://app.bitenet.io/restaurant/sign/') !== -1) {
          uri = uri.replace('https://app.bitenet.io', '');
          push(uri);
        }
        setUrl(uri);
        toast.show(t(uri));
      }
    } catch (ex) {
      // for tag reading, we don't actually need to show any error
      console.log(JSON.stringify(ex));
      // toast.show(t('error.app.recognitionRailed'));
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  };
  function rtdValueToName(value) {
    value = value.reduce((acc, byte) => acc + String.fromCharCode(byte), '');
    for (let name in RTD_MAP) {
      if (value === RTD_MAP[name]) {
        return name;
      }
    }
    return null;
  }

  return (
    <>
      {hasNfc && (
        <XStack p="$4" space>
          <Button
            unstyled
            jc={'space-between'}
            flexDirection="row"
            alignItems="center"
            h={118}
            borderRadius={13}
            p="$4"
            borderColor={'#ccc'}
            borderWidth={1}
            backgroundColor={scheme === 'dark' ? '#151515' : '#fff'}
            onPress={(e) => {
              readNdef();
            }}
          >
            <YStack flex={1} pl="$2" pr={'$2'} maxWidth={220}>
              <XStack>
                <SizableText size="$3" color={'$color'} fow={'600'}>
                  {t('home.banner.1.title')}
                </SizableText>
              </XStack>
              <XStack>
                <SizableText size="$2" color={'$color'} w={'100%'}>
                  {t('home.banner.1.content')}
                </SizableText>
              </XStack>
            </YStack>

            <XStack w={77} h={77}>
              <AppImage
                web={{
                  alt: '',
                  src: require('app/assets/images/banner_1.png'),
                  width: 77,
                  height: 77,
                }}
                type="local"
                native={{
                  source: {
                    uri: require('app/assets/images/banner_1.png'),
                    height: 77,
                    width: 77,
                  },
                }}
              />
            </XStack>
          </Button>
        </XStack>
      )}
    </>
  );
};

export default NFCButton;
