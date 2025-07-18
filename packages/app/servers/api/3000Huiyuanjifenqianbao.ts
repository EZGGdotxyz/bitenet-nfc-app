// @ts-ignore
/* eslint-disable */
import request from 'app/utils/request';

/** 获取钱包余额 GET /member/wallet/${param0}/get-balance */
export async function memberWalletGetBalance(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.memberWalletGetBalanceParams,
  options?: { [key: string]: any },
) {
  const { walletType: param0, ...queryParams } = params;
  return request<{ balance: number }>(`/member/wallet/${param0}/get-balance`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取钱包余额 GET /member/wallet/${param0}/get-balance */
export async function memberWalletGetBalance2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.memberWalletGetBalanceParams,
  options?: { [key: string]: any },
) {
  const { walletType: param0, ...queryParams } = params;
  return request<{ balance: number }>(`/member/wallet/${param0}/get-balance`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取当前用户交易记录 GET /member/wallet/${param0}/page-transation */
export async function memberWalletPageTransation(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.memberWalletPageTransationParams,
  options?: { [key: string]: any },
) {
  const { walletType: param0, ...queryParams } = params;
  return request<{
    page: number;
    pageSize: number;
    pageCount: number;
    totalCount: number;
    record: {
      walletType?: 'MEMBER_POINTS' | 'RESTAUARNT_PRE_RECHARGE';
      ownerType?: 'MEMBER' | 'RESTAUARNT';
      balanceType?: 'CONSUMABLE';
      transationDirection?: 'DEBIT' | 'CREDIT';
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      walletAccountId?: number;
      ownerId?: number;
      rounding?: number;
      walletBalanceId?: number;
      subject?: string;
      amount?: number;
      balanceBefore?: number;
      balanceAfter?: number;
      remark?: string;
      remarkEn?: string;
      remarkI18n?: boolean;
      voucherType?: string;
      voucher?: string;
    }[];
  }>(`/member/wallet/${param0}/page-transation`, {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // pageSize has a default value: 30
      pageSize: '30',
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取当前用户交易记录 GET /member/wallet/${param0}/page-transation */
export async function memberWalletPageTransation2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.memberWalletPageTransationParams,
  options?: { [key: string]: any },
) {
  const { walletType: param0, ...queryParams } = params;
  return request<{
    page: number;
    pageSize: number;
    pageCount: number;
    totalCount: number;
    record: {
      walletType?: 'MEMBER_POINTS' | 'RESTAUARNT_PRE_RECHARGE';
      ownerType?: 'MEMBER' | 'RESTAUARNT';
      balanceType?: 'CONSUMABLE';
      transationDirection?: 'DEBIT' | 'CREDIT';
      id?: number;
      createBy?: number;
      updateBy?: number;
      createAt?: string;
      updateAt?: string;
      deleteAt?: number;
      walletAccountId?: number;
      ownerId?: number;
      rounding?: number;
      walletBalanceId?: number;
      subject?: string;
      amount?: number;
      balanceBefore?: number;
      balanceAfter?: number;
      remark?: string;
      remarkEn?: string;
      remarkI18n?: boolean;
      voucherType?: string;
      voucher?: string;
    }[];
  }>(`/member/wallet/${param0}/page-transation`, {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // pageSize has a default value: 30
      pageSize: '30',
      ...queryParams,
    },
    ...(options || {}),
  });
}
