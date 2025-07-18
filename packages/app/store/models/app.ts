/*
 * @Author: Yosan
 * @Date: 2022-11-12 12:19:36
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-18 20:38:51
 * @Description:
 */
import {createModel} from '@rematch/core';
import {AppStoreModel} from 'app/types/app';
import {RootModel} from './index';
import {getLanguage, setLanguage} from 'app/utils/auth';
import {globalConfigFindGlobalConfig} from 'app/servers/api/9000Quanjupeizhi';

export const app = createModel<RootModel>()({
  state: {
    appWidth: 0,
    appHeight: 0,
    appLanguage: 'zh_HK',
    isFirebaseApp: null,
    // 全局配置
    globalConfig: {},
    // snap 余额
    snapBalance: 0,
    // 未读消息数
    unread: 0,
  } as AppStoreModel,
  reducers: {
    updateState(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: (dispatch) => ({}),
});
