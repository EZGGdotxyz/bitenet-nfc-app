// @ts-ignore
/* eslint-disable */
import request from 'app/utils/request';

/** 会员提交礼物兑换 POST /member-gift-exchange/commit */
export async function memberGiftExchangeRouterMemberCommitGiftExchange(
  body: {
    /** 抽奖活动Id */
    giftId: number;
    /** 餐厅Id */
    restaurantId: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    type: 'LUCKY_DRAW' | 'SIGN_IN';
    exchangeType: 'LUCKY_DRAW' | 'RESTAUARNT_INVITE' | 'SIGN_IN_BOUNS' | 'GENERAL';
    id: number;
    createBy: number;
    updateBy: number;
    createAt: string;
    updateAt: string;
    deleteAt: number;
    brandId: number;
    restaurantId: number;
    memberId: number;
    exchangeCost: string;
    exchangeGiftId: number;
    exchangeGiftName: string;
    exchangeGiftEn_name: string;
    exchangeGiftPrice: string;
    exchangeGiftPhoto: string;
    exchangeGiftDescription: string;
    exchangeGiftEn_description: string;
    signInRecordId: number;
    luckyDrawRecordId: number;
    quantity: number;
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
  }>('/member-gift-exchange/commit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 会员提交礼物兑换 POST /member-gift-exchange/commit */
export async function memberGiftExchangeRouterMemberCommitGiftExchange2(
  body: {
    /** 抽奖活动Id */
    giftId: number;
    /** 餐厅Id */
    restaurantId: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    type: 'LUCKY_DRAW' | 'SIGN_IN';
    exchangeType: 'LUCKY_DRAW' | 'RESTAUARNT_INVITE' | 'SIGN_IN_BOUNS' | 'GENERAL';
    id: number;
    createBy: number;
    updateBy: number;
    createAt: string;
    updateAt: string;
    deleteAt: number;
    brandId: number;
    restaurantId: number;
    memberId: number;
    exchangeCost: string;
    exchangeGiftId: number;
    exchangeGiftName: string;
    exchangeGiftEn_name: string;
    exchangeGiftPrice: string;
    exchangeGiftPhoto: string;
    exchangeGiftDescription: string;
    exchangeGiftEn_description: string;
    signInRecordId: number;
    luckyDrawRecordId: number;
    quantity: number;
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
  }>('/member-gift-exchange/commit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新会员抽奖或打卡礼物记录核销状态 POST /member-gift-exchange/gift-settlement-status */
export async function memberGiftExchangeRouterUpdateGiftSettlementStatus(
  body: {
    /** 类型，'luckyDraw'表示抽奖礼物，'giftExchange'表示打卡礼物 */
    recordType: 'luckyDraw' | 'clockIn';
    /** 餐厅Id */
    restaurantId: number;
    /** 会员获取礼物记录Id */
    recordId: number;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/member-gift-exchange/gift-settlement-status', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新会员抽奖或打卡礼物记录核销状态 POST /member-gift-exchange/gift-settlement-status */
export async function memberGiftExchangeRouterUpdateGiftSettlementStatus2(
  body: {
    /** 类型，'luckyDraw'表示抽奖礼物，'giftExchange'表示打卡礼物 */
    recordType: 'luckyDraw' | 'clockIn';
    /** 餐厅Id */
    restaurantId: number;
    /** 会员获取礼物记录Id */
    recordId: number;
  },
  options?: { [key: string]: any },
) {
  return request<boolean>('/member-gift-exchange/gift-settlement-status', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取当前登陆会员礼物兑换记录分页列表，包含打卡、邀请、抽奖、兑换 GET /member-gift-exchange/page */
export async function memberGiftExchangeRouterPageMemberGiftExchange(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.memberGiftExchangeRouterPageMemberGiftExchangeParams,
  options?: { [key: string]: any },
) {
  return request<{
    page: number;
    pageSize: number;
    pageCount: number;
    totalCount: number;
    record: {
      type?: 'LUCKY_DRAW' | 'SIGN_IN';
      exchangeType?: 'LUCKY_DRAW' | 'RESTAUARNT_INVITE' | 'SIGN_IN_BOUNS' | 'GENERAL';
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      brandId?: number;
      restaurantId?: number;
      memberId?: number;
      exchangeCost?: string;
      exchangeGiftId?: number;
      exchangeGiftName?: string;
      exchangeGiftEn_name?: string;
      exchangeGiftPrice?: string;
      exchangeGiftPhoto?: string;
      exchangeGiftDescription?: string;
      exchangeGiftEn_description?: string;
      signInRecordId?: number;
      luckyDrawRecordId?: number;
      quantity?: number;
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
  }>('/member-gift-exchange/page', {
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

/** 获取当前登陆会员礼物兑换记录分页列表，包含打卡、邀请、抽奖、兑换 GET /member-gift-exchange/page */
export async function memberGiftExchangeRouterPageMemberGiftExchange2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.memberGiftExchangeRouterPageMemberGiftExchangeParams,
  options?: { [key: string]: any },
) {
  return request<{
    page: number;
    pageSize: number;
    pageCount: number;
    totalCount: number;
    record: {
      type?: 'LUCKY_DRAW' | 'SIGN_IN';
      exchangeType?: 'LUCKY_DRAW' | 'RESTAUARNT_INVITE' | 'SIGN_IN_BOUNS' | 'GENERAL';
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      brandId?: number;
      restaurantId?: number;
      memberId?: number;
      exchangeCost?: string;
      exchangeGiftId?: number;
      exchangeGiftName?: string;
      exchangeGiftEn_name?: string;
      exchangeGiftPrice?: string;
      exchangeGiftPhoto?: string;
      exchangeGiftDescription?: string;
      exchangeGiftEn_description?: string;
      signInRecordId?: number;
      luckyDrawRecordId?: number;
      quantity?: number;
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
  }>('/member-gift-exchange/page', {
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
