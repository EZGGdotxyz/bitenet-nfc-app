/*
 * @Date: 2023-12-07 15:49:22
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-12 18:00:58
 * @FilePath: /snapx-nfc-app/packages/app/provider/index.tsx
 */
import {CustomToast, TamaguiProvider, TamaguiProviderProps, ToastProvider, config} from '@my/ui';
import AppPage from 'app/Components/AppPage';
import 'app/locales/index';
import {useColorScheme} from 'react-native';

import store from 'app/store/index';
import {Provider as ReduxProvider} from 'react-redux';
import {ToastViewport} from './ToastViewport';

export function Provider({children, ...rest}: Omit<TamaguiProviderProps, 'config'>) {
  const scheme = useColorScheme();

  return (
    <ReduxProvider store={store}>
      <TamaguiProvider config={config} disableInjectCSS defaultTheme={scheme === 'dark' ? 'dark' : 'light'} {...rest}>
        <ToastProvider
          swipeDirection="horizontal"
          duration={3000}
          native={
            [
              /* uncomment the next line to do native toasts on mobile. NOTE: it'll require you making a dev build and won't work with Expo Go */
              // 'mobile'
            ]
          }
        >
          <AppPage>{children}</AppPage>
          <CustomToast />
          <ToastViewport />
        </ToastProvider>
      </TamaguiProvider>
    </ReduxProvider>
  );
}
