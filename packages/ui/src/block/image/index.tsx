/*
 * @Date: 2023-12-18 16:09:28
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-12 15:47:49
 * @FilePath: /snapx-nfc-app/packages/ui/src/block/image/index.tsx
 */
import {forwardRef} from 'react';
import {View} from 'react-native';
import {Image as TamaguiImage} from 'tamagui';
import {Asset} from 'expo-asset';
import {AppImageProps} from './shared';

export const AppImage = forwardRef<View, AppImageProps>(function Image({native, type}, ref) {
  if (!native) {
    throw Error('You must pass native prop into Image component!');
  }

  const _native =
    type === 'local'
      ? {
          source: {
            height: native?.source?.height,
            width: native?.source?.width,
            uri: Asset.fromModule(native?.source.uri).uri,
          },
        }
      : native;
  return (
    <View ref={ref}>
      <TamaguiImage {..._native} />
    </View>
  );
});
