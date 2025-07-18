/*
 * @Date: 2024-01-10 22:19:40
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-11 23:49:35
 * @FilePath: /snapx-nfc-app/packages/app/utils/auth/local-storage.ts
 */
import AsyncStorage from '@react-native-async-storage/async-storage';

interface StoreParams {
  name: string;
  content?: string;
  type?: string;
}

/**
 * 判断是否为空
 */
function validateNull(val: any) {
  if (typeof val === 'boolean') {
    return false;
  }
  if (typeof val === 'number') {
    return false;
  }
  if (val instanceof Array) {
    if (val.length == 0) return true;
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true;
  } else {
    if (val == 'null' || val == null || val == 'undefined' || val == undefined || val == '') return true;
    return false;
  }
  return false;
}

/**
 * 设置key名
 */
const keyName = 'qxh' + '_';

/**
 * 存储localStorage
 */
export const setStore = async (params: StoreParams) => {
  let {name, content, type} = params;
  name = keyName + name;
  let obj = {
    dataType: typeof content,
    content: content,
    type: type,
    dateTime: new Date().getTime(),
  };
  try {
    await AsyncStorage.setItem(name, JSON.stringify(obj));
  } catch (e) {
    // 保存错误
  }
};

/**
 * 获取localStorage
 */
export const getStore = async (params: StoreParams) => {
  let {name} = params;
  name = keyName + name;
  try {
    const value: any = await AsyncStorage.getItem(name);
    if (value) {
      const obj: any = JSON.parse(value);
      let content;
      if (obj.dataType == 'string') {
        content = obj.content;
      } else if (obj.dataType == 'number') {
        content = Number(obj.content);
      } else if (obj.dataType == 'boolean') {
        content = eval(obj.content);
      } else if (obj.dataType == 'object') {
        content = obj.content;
      }
      return content;
    }
  } catch (e) {
    // 读取错误
  }
};

/**
 * 删除localStorage
 */
export const removeStore = async (params: StoreParams) => {
  let {name} = params;
  name = keyName + name;
  try {
    await AsyncStorage.removeItem(name);
  } catch (e) {
    // 删除错误
    console.error(e);
  }
};
