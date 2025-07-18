/*
 * @Author: Try
 * @Date: 2022-11-22 17:00:05
 * @LastEditTime: 2024-01-10 23:52:21
 * @LastEditors: yosan
 * @FilePath: /snapx-nfc-app/packages/app/i18n/locales/en_US.ts
 * @Description: 头部注释配置模板
 */
import tips from './en_US/tips';
import screen from './en_US/screen';
import operate from './en_US/operate';
import check_in from './en_US/pages/check_in';
import login from './en_US/pages/login';
import my from './en_US/pages/my';
import prize from './en_US/pages/prize';
import property from './en_US/pages/property';
import restaurant from './en_US/pages/restaurant';
import home from './en_US/pages/home';

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
