// @ts-ignore
/* eslint-disable */
import request from 'app/utils/request';

/** 获取指定站内信详情并更新为已读 GET /notification/find-in-site-message */
export async function notificationFindInSiteMessage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.notificationFindInSiteMessageParams,
  options?: { [key: string]: any },
) {
  return request<{
    id: number;
    createBy: number;
    updateBy: number;
    createAt: string;
    updateAt: string;
    deleteAt: number;
    source: string;
    restaurantId: number;
    restaurantUserId: number;
    subject: string;
    title: string;
    context: string;
    relateId: number;
    payload: string;
    toMemberId: number;
    status: number;
  }>('/notification/find-in-site-message', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取指定站内信详情并更新为已读 GET /notification/find-in-site-message */
export async function notificationFindInSiteMessage2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.notificationFindInSiteMessageParams,
  options?: { [key: string]: any },
) {
  return request<{
    id: number;
    createBy: number;
    updateBy: number;
    createAt: string;
    updateAt: string;
    deleteAt: number;
    source: string;
    restaurantId: number;
    restaurantUserId: number;
    subject: string;
    title: string;
    context: string;
    relateId: number;
    payload: string;
    toMemberId: number;
    status: number;
  }>('/notification/find-in-site-message', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取当前用户未读站内信数量 GET /notification/get-unread-count */
export async function notificationGetUnreadCount(options?: { [key: string]: any }) {
  return request<{ unread: number }>('/notification/get-unread-count', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取当前用户未读站内信数量 GET /notification/get-unread-count */
export async function notificationGetUnreadCount2(options?: { [key: string]: any }) {
  return request<{ unread: number }>('/notification/get-unread-count', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 分页获取当前用户站内信列表 GET /notification/page-in-site-message */
export async function notificationPageInSiteMessage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.notificationPageInSiteMessageParams,
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
      source?: string;
      restaurantId?: number;
      restaurantUserId?: number;
      subject?: string;
      title?: string;
      context?: string;
      relateId?: number;
      payload?: string;
      toMemberId?: number;
      status?: number;
      restaurant: {
        id?: number;
        createBy?: number;
        updateBy?: number;
        createAt?: string;
        updateAt?: string;
        deleteAt?: number;
        name?: string;
        en_name?: string;
        brandId?: number;
        indexCode?: string;
        code?: string;
        address?: string;
        en_address?: string;
        regionCode?: string;
        contacts?: string;
        contactsWay?: string;
        cover?: string;
        lng?: string;
        lat?: string;
        description?: string;
        en_description?: string;
        isMainStore?: boolean;
        minimumCharge?: number;
        cuisineTypeId?: number;
      };
      brand: {
        levelType?: 'BASIC' | 'PREMIUM' | 'EXPIRED';
        id?: number;
        createBy?: number;
        updateBy?: number;
        createAt?: string;
        updateAt?: string;
        deleteAt?: number;
        name?: string;
        en_name?: string;
        contacts?: string;
        contactsWay?: string;
        logo?: string;
        description?: string;
        en_description?: string;
        expiredDate?: string;
        sort?: number;
      };
    }[];
  }>('/notification/page-in-site-message', {
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

/** 分页获取当前用户站内信列表 GET /notification/page-in-site-message */
export async function notificationPageInSiteMessage2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.notificationPageInSiteMessageParams,
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
      source?: string;
      restaurantId?: number;
      restaurantUserId?: number;
      subject?: string;
      title?: string;
      context?: string;
      relateId?: number;
      payload?: string;
      toMemberId?: number;
      status?: number;
      restaurant: {
        id?: number;
        createBy?: number;
        updateBy?: number;
        createAt?: string;
        updateAt?: string;
        deleteAt?: number;
        name?: string;
        en_name?: string;
        brandId?: number;
        indexCode?: string;
        code?: string;
        address?: string;
        en_address?: string;
        regionCode?: string;
        contacts?: string;
        contactsWay?: string;
        cover?: string;
        lng?: string;
        lat?: string;
        description?: string;
        en_description?: string;
        isMainStore?: boolean;
        minimumCharge?: number;
        cuisineTypeId?: number;
      };
      brand: {
        levelType?: 'BASIC' | 'PREMIUM' | 'EXPIRED';
        id?: number;
        createBy?: number;
        updateBy?: number;
        createAt?: string;
        updateAt?: string;
        deleteAt?: number;
        name?: string;
        en_name?: string;
        contacts?: string;
        contactsWay?: string;
        logo?: string;
        description?: string;
        en_description?: string;
        expiredDate?: string;
        sort?: number;
      };
    }[];
  }>('/notification/page-in-site-message', {
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

/** 获取指定站内信详情并更新为已读 GET /notification/update-all-in-site-message-read */
export async function notificationUpdateAllInSiteMessageRead(options?: { [key: string]: any }) {
  return request<string>('/notification/update-all-in-site-message-read', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取指定站内信详情并更新为已读 GET /notification/update-all-in-site-message-read */
export async function notificationUpdateAllInSiteMessageRead2(options?: { [key: string]: any }) {
  return request<string>('/notification/update-all-in-site-message-read', {
    method: 'GET',
    ...(options || {}),
  });
}
