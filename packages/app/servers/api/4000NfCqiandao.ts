// @ts-ignore
/* eslint-disable */
import request from 'app/utils/request';

/** 获取下一个打卡目标礼物信息 GET /nfc-sign-in/get-next-clock-in-gift-info */
export async function nfcSignInGetNextClockInGiftInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.nfcSignInGetNextClockInGiftInfoParams,
  options?: { [key: string]: any },
) {
  return request<{
    signInTimes: number;
    clockIn?: {
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      brandId?: number;
      name?: string;
      en_name?: string;
      startDate?: string;
      endDate?: string;
      cycleDaysLength?: number;
      isLoop?: boolean;
      description?: string;
      en_description?: string;
      isEnabled?: boolean;
    };
    clockInRule?: {
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      clockInId?: number;
      cycleDayNumber?: number;
      title?: string;
      en_title?: string;
      giftId?: number;
      quantity?: number;
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
    remaining?: number;
  }>('/nfc-sign-in/get-next-clock-in-gift-info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取下一个打卡目标礼物信息 GET /nfc-sign-in/get-next-clock-in-gift-info */
export async function nfcSignInGetNextClockInGiftInfo2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.nfcSignInGetNextClockInGiftInfoParams,
  options?: { [key: string]: any },
) {
  return request<{
    signInTimes: number;
    clockIn?: {
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      brandId?: number;
      name?: string;
      en_name?: string;
      startDate?: string;
      endDate?: string;
      cycleDaysLength?: number;
      isLoop?: boolean;
      description?: string;
      en_description?: string;
      isEnabled?: boolean;
    };
    clockInRule?: {
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      clockInId?: number;
      cycleDayNumber?: number;
      title?: string;
      en_title?: string;
      giftId?: number;
      quantity?: number;
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
    remaining?: number;
  }>('/nfc-sign-in/get-next-clock-in-gift-info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询会员签到记录 GET /nfc-sign-in/page-sign-in */
export async function nfcSignInPageSignIn(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.nfcSignInPageSignInParams,
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
      restaurantNfcCode?: string;
      brandId?: number;
      restaurantId?: number;
      regionCode?: string;
      clockInId?: number;
      memberId?: number;
      bonus?: number;
      signInTime?: string;
      currentLevelCode?: string;
      bonusMultiple?: number;
      originBouns?: number;
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
      giftList?: {
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
      }[];
    }[];
  }>('/nfc-sign-in/page-sign-in', {
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

/** 分页查询会员签到记录 GET /nfc-sign-in/page-sign-in */
export async function nfcSignInPageSignIn2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.nfcSignInPageSignInParams,
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
      restaurantNfcCode?: string;
      brandId?: number;
      restaurantId?: number;
      regionCode?: string;
      clockInId?: number;
      memberId?: number;
      bonus?: number;
      signInTime?: string;
      currentLevelCode?: string;
      bonusMultiple?: number;
      originBouns?: number;
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
      giftList?: {
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
      }[];
    }[];
  }>('/nfc-sign-in/page-sign-in', {
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

/** 创建会员签到记录 POST /nfc-sign-in/sign-in */
export async function nfcSignInSignIn(
  body: {
    /** NFC code */
    code: string;
    /** 经度 */
    lng?: string;
    /** 纬度 */
    lat?: string;
    /** 会员ID */
    memberId?: number;
    /** 签到时间 */
    signInTime?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    signInRecord: {
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      restaurantNfcCode?: string;
      brandId?: number;
      restaurantId?: number;
      regionCode?: string;
      clockInId?: number;
      memberId?: number;
      bonus?: number;
      signInTime?: string;
      currentLevelCode?: string;
      bonusMultiple?: number;
      originBouns?: number;
    };
    nextLevel?: {
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      name?: string;
      en_name?: string;
      levelCode?: string;
      bonusMultiple?: number;
      keepLevelDays?: number;
      keepLevelTimes?: number;
      toLevelDays?: number;
      toLevelTimes?: number;
      nextLevelCode?: string;
      backLevelCode?: string;
    };
    giftList: {
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
    }[];
    luckyDraw?: {
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      brandId?: number;
      restaurantId?: number;
      name?: string;
      en_name?: string;
      startDate?: string;
      endDate?: string;
      description?: string;
      en_description?: string;
      isEnabled?: boolean;
    };
    signTimesToNextLevel?: number;
  }>('/nfc-sign-in/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建会员签到记录 POST /nfc-sign-in/sign-in */
export async function nfcSignInSignIn2(
  body: {
    /** NFC code */
    code: string;
    /** 经度 */
    lng?: string;
    /** 纬度 */
    lat?: string;
    /** 会员ID */
    memberId?: number;
    /** 签到时间 */
    signInTime?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    signInRecord: {
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      restaurantNfcCode?: string;
      brandId?: number;
      restaurantId?: number;
      regionCode?: string;
      clockInId?: number;
      memberId?: number;
      bonus?: number;
      signInTime?: string;
      currentLevelCode?: string;
      bonusMultiple?: number;
      originBouns?: number;
    };
    nextLevel?: {
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      name?: string;
      en_name?: string;
      levelCode?: string;
      bonusMultiple?: number;
      keepLevelDays?: number;
      keepLevelTimes?: number;
      toLevelDays?: number;
      toLevelTimes?: number;
      nextLevelCode?: string;
      backLevelCode?: string;
    };
    giftList: {
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
    }[];
    luckyDraw?: {
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      brandId?: number;
      restaurantId?: number;
      name?: string;
      en_name?: string;
      startDate?: string;
      endDate?: string;
      description?: string;
      en_description?: string;
      isEnabled?: boolean;
    };
    signTimesToNextLevel?: number;
  }>('/nfc-sign-in/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
