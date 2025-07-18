declare namespace API {
  type brandRouterGetBrandByIdParams = {
    /** 品牌Id */
    id: number;
  };

  type brandRouterListBrandParams = {
    name?: string;
    enName?: string;
  };

  type brandRouterPageBrandParams = {
    page?: number;
    pageSize?: number;
    name?: string;
    enName?: string;
  };

  type brandRouterPageRecommendedBrandParams = {
    page?: number;
    pageSize?: number;
    name?: string;
    enName?: string;
  };

  type clockInRouterGetClockInByBrandIdParams = {
    /** 品牌Id */
    brandId: number;
  };

  type error = {
    message: string;
    code: string;
    issues?: { message?: string }[];
  };

  type giftRouterPageGiftParams = {
    page?: number;
    pageSize?: number;
    brandId?: number;
    exchangeCostLte?: number;
    exchangeCostGte?: number;
    name?: string;
    enName?: string;
  };

  type inviteCodeFindInviteCodeParams = {
    /** 邀请码 */
    code: string;
  };

  type luckyDrawRouterGetRestaurantLuckyDrawByRestaurantIdParams = {
    /** 餐厅Id */
    restaurantId: number;
  };

  type memberGiftExchangeRouterPageMemberGiftExchangeParams = {
    page?: number;
    pageSize?: number;
    brandId?: number;
    restaurantId?: number;
    giftName?: string;
    giftEnName?: string;
    exchangeType?: 'LUCKY_DRAW' | 'RESTAUARNT_INVITE' | 'SIGN_IN_BOUNS' | 'GENERAL';
  };

  type memberLuckyDrawRouterPageMemberLuchyDrawParams = {
    page?: number;
    pageSize?: number;
    brandId?: number;
    restaurantId?: number;
    luckyDrawName?: string;
    luckyDrawEnName?: string;
    hasGift?: string;
  };

  type memberWalletGetBalanceParams = {
    walletType: 'MEMBER_POINTS' | 'RESTAUARNT_PRE_RECHARGE';
  };

  type memberWalletPageTransationParams = {
    walletType: 'MEMBER_POINTS' | 'RESTAUARNT_PRE_RECHARGE';
    page?: number;
    pageSize?: number;
  };

  type nfcSignInGetNextClockInGiftInfoParams = {
    /** 品牌id */
    brandId: number;
  };

  type nfcSignInPageSignInParams = {
    page?: number;
    pageSize?: number;
    /** 品牌id */
    brandId?: number;
    /** 餐厅id */
    restaurantId?: number;
    /** 会员id */
    memberId?: number;
    hasGift?: string;
  };

  type notificationFindInSiteMessageParams = {
    id: number;
  };

  type notificationPageInSiteMessageParams = {
    page?: number;
    pageSize?: number;
    /** 关搜索键词 */
    search?: string;
    /** 状态值：0 未读；1已读 */
    status?: number;
    /** 站内信主题枚举 */
    subject?: string;
  };

  type phoneAreaCodeFindPhoneAreaCodeParams = {
    /** 地区代码 */
    countryCode: string;
  };

  type phoneAreaCodePagePhoneAreaCodeParams = {
    page?: number;
    pageSize?: number;
    /** 检索词 */
    search?: string;
    /** 国家地区代码集合，多个用逗号分割 */
    countryCodes?: string;
  };

  type restaurantRouterGetRestaurantByIdParams = {
    /** 餐厅Id */
    id: number;
  };

  type restaurantRouterListRestaurantParams = {
    brandId?: number;
    name?: string;
    enName?: string;
  };

  type restaurantRouterPageRestaurantParams = {
    page?: number;
    pageSize?: number;
    brandId?: number;
    name?: string;
    enName?: string;
  };
}
