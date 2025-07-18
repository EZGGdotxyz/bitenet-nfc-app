/*
 * @Date: 2023-12-08 10:05:00
 * @LastEditors: yosan
 * @LastEditTime: 2023-12-08 12:00:14
 * @FilePath: /snapx-nfc-app/packages/app/i18n/index.ts
 */
import i18n from 'i18next';
import 'intl-pluralrules';
import { initReactI18next } from 'react-i18next';
import enUS from './locales/en_US';
import zhHK from './locales/zh_HK';

i18n.use(initReactI18next).init({
  lng: 'zh_HK',
  fallbackLng: 'zh_HK',
  resources: {
    zh_HK: {
      translation: zhHK,
    },
    en_US: {
      translation: enUS,
    },
  },
  debug: false,
});

export default i18n;
