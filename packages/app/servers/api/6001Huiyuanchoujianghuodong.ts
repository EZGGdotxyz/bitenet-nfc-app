// @ts-ignore
/* eslint-disable */
import request from 'app/utils/request';

/** 获取餐厅抽奖活动详情及规则 GET /lucky-draw/get/${param0} */
export async function luckyDrawRouterGetRestaurantLuckyDrawByRestaurantId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.luckyDrawRouterGetRestaurantLuckyDrawByRestaurantIdParams,
  options?: { [key: string]: any },
) {
  const { restaurantId: param0, ...queryParams } = params;
  return request<any>(`/lucky-draw/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取餐厅抽奖活动详情及规则 GET /lucky-draw/get/${param0} */
export async function luckyDrawRouterGetRestaurantLuckyDrawByRestaurantId2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.luckyDrawRouterGetRestaurantLuckyDrawByRestaurantIdParams,
  options?: { [key: string]: any },
) {
  const { restaurantId: param0, ...queryParams } = params;
  return request<any>(`/lucky-draw/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
