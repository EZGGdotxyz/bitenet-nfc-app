/*
 * @Author: Yosan
 * @Date: 2022-11-12 12:19:36
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-19 23:13:27
 * @Description:
 */
import {createModel} from '@rematch/core';
import {UserStoreModel} from 'app/types/user';
import {RootModel} from './index';
import {removeUserInfo, removeUserToken} from 'app/utils/auth';

export const user = createModel<RootModel>()({
  state: {
    // 是否登录
    isLogin: false,
    // 用户信息
    userInfo: {},
    // // 是否新用户
    // isNewUser: false,
  } as UserStoreModel,
  reducers: {
    updateState(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: (dispatch) => ({
    async locallyLogout() {
      dispatch.user.updateState({
        isLogin: false,
        userInfo: {},
      });
      dispatch.app.updateState({
        snapBalance: 0,
        globalConfig: {},
        unread: 0,
      });
      removeUserInfo();
      removeUserToken();
    },
  }),
});
