/*
 * @Date: 2023-12-08 16:25:15
 * @LastEditors: yosan
 * @LastEditTime: 2024-02-29 17:04:35
 * @FilePath: /snapx-nfc-app/packages/app/pages/home/components/HomeBanner/index.tsx
 */
import {AppImage, Button, ExternalLink, ScrollView, SizableText, Text, XStack, YStack} from '@my/ui';
import {Airplay, AlignJustify} from '@tamagui/lucide-icons';
import {ExternalLinkData} from 'app/config';
import {useRematchModel} from 'app/store/model';
import {useTranslation} from 'react-i18next';
import {Platform, useColorScheme} from 'react-native';
import {Link} from 'solito/link';
import {useRouter} from 'solito/router';
import NFCButton from '../NFCButton';

export type HomeBannerProps = {};
// 首页 餐厅详情
const HomeBanner: React.FC<any> = (props: HomeBannerProps) => {
  const {t, i18n} = useTranslation();
  const scheme = useColorScheme();
  const {push} = useRouter();
  const [{isLogin}] = useRematchModel('user');

  return (
    <ScrollView horizontal={true}>
      {Platform.OS === 'ios' && isLogin && <NFCButton />}
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
            if (Platform.OS !== 'web') {
              const openBrowserAsync = require('expo-web-browser').openBrowserAsync;
              // Prevent the default behavior of linking to the default browser on native.
              e.preventDefault();
              // Open the link in an in-app browser.
              openBrowserAsync(ExternalLinkData.webPageRestaurant);
            } else {
              window.open(ExternalLinkData.webPageRestaurant, '_blank');
            }
          }}
        >
          <YStack flex={1} pl="$2" pr={'$2'} maxWidth={220}>
            <XStack>
              <SizableText size="$3" color={'$color'} fow={'600'}>
                {t('home.banner.2.title')}
              </SizableText>
            </XStack>
            <XStack>
              <SizableText size="$2" color={'$color'} w={'100%'}>
                {t('home.banner.2.content')}
              </SizableText>
            </XStack>
          </YStack>

          <XStack w={77} h={77}>
            <AppImage
              web={{
                alt: '',
                src: require('app/assets/images/banner_2.png'),
                width: 77,
                height: 77,
              }}
              type="local"
              native={{
                source: {
                  uri: require('app/assets/images/banner_2.png'),
                  height: 77,
                  width: 77,
                },
              }}
            />
          </XStack>
        </Button>
      </XStack>

      {isLogin && (
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
              push('/invite');
            }}
          >
            <YStack flex={1} pl="$2" pr={'$2'} maxWidth={220}>
              <XStack>
                <SizableText size="$3" color={'$color'} fow={'600'}>
                  {t('home.banner.3.title')}
                </SizableText>
              </XStack>
              <XStack>
                <SizableText size="$2" color={'$color'} w={'100%'}>
                  {t('home.banner.3.content')}
                </SizableText>
              </XStack>
            </YStack>
            <XStack w={77} h={77}>
              <AppImage
                web={{
                  alt: '',
                  src: require('app/assets/images/banner_3.png'),
                  width: 77,
                  height: 77,
                }}
                type="local"
                native={{
                  source: {
                    uri: require('app/assets/images/banner_3.png'),
                    height: 77,
                    width: 77,
                  },
                }}
              />
            </XStack>
          </Button>
        </XStack>
      )}
      {Platform.OS === 'web' && (
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
              if (Platform.OS !== 'web') {
                const openBrowserAsync = require('expo-web-browser').openBrowserAsync;
                // Prevent the default behavior of linking to the default browser on native.
                e.preventDefault();
                // Open the link in an in-app browser.
                openBrowserAsync(ExternalLinkData.appDownload);
              } else {
                window.open(ExternalLinkData.appDownload, '_blank');
              }
            }}
          >
            <YStack flex={1} pl="$2" pr={'$2'} maxWidth={220}>
              <XStack>
                <SizableText size="$3" color={'$color'} fow={'600'}>
                  {t('home.banner.4.title')}
                </SizableText>
              </XStack>
              <XStack>
                <SizableText size="$2" color={'$color'} w={'100%'}>
                  {t('home.banner.4.content')}
                </SizableText>
              </XStack>
            </YStack>

            <XStack w={77} h={77}>
              <AppImage
                web={{
                  alt: '',
                  src: require('app/assets/images/banner_4.png'),
                  width: 77,
                  height: 77,
                }}
                type="local"
                native={{
                  source: {
                    uri: require('app/assets/images/banner_4.png'),
                    height: 77,
                    width: 77,
                  },
                }}
              />
            </XStack>
          </Button>
        </XStack>
      )}

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
            if (Platform.OS !== 'web') {
              const openBrowserAsync = require('expo-web-browser').openBrowserAsync;
              // Prevent the default behavior of linking to the default browser on native.
              e.preventDefault();
              // Open the link in an in-app browser.
              openBrowserAsync(ExternalLinkData.webPageMarketplace);
            } else {
              window.open(ExternalLinkData.webPageMarketplace, '_blank');
            }
          }}
        >
          <YStack flex={1} pl="$2" pr={'$2'} maxWidth={220}>
            <XStack>
              <SizableText size="$3" color={'$color'} fow={'600'}>
                {t('home.banner.5.title')}
              </SizableText>
            </XStack>
            <XStack>
              <SizableText size="$2" color={'$color'} w={'100%'}>
                {t('home.banner.5.content')}
              </SizableText>
            </XStack>
          </YStack>

          <XStack w={77} h={77}>
            <AppImage
              web={{
                alt: '',
                src: require('app/assets/images/banner_5.png'),
                width: 77,
                height: 77,
              }}
              type="local"
              native={{
                source: {
                  uri: require('app/assets/images/banner_5.png'),
                  height: 77,
                  width: 77,
                },
              }}
            />
          </XStack>
        </Button>
      </XStack>

      {/* <YStack jc="center" ai="center" p="$4" space>
        {Platform.OS === 'ios' && <NFCButton />}
      </YStack> */}
    </ScrollView>
  );
};

export default HomeBanner;
