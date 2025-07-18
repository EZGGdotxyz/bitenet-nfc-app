// @ts-ignore
/* eslint-disable */
import request from 'app/utils/request';

/** 根据国家地区代码获取电话地区代码 GET /infra/phone-area-code/find-phone-area-code */
export async function phoneAreaCodeFindPhoneAreaCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.phoneAreaCodeFindPhoneAreaCodeParams,
  options?: { [key: string]: any },
) {
  return request<{
    id: number;
    createBy: number;
    updateBy: number;
    createAt: string;
    updateAt: string;
    deleteAt: number;
    englishName: string;
    chineseName: string;
    countryCode: string;
    phoneCode: string;
    emoji: string;
    mix: string;
  }>('/infra/phone-area-code/find-phone-area-code', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据国家地区代码获取电话地区代码 GET /infra/phone-area-code/find-phone-area-code */
export async function phoneAreaCodeFindPhoneAreaCode2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.phoneAreaCodeFindPhoneAreaCodeParams,
  options?: { [key: string]: any },
) {
  return request<{
    id: number;
    createBy: number;
    updateBy: number;
    createAt: string;
    updateAt: string;
    deleteAt: number;
    englishName: string;
    chineseName: string;
    countryCode: string;
    phoneCode: string;
    emoji: string;
    mix: string;
  }>('/infra/phone-area-code/find-phone-area-code', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页获取电话地区代码列表 GET /infra/phone-area-code/page-phone-area-code */
export async function phoneAreaCodePagePhoneAreaCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.phoneAreaCodePagePhoneAreaCodeParams,
  options?: { [key: string]: any },
) {
  return request<{
    page: number;
    pageSize: number;
    pageCount: number;
    totalCount: number;
    record: {
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      englishName?: string;
      chineseName?: string;
      countryCode?: string;
      phoneCode?: string;
      emoji?: string;
      mix?: string;
    }[];
  }>('/infra/phone-area-code/page-phone-area-code', {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // pageSize has a default value: 30
      pageSize: '30',

      ...params,
    },
    ...(options || {}),
  });
}

/** 分页获取电话地区代码列表 GET /infra/phone-area-code/page-phone-area-code */
export async function phoneAreaCodePagePhoneAreaCode2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.phoneAreaCodePagePhoneAreaCodeParams,
  options?: { [key: string]: any },
) {
  return request<{
    page: number;
    pageSize: number;
    pageCount: number;
    totalCount: number;
    record: {
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      englishName?: string;
      chineseName?: string;
      countryCode?: string;
      phoneCode?: string;
      emoji?: string;
      mix?: string;
    }[];
  }>('/infra/phone-area-code/page-phone-area-code', {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // pageSize has a default value: 30
      pageSize: '30',

      ...params,
    },
    ...(options || {}),
  });
}
