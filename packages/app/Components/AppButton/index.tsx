/*
 * @Date: 2023-12-08 16:25:15
 * @LastEditors: yosan
 * @LastEditTime: 2024-02-19 21:25:46
 * @FilePath: /snapx-nfc-app/packages/app/Components/AppButton/index.tsx
 */
import {Button, Paragraph} from '@my/ui';
import {PrimaryColor, SubColor} from 'app/config';
import {useState} from 'react';
import {ActivityIndicator} from 'react-native';

interface AppButtonProps {
  children?: React.ReactNode;
  onPress: () => void;
  style?: any;
  isLoading?: boolean;
}

export default function AppButton(props: AppButtonProps) {
  const {onPress, style, isLoading = false} = props;

  return (
    <Button
      // unstyled
      style={{
        backgroundColor: isLoading ? SubColor : PrimaryColor,
        height: 48,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
        ...style,
      }}
      onPress={onPress}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color={'#fff'} />
      ) : (
        <Paragraph fontSize={'$3'} color={'$color1'}>
          {props?.children}
        </Paragraph>
      )}
    </Button>
  );
}
