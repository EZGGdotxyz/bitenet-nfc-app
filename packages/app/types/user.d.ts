/*
 * @Author: Yosan
 * @Date: 2022-11-22 12:44:13
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-11 21:57:09
 * @Description:
 */

export interface UserStoreModel {
  // 是否登录
  isLogin: boolean;
  // 用户信息
  userInfo: any;
  // 是否新用户
  isNewUser: boolean;
}
