// @ts-ignore
/* eslint-disable */
import request from 'app/utils/request';

/** 根据Id获取餐厅信息 GET /restaurant/info/get/${param0} */
export async function restaurantRouterGetRestaurantById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.restaurantRouterGetRestaurantByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    id: number;
    createBy: number;
    updateBy: number;
    createAt: string;
    updateAt: string;
    deleteAt: number;
    name: string;
    en_name: string;
    brandId: number;
    indexCode: string;
    code: string;
    address: string;
    en_address: string;
    regionCode: string;
    contacts: string;
    contactsWay: string;
    cover: string;
    lng: string;
    lat: string;
    description: string;
    en_description: string;
    isMainStore: boolean;
    minimumCharge: number;
    cuisineTypeId: number;
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
    region?: {
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      code?: string;
      name?: string;
      en_name?: string;
    };
    nft?: {
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      restaurantId?: number;
      photo?: string;
      description?: string;
      en_description?: string;
      address?: string;
    };
  }>(`/restaurant/info/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 根据Id获取餐厅信息 GET /restaurant/info/get/${param0} */
export async function restaurantRouterGetRestaurantById2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.restaurantRouterGetRestaurantByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    id: number;
    createBy: number;
    updateBy: number;
    createAt: string;
    updateAt: string;
    deleteAt: number;
    name: string;
    en_name: string;
    brandId: number;
    indexCode: string;
    code: string;
    address: string;
    en_address: string;
    regionCode: string;
    contacts: string;
    contactsWay: string;
    cover: string;
    lng: string;
    lat: string;
    description: string;
    en_description: string;
    isMainStore: boolean;
    minimumCharge: number;
    cuisineTypeId: number;
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
    region?: {
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      code?: string;
      name?: string;
      en_name?: string;
    };
    nft?: {
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      restaurantId?: number;
      photo?: string;
      description?: string;
      en_description?: string;
      address?: string;
    };
  }>(`/restaurant/info/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取当前登陆会员已打卡餐厅列表 GET /restaurant/info/list */
export async function restaurantRouterListRestaurant(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.restaurantRouterListRestaurantParams,
  options?: { [key: string]: any },
) {
  return request<
    {
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
      region: {
        id?: number;
        createBy?: number;
        updateBy?: number;
        createAt?: string;
        updateAt?: string;
        deleteAt?: number;
        code?: string;
        name?: string;
        en_name?: string;
      };
      nft: {
        id?: number;
        createBy?: number;
        updateBy?: number;
        createAt?: string;
        updateAt?: string;
        deleteAt?: number;
        restaurantId?: number;
        photo?: string;
        description?: string;
        en_description?: string;
        address?: string;
      };
    }[]
  >('/restaurant/info/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取当前登陆会员已打卡餐厅列表 GET /restaurant/info/list */
export async function restaurantRouterListRestaurant2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.restaurantRouterListRestaurantParams,
  options?: { [key: string]: any },
) {
  return request<
    {
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
      region: {
        id?: number;
        createBy?: number;
        updateBy?: number;
        createAt?: string;
        updateAt?: string;
        deleteAt?: number;
        code?: string;
        name?: string;
        en_name?: string;
      };
      nft: {
        id?: number;
        createBy?: number;
        updateBy?: number;
        createAt?: string;
        updateAt?: string;
        deleteAt?: number;
        restaurantId?: number;
        photo?: string;
        description?: string;
        en_description?: string;
        address?: string;
      };
    }[]
  >('/restaurant/info/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取当前登陆会员已打卡餐厅列表分页 GET /restaurant/info/page */
export async function restaurantRouterPageRestaurant(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.restaurantRouterPageRestaurantParams,
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
      region: {
        id?: number;
        createBy?: number;
        updateBy?: number;
        createAt?: string;
        updateAt?: string;
        deleteAt?: number;
        code?: string;
        name?: string;
        en_name?: string;
      };
      nft: {
        id?: number;
        createBy?: number;
        updateBy?: number;
        createAt?: string;
        updateAt?: string;
        deleteAt?: number;
        restaurantId?: number;
        photo?: string;
        description?: string;
        en_description?: string;
        address?: string;
      };
    }[];
  }>('/restaurant/info/page', {
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

/** 获取当前登陆会员已打卡餐厅列表分页 GET /restaurant/info/page */
export async function restaurantRouterPageRestaurant2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.restaurantRouterPageRestaurantParams,
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
      region: {
        id?: number;
        createBy?: number;
        updateBy?: number;
        createAt?: string;
        updateAt?: string;
        deleteAt?: number;
        code?: string;
        name?: string;
        en_name?: string;
      };
      nft: {
        id?: number;
        createBy?: number;
        updateBy?: number;
        createAt?: string;
        updateAt?: string;
        deleteAt?: number;
        restaurantId?: number;
        photo?: string;
        description?: string;
        en_description?: string;
        address?: string;
      };
    }[];
  }>('/restaurant/info/page', {
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
