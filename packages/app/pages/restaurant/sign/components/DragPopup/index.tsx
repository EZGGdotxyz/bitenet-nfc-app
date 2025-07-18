/*
 * @Date: 2024-01-12 22:30:09
 * @LastEditors: yosan
 * @LastEditTime: 2024-03-10 22:29:54
 * @FilePath: /snapx-nfc-app/packages/app/pages/restaurant/sign/components/DragPopup/index.tsx
 */
import {AppImage, SizableText, XStack, YStack} from '@my/ui';
import AppModal from 'app/Components/AppModal';
import useRequest from 'app/hooks/useRequest';
import {useRematchModel} from 'app/store/model';
import React, {useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Animated, View, Text, StyleSheet, useColorScheme} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import {Link} from 'solito/link';

export type DragPopupProps = {
  modalVisible: any;
  setModalVisible: (values) => void;
  onLottery: () => void;
};
// 首页 餐厅详情
const DragPopup: React.FC<any> = ({modalVisible, setModalVisible, onLottery}: DragPopupProps) => {
  const {t} = useTranslation();
  const [app] = useRematchModel('app');
  const {makeRequest} = useRequest();
  const scheme = useColorScheme();

  const translateX = useRef(new Animated.Value(0)).current;
  const dragWidth = app.appWidth - 100;

  const onGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
        },
      },
    ],
    {useNativeDriver: true},
  );

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      if (event.nativeEvent.translationX >= dragWidth - 34) {
        console.log('🚀 ~ onHandlerStateChange ~ event.nativeEvent.translationX:', event.nativeEvent.translationX);
        onLottery();
      } else {
        Animated.timing(translateX, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    }
  };

  const clampedTranslateX = Animated.diffClamp(translateX, 0, dragWidth - 34);

  return (
    <AppModal zIndex={11} setModalVisible={setModalVisible} modalVisible={modalVisible}>
      <YStack pos={'absolute'} p={12} b={0} l={0} w={'100%'}>
        <YStack w="100%" p={12} ai={'center'} jc={'center'} borderRadius={50} bc="$background">
          <XStack mb="$4" mt="$4" jc={'center'} ai={'center'} w="100%">
            <SizableText col={'$color'} size={'$5'}>
              {t('check_in.luckyDraw.title.main2')}
            </SizableText>
          </XStack>
          <XStack w={116} h={116}>
            <AppImage
              web={{
                alt: '',
                src: require('app/assets/images/drag.jpg'),
                width: 116,
                height: 116,
              }}
              type="local"
              native={{
                source: {
                  uri: require('app/assets/images/drag.jpg'),
                  height: 116,
                  width: 116,
                },
              }}
            />
          </XStack>
          <XStack
            width={'100%'}
            top={0}
            left={0}
            padding={18}
            height={80}
            ai={'center'}
            jc={'space-between'}
            flexShrink={0}
          >
            <XStack w={'100%'} p={8} h={50} br={25} bc={'#F26F21'} jc={'center'} ai={'center'}>
              <XStack
                overflow="hidden"
                w={'100%'}
                pos={'relative'}
                h={34}
                br={17}
                bc={'#F26F21'}
                jc={'center'}
                ai={'center'}
              >
                <PanGestureHandler
                  onGestureEvent={onGestureEvent}
                  onHandlerStateChange={onHandlerStateChange}
                  maxPointers={1}
                >
                  <Animated.View
                    style={{
                      width: dragWidth,
                      left: -dragWidth + 34,
                      transform: [{translateX: clampedTranslateX}],
                      position: 'absolute',
                      top: 0,
                      // width: 34,
                      height: 34,
                      borderRadius: 25,
                      backgroundColor: scheme === 'dark' ? '#151515' : '#fff',
                    }}
                  ></Animated.View>
                </PanGestureHandler>
                <SizableText col={'$color1'} fontSize={'$4'}>
                  {t('operate.button.drag')}
                </SizableText>
              </XStack>
            </XStack>
          </XStack>
        </YStack>
      </YStack>
    </AppModal>
  );
};
export default DragPopup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
