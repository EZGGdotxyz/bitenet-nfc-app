/*
 * @Date: 2023-12-08 16:25:15
 * @LastEditors: yosan
 * @LastEditTime: 2024-02-19 17:12:50
 * @FilePath: /snapx-nfc-app/packages/app/pages/home/components/HomeHeader/index.web.tsx
 */
import {AppImage, Button, Text, XStack} from '@my/ui';
import {Airplay, AlignJustify} from '@tamagui/lucide-icons';
import {useRematchModel} from 'app/store/model';
import {Platform} from 'react-native';
import {Link} from 'solito/link';
import {useRouter} from 'solito/router';
import {useState} from 'react';

export type HomeHeaderProps = {isLogin: boolean};
// 首页 餐厅详情
const HomeHeader: React.FC<any> = ({isLogin}: HomeHeaderProps) => {
  const [{unread}] = useRematchModel('app');
  const {push} = useRouter();
  const [statusBarHeight, setStatusBarHeight] = useState(46);

  return (
    <XStack width={'100%'} pt={0} ai={'center'} backgroundColor={'$background'} flexShrink={0}>
      <XStack flex={1} h={80} ai={'center'} jc={'space-between'}>
        <XStack p={'$4'} h={80} ai={'center'}>
          <AppImage
            web={{
              alt: '',
              src: require('app/assets/images/homeLogo.png'),
              width: 114,
              height: 27
            }}
            type="local"
            native={{
              source: {
                uri: require('app/assets/images/homeLogo.png'),
                width: 114,
                height: 27
              },
            }}
          />
        </XStack>
        <Button
          unstyled
          flexDirection="row"
          ai={'center'}
          p={'$4'}
          h={80}
          pos={'relative'}
          onPress={() => {
            console.log('🚀 ~ isLogin:', isLogin);
            push('/my');
          }}
        >
          {unread > 0 && (
            <XStack pos="absolute" p="$4" t={0} r={0} h={'100%'}>
              <XStack mt={10} mr={-1} w={8} h={8} borderRadius={4} bc={'red'}></XStack>
            </XStack>
          )}
          <AlignJustify color={'$color'} />
        </Button>
      </XStack>
    </XStack>
  );
};

export default HomeHeader;
