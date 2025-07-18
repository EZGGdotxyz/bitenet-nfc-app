/*
 * @Author: Yosan
 * @Date: 2022-11-12 12:53:29
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-20 20:47:50
 * @Description:
 */
import {getStore, removeStore, setStore} from './local-storage';
import {LANGUAGE, USER_TOKEN, INVITE_CODE, USER_INFO, DEVICE_TOKEN} from './constant';

export const getDeviceToken = async () => {
  return (
    getStore({
      name: DEVICE_TOKEN,
    }) || 'en'
  );
};

export const setDeviceToken = async (data: string) => {
  return setStore({
    name: DEVICE_TOKEN,
    content: data,
  });
};

export const getLanguage = async () => {
  return (
    getStore({
      name: LANGUAGE,
    }) || 'en'
  );
};

export const setLanguage = async (language: string) => {
  return setStore({
    name: LANGUAGE,
    content: language,
  });
};

// 获取用户token
export const getUserToken = async () => {
  return getStore({
    name: USER_TOKEN,
  });
};

// 设置用户token
export const setUserToken = async (token: string) => {
  // setCookie(USER_TOKEN, token);
  return setStore({
    name: USER_TOKEN,
    content: token,
  });
};

// 删除用户token
export const removeUserToken = async () => {
  return removeStore({
    name: USER_TOKEN,
  });
};

// 获取用户 注册邀请码
export const getInviteCode = async () => {
  return (
    getStore({
      name: INVITE_CODE,
    }) || ''
  );
};

// 设置用户 注册邀请码
export const setInviteCode = async (code: string) => {
  return setStore({
    name: INVITE_CODE,
    content: code,
  });
};

// 删除用户 注册邀请码
export const removeInviteCode = async () => {
  return removeStore({
    name: INVITE_CODE,
  });
};

// 获取用户 info
export const getUserInfo = async () => {
  return getStore({
    name: USER_INFO,
  });
};

// 设置用户Info
export const setUserInfo = async (info: any) => {
  // setCookie(USER_Info, Info);
  return setStore({
    name: USER_INFO,
    content: info,
  });
};

// 删除用户Info
export const removeUserInfo = async () => {
  return removeStore({
    name: USER_INFO,
  });
};
