// @ts-ignore
/* eslint-disable */
import request from 'app/utils/request';

/** 获取会员抽奖记录分页 GET /member-lucky-draw/member/page */
export async function memberLuckyDrawRouterPageMemberLuchyDraw(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.memberLuckyDrawRouterPageMemberLuchyDrawParams,
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
      brandId?: number;
      restaurantId?: number;
      memberId?: number;
      luckyDrawId?: number;
      luckyDrawName?: string;
      luckyDrawEn_name?: string;
      luckyDrawStartDate?: string;
      luckyDrawEndDate?: string;
      luckyDrawDescription?: string;
      luckyDrawEn_description?: string;
      luckyDrawRuleId?: number;
      luckyDrawRuleLevel?: number;
      luckyDrawRuleTitle?: string;
      luckyDrawRuleEn_title?: string;
      luckyDrawRuleTotalQuantity?: number;
      luckyDrawRuleQuantity?: number;
      luckyDrawRuleProbability?: string;
      luckyDrawGiftId?: number;
      luckyDrawGiftName?: string;
      luckyDrawGiftEN_name?: string;
      luckyDrawGiftPrice?: string;
      luckyDrawGiftPhoto?: string;
      luckyDrawGiftDescription?: string;
      luckyDrawGiftEn_description?: string;
      isSettlement?: boolean;
      member: {
        id?: number;
        createBy?: number;
        updateBy?: number;
        createAt?: string;
        updateAt?: string;
        deleteAt?: number;
        account?: string;
        phoneAreaCode?: string;
        phone?: string;
        nickname?: string;
        avatar?: string;
        gender?: string;
        identity?: string;
        lastAccessTime?: string;
        memberFlag?: number;
        freeze?: boolean;
        freezeReason?: string;
        timezone?: number;
        virtualUser?: boolean;
        appSignIn?: boolean;
        freepass?: boolean;
      };
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
    }[];
  }>('/member-lucky-draw/member/page', {
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

/** 获取会员抽奖记录分页 GET /member-lucky-draw/member/page */
export async function memberLuckyDrawRouterPageMemberLuchyDraw2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.memberLuckyDrawRouterPageMemberLuchyDrawParams,
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
      brandId?: number;
      restaurantId?: number;
      memberId?: number;
      luckyDrawId?: number;
      luckyDrawName?: string;
      luckyDrawEn_name?: string;
      luckyDrawStartDate?: string;
      luckyDrawEndDate?: string;
      luckyDrawDescription?: string;
      luckyDrawEn_description?: string;
      luckyDrawRuleId?: number;
      luckyDrawRuleLevel?: number;
      luckyDrawRuleTitle?: string;
      luckyDrawRuleEn_title?: string;
      luckyDrawRuleTotalQuantity?: number;
      luckyDrawRuleQuantity?: number;
      luckyDrawRuleProbability?: string;
      luckyDrawGiftId?: number;
      luckyDrawGiftName?: string;
      luckyDrawGiftEN_name?: string;
      luckyDrawGiftPrice?: string;
      luckyDrawGiftPhoto?: string;
      luckyDrawGiftDescription?: string;
      luckyDrawGiftEn_description?: string;
      isSettlement?: boolean;
      member: {
        id?: number;
        createBy?: number;
        updateBy?: number;
        createAt?: string;
        updateAt?: string;
        deleteAt?: number;
        account?: string;
        phoneAreaCode?: string;
        phone?: string;
        nickname?: string;
        avatar?: string;
        gender?: string;
        identity?: string;
        lastAccessTime?: string;
        memberFlag?: number;
        freeze?: boolean;
        freezeReason?: string;
        timezone?: number;
        virtualUser?: boolean;
        appSignIn?: boolean;
        freepass?: boolean;
      };
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
    }[];
  }>('/member-lucky-draw/member/page', {
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

/** 会员参与餐厅抽奖活动 POST /member-lucky-draw/participate */
export async function memberLuckyDrawRouterMemberParticipateInLuckyDraw(
  body: {
    /** 抽奖活动Id */
    luckyDrawId: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    id: number;
    createBy: number;
    updateBy: number;
    createAt: string;
    updateAt: string;
    deleteAt: number;
    brandId: number;
    restaurantId: number;
    memberId: number;
    luckyDrawId: number;
    luckyDrawName: string;
    luckyDrawEn_name: string;
    luckyDrawStartDate: string;
    luckyDrawEndDate: string;
    luckyDrawDescription: string;
    luckyDrawEn_description: string;
    luckyDrawRuleId: number;
    luckyDrawRuleLevel: number;
    luckyDrawRuleTitle: string;
    luckyDrawRuleEn_title: string;
    luckyDrawRuleTotalQuantity: number;
    luckyDrawRuleQuantity: number;
    luckyDrawRuleProbability: string;
    luckyDrawGiftId: number;
    luckyDrawGiftName: string;
    luckyDrawGiftEN_name: string;
    luckyDrawGiftPrice: string;
    luckyDrawGiftPhoto: string;
    luckyDrawGiftDescription: string;
    luckyDrawGiftEn_description: string;
    isSettlement: boolean;
    member?: {
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      account?: string;
      phoneAreaCode?: string;
      phone?: string;
      nickname?: string;
      avatar?: string;
      gender?: string;
      identity?: string;
      lastAccessTime?: string;
      memberFlag?: number;
      freeze?: boolean;
      freezeReason?: string;
      timezone?: number;
      virtualUser?: boolean;
      appSignIn?: boolean;
      freepass?: boolean;
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
  }>('/member-lucky-draw/participate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 会员参与餐厅抽奖活动 POST /member-lucky-draw/participate */
export async function memberLuckyDrawRouterMemberParticipateInLuckyDraw2(
  body: {
    /** 抽奖活动Id */
    luckyDrawId: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    id: number;
    createBy: number;
    updateBy: number;
    createAt: string;
    updateAt: string;
    deleteAt: number;
    brandId: number;
    restaurantId: number;
    memberId: number;
    luckyDrawId: number;
    luckyDrawName: string;
    luckyDrawEn_name: string;
    luckyDrawStartDate: string;
    luckyDrawEndDate: string;
    luckyDrawDescription: string;
    luckyDrawEn_description: string;
    luckyDrawRuleId: number;
    luckyDrawRuleLevel: number;
    luckyDrawRuleTitle: string;
    luckyDrawRuleEn_title: string;
    luckyDrawRuleTotalQuantity: number;
    luckyDrawRuleQuantity: number;
    luckyDrawRuleProbability: string;
    luckyDrawGiftId: number;
    luckyDrawGiftName: string;
    luckyDrawGiftEN_name: string;
    luckyDrawGiftPrice: string;
    luckyDrawGiftPhoto: string;
    luckyDrawGiftDescription: string;
    luckyDrawGiftEn_description: string;
    isSettlement: boolean;
    member?: {
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      account?: string;
      phoneAreaCode?: string;
      phone?: string;
      nickname?: string;
      avatar?: string;
      gender?: string;
      identity?: string;
      lastAccessTime?: string;
      memberFlag?: number;
      freeze?: boolean;
      freezeReason?: string;
      timezone?: number;
      virtualUser?: boolean;
      appSignIn?: boolean;
      freepass?: boolean;
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
  }>('/member-lucky-draw/participate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
