// @ts-ignore
/* eslint-disable */
import request from 'app/utils/request';

/** 根据Id获取餐厅打卡活动详情及其规则 GET /clock-in/get/${param0} */
export async function clockInRouterGetClockInByBrandId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.clockInRouterGetClockInByBrandIdParams,
  options?: { [key: string]: any },
) {
  const { brandId: param0, ...queryParams } = params;
  return request<any>(`/clock-in/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 根据Id获取餐厅打卡活动详情及其规则 GET /clock-in/get/${param0} */
export async function clockInRouterGetClockInByBrandId2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.clockInRouterGetClockInByBrandIdParams,
  options?: { [key: string]: any },
) {
  const { brandId: param0, ...queryParams } = params;
  return request<any>(`/clock-in/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
