// @ts-ignore
/* eslint-disable */
import request from 'app/utils/request';

/** 获取餐厅品牌可兑换礼物分页 GET /gift/page */
export async function giftRouterPageGift(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.giftRouterPageGiftParams,
  options?: { [key: string]: any },
) {
  return request<{
    page: number;
    pageSize: number;
    pageCount: number;
    totalCount: number;
    record: {
      type?: 'LUCKY_DRAW' | 'SIGN_IN';
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      brandId?: number;
      name?: string;
      en_name?: string;
      price?: string;
      photo?: string;
      description?: string;
      en_description?: string;
      isExchange?: boolean;
      exchangeCost?: any;
    }[];
  }>('/gift/page', {
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

/** 获取餐厅品牌可兑换礼物分页 GET /gift/page */
export async function giftRouterPageGift2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.giftRouterPageGiftParams,
  options?: { [key: string]: any },
) {
  return request<{
    page: number;
    pageSize: number;
    pageCount: number;
    totalCount: number;
    record: {
      type?: 'LUCKY_DRAW' | 'SIGN_IN';
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      brandId?: number;
      name?: string;
      en_name?: string;
      price?: string;
      photo?: string;
      description?: string;
      en_description?: string;
      isExchange?: boolean;
      exchangeCost?: any;
    }[];
  }>('/gift/page', {
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
