// @ts-ignore
/* eslint-disable */
import request from 'app/utils/request';

/** 创建邀请码 POST /referral/invite-code/create-invite-code */
export async function inviteCodeCreateInviteCode(options?: { [key: string]: any }) {
  return request<{
    operatorType: 'ADMIN' | 'RESTAUARNT' | 'CUSTOMER';
    id: number;
    createBy: number;
    updateBy: number;
    createAt: string;
    updateAt: string;
    deleteAt: number;
    operatorId: number;
    brandId: number;
    restaurantId: number;
    code: string;
    base64: string;
    expireAt: string;
    enabled: boolean;
    invitees: number;
    inviteBonus: number;
    remark: string;
    staffName: string;
  }>('/referral/invite-code/create-invite-code', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 创建邀请码 POST /referral/invite-code/create-invite-code */
export async function inviteCodeCreateInviteCode2(options?: { [key: string]: any }) {
  return request<{
    operatorType: 'ADMIN' | 'RESTAUARNT' | 'CUSTOMER';
    id: number;
    createBy: number;
    updateBy: number;
    createAt: string;
    updateAt: string;
    deleteAt: number;
    operatorId: number;
    brandId: number;
    restaurantId: number;
    code: string;
    base64: string;
    expireAt: string;
    enabled: boolean;
    invitees: number;
    inviteBonus: number;
    remark: string;
    staffName: string;
  }>('/referral/invite-code/create-invite-code', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 获取邀请码详情 GET /referral/invite-code/find-invite-code/${param0} */
export async function inviteCodeFindInviteCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.inviteCodeFindInviteCodeParams,
  options?: { [key: string]: any },
) {
  const { code: param0, ...queryParams } = params;
  return request<{
    operatorType: 'ADMIN' | 'RESTAUARNT' | 'CUSTOMER';
    id: number;
    createBy: number;
    updateBy: number;
    createAt: string;
    updateAt: string;
    deleteAt: number;
    operatorId: number;
    brandId: number;
    restaurantId: number;
    code: string;
    base64: string;
    expireAt: string;
    enabled: boolean;
    invitees: number;
    inviteBonus: number;
    remark: string;
    staffName: string;
    brand?: {
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
    restaurant?: {
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
    gift?: {
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
    };
    giftAmount?: number;
  }>(`/referral/invite-code/find-invite-code/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取邀请码详情 GET /referral/invite-code/find-invite-code/${param0} */
export async function inviteCodeFindInviteCode2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.inviteCodeFindInviteCodeParams,
  options?: { [key: string]: any },
) {
  const { code: param0, ...queryParams } = params;
  return request<{
    operatorType: 'ADMIN' | 'RESTAUARNT' | 'CUSTOMER';
    id: number;
    createBy: number;
    updateBy: number;
    createAt: string;
    updateAt: string;
    deleteAt: number;
    operatorId: number;
    brandId: number;
    restaurantId: number;
    code: string;
    base64: string;
    expireAt: string;
    enabled: boolean;
    invitees: number;
    inviteBonus: number;
    remark: string;
    staffName: string;
    brand?: {
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
    restaurant?: {
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
    gift?: {
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
    };
    giftAmount?: number;
  }>(`/referral/invite-code/find-invite-code/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
