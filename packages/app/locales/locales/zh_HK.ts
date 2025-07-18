/*
 * @Author: Try
 * @Date: 2022-11-22 17:00:05
 * @LastEditTime: 2024-01-10 23:51:45
 * @LastEditors: yosan
 * @FilePath: /snapx-nfc-app/packages/app/i18n/locales/zh_HK.ts
 * @Description: 头部注释配置模板
 */
import tips from './zh_HK/tips';
import screen from './zh_HK/screen';
import operate from './zh_HK/operate';
import check_in from './zh_HK/pages/check_in';
import login from './zh_HK/pages/login';
import my from './zh_HK/pages/my';
import prize from './zh_HK/pages/prize';
import property from './zh_HK/pages/property';
import restaurant from './zh_HK/pages/restaurant';
import home from './zh_HK/pages/home';

const data = {
  ...tips,
  ...screen,
  ...check_in,
  ...login,
  ...my,
  ...prize,
  ...property,
  ...home,
  ...restaurant,
  ...operate,
};
export default data;
