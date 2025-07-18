// @ts-ignore
/* eslint-disable */
import request from 'app/utils/request';

/** 根据Id获取品牌信息（含已打卡的餐厅信息） GET /brand/get/${param0} */
export async function brandRouterGetBrandById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.brandRouterGetBrandByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/brand/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 根据Id获取品牌信息（含已打卡的餐厅信息） GET /brand/get/${param0} */
export async function brandRouterGetBrandById2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.brandRouterGetBrandByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/brand/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取当前登录用户已打卡的品牌（含已打卡的餐厅信息）列表 GET /brand/list */
export async function brandRouterListBrand(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.brandRouterListBrandParams,
  options?: { [key: string]: any },
) {
  return request<any[]>('/brand/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取当前登录用户已打卡的品牌（含已打卡的餐厅信息）列表 GET /brand/list */
export async function brandRouterListBrand2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.brandRouterListBrandParams,
  options?: { [key: string]: any },
) {
  return request<any[]>('/brand/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取当前登录用户已打卡的品牌信息（含已打卡的餐厅信息）列表分页 GET /brand/page */
export async function brandRouterPageBrand(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.brandRouterPageBrandParams,
  options?: { [key: string]: any },
) {
  return request<{
    page: number;
    pageSize: number;
    pageCount: number;
    totalCount: number;
    record: any[];
  }>('/brand/page', {
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

/** 获取当前登录用户已打卡的品牌信息（含已打卡的餐厅信息）列表分页 GET /brand/page */
export async function brandRouterPageBrand2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.brandRouterPageBrandParams,
  options?: { [key: string]: any },
) {
  return request<{
    page: number;
    pageSize: number;
    pageCount: number;
    totalCount: number;
    record: any[];
  }>('/brand/page', {
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

/** 获取推荐品牌（含品牌下所有餐厅信息）列表分页 GET /brand/recommended/page */
export async function brandRouterPageRecommendedBrand(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.brandRouterPageRecommendedBrandParams,
  options?: { [key: string]: any },
) {
  return request<{
    page: number;
    pageSize: number;
    pageCount: number;
    totalCount: number;
    record: any[];
  }>('/brand/recommended/page', {
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

/** 获取推荐品牌（含品牌下所有餐厅信息）列表分页 GET /brand/recommended/page */
export async function brandRouterPageRecommendedBrand2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.brandRouterPageRecommendedBrandParams,
  options?: { [key: string]: any },
) {
  return request<{
    page: number;
    pageSize: number;
    pageCount: number;
    totalCount: number;
    record: any[];
  }>('/brand/recommended/page', {
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
