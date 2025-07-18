/*
 * @Date: 2023-12-08 16:25:15
 * @LastEditors: yosan
 * @LastEditTime: 2024-02-03 22:15:42
 * @FilePath: /snapx-nfc-app/packages/app/pages/login/home/components/OtpInput/index.tsx
 */
import {Airplay, AlignJustify} from '@tamagui/lucide-icons';
import {useTranslation} from 'react-i18next';
import {Link} from 'solito/link';
import {SafeAreaView, Text, View, StyleSheet, useColorScheme} from 'react-native';
import React, {useState} from 'react';

import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from 'react-native-confirmation-code-field';
const CELL_COUNT = 6;

const styles = StyleSheet.create({
  root: {padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {
    marginTop: 20,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 40,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cellText: {
    color: '#000',
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#F26F21',
    borderBottomWidth: 2,
  },
});
export type OtpInputProps = {
  value: string;
  setValue: (value: string) => void;
};
// 首页 餐厅详情
const OtpInput: React.FC<any> = (props: OtpInputProps) => {
  const scheme = useColorScheme();

  const {value, setValue} = props;
  const {t, i18n} = useTranslation();
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...codeFieldProps}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}
          >
            <Text
              style={{
                color: scheme !== 'dark' ? '#151515' : '#fff',
                fontSize: 36,
                textAlign: 'center',
              }}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default OtpInput;
