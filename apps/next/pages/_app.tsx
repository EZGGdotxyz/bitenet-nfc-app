/*
 * @Date: 2023-12-26 14:21:05
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-20 13:03:39
 * @FilePath: /snapx-nfc-app/apps/next/pages/_app.tsx
 */
import '@tamagui/core/reset.css';
import '@tamagui/font-inter/css/400.css';
import '../style/global.css';
import '@tamagui/font-inter/css/700.css';
import 'raf/polyfill';

import {NextThemeProvider, useRootTheme} from '@tamagui/next-theme';
import i18n from 'app/locales/index';
import {Provider} from 'app/provider';
import Head from 'next/head';
import React, {useEffect} from 'react';
import type {SolitoAppProps} from 'solito';
i18n.language;
if (process.env.NODE_ENV === 'production') {
  require('../public/tamagui.css');
}

function MyApp({Component, pageProps}: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Bitenet</title>
        <meta name="description" content="Bitenet" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

function ThemeProvider({children}: {children: React.ReactNode}) {
  const [theme, setTheme] = useRootTheme();

  return (
    <NextThemeProvider
      onChangeTheme={(next) => {
        setTheme(next as any);
      }}
    >
      <Provider disableRootThemeClass defaultTheme={theme}>
        {children}
      </Provider>
    </NextThemeProvider>
  );
}

export default MyApp;
