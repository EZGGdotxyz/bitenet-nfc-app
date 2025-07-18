// @ts-ignore
/* eslint-disable */
import request from 'app/utils/request';

/** 退出登录 POST /member/auth/logout */
export async function memberAuthLogout(options?: { [key: string]: any }) {
  return request<string>('/member/auth/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 退出登录 POST /member/auth/logout */
export async function memberAuthLogout2(options?: { [key: string]: any }) {
  return request<string>('/member/auth/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 用户验证码登录 POST /member/auth/sign-in-by-captcha */
export async function memberAuthSignInByCaptcha(
  body: {
    /** 电话区号 */
    phoneAreaCode: string;
    /** 电话号码 */
    phone: string;
    /** 验证码 */
    captcha: string;
    /** 邀请码 */
    inviteCode?: string;
    /** 是否app */
    app?: boolean;
  },
  options?: { [key: string]: any },
) {
  return request<{
    phoneAreaCode?: string;
    phone?: string;
    nickname?: string;
    avatar?: string;
    gender?: string;
    app?: boolean;
    id: number;
    createAt: string;
    updateAt: string;
    token: string;
    tokenExpire: string;
    isSignUp?: boolean;
    appSignInBonus?: number;
  }>('/member/auth/sign-in-by-captcha', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户验证码登录 POST /member/auth/sign-in-by-captcha */
export async function memberAuthSignInByCaptcha2(
  body: {
    /** 电话区号 */
    phoneAreaCode: string;
    /** 电话号码 */
    phone: string;
    /** 验证码 */
    captcha: string;
    /** 邀请码 */
    inviteCode?: string;
    /** 是否app */
    app?: boolean;
  },
  options?: { [key: string]: any },
) {
  return request<{
    phoneAreaCode?: string;
    phone?: string;
    nickname?: string;
    avatar?: string;
    gender?: string;
    app?: boolean;
    id: number;
    createAt: string;
    updateAt: string;
    token: string;
    tokenExpire: string;
    isSignUp?: boolean;
    appSignInBonus?: number;
  }>('/member/auth/sign-in-by-captcha', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户密码登录 POST /member/auth/sign-in-by-password */
export async function memberAuthSignInByPassword(
  body: {
    /** 电话区号 */
    phoneAreaCode: string;
    /** 电话号码 */
    phone: string;
    /** 密码 */
    password: string;
    /** 是否app */
    app?: boolean;
  },
  options?: { [key: string]: any },
) {
  return request<{
    phoneAreaCode?: string;
    phone?: string;
    nickname?: string;
    avatar?: string;
    gender?: string;
    app?: boolean;
    id: number;
    createAt: string;
    updateAt: string;
    token: string;
    tokenExpire: string;
    isSignUp?: boolean;
    appSignInBonus?: number;
  }>('/member/auth/sign-in-by-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户密码登录 POST /member/auth/sign-in-by-password */
export async function memberAuthSignInByPassword2(
  body: {
    /** 电话区号 */
    phoneAreaCode: string;
    /** 电话号码 */
    phone: string;
    /** 密码 */
    password: string;
    /** 是否app */
    app?: boolean;
  },
  options?: { [key: string]: any },
) {
  return request<{
    phoneAreaCode?: string;
    phone?: string;
    nickname?: string;
    avatar?: string;
    gender?: string;
    app?: boolean;
    id: number;
    createAt: string;
    updateAt: string;
    token: string;
    tokenExpire: string;
    isSignUp?: boolean;
    appSignInBonus?: number;
  }>('/member/auth/sign-in-by-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Instagram授权码登录 POST /member/auth/sign-in-with-instagram */
export async function memberAuthSiginInWithInstagram(
  body: {
    /** 应用配置的重定向URI */
    redirectUri: string;
    /** instagram授权码 */
    code: string;
    /** 昵称 */
    nickname?: string;
    /** 头像URL地址 */
    avatar?: string;
    /** 性别枚举: MALE 男性: FEMALE 女性: UNKNOWN 未知； */
    gender?: string;
    /** 邀请码 */
    inviteCode?: string;
    /** 是否app */
    app?: boolean;
  },
  options?: { [key: string]: any },
) {
  return request<{
    phoneAreaCode?: string;
    phone?: string;
    nickname?: string;
    avatar?: string;
    gender?: string;
    app?: boolean;
    id: number;
    createAt: string;
    updateAt: string;
    token: string;
    tokenExpire: string;
  }>('/member/auth/sign-in-with-instagram', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Instagram授权码登录 POST /member/auth/sign-in-with-instagram */
export async function memberAuthSiginInWithInstagram2(
  body: {
    /** 应用配置的重定向URI */
    redirectUri: string;
    /** instagram授权码 */
    code: string;
    /** 昵称 */
    nickname?: string;
    /** 头像URL地址 */
    avatar?: string;
    /** 性别枚举: MALE 男性: FEMALE 女性: UNKNOWN 未知； */
    gender?: string;
    /** 邀请码 */
    inviteCode?: string;
    /** 是否app */
    app?: boolean;
  },
  options?: { [key: string]: any },
) {
  return request<{
    phoneAreaCode?: string;
    phone?: string;
    nickname?: string;
    avatar?: string;
    gender?: string;
    app?: boolean;
    id: number;
    createAt: string;
    updateAt: string;
    token: string;
    tokenExpire: string;
  }>('/member/auth/sign-in-with-instagram', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 第三方平台授权登录 POST /member/auth/sign-in-with-thridpart */
export async function memberAuthSiginInWithThirdpart(
  body: {
    /** 第三方平台标识 */
    appType: string;
    /** 第三方平台用户id */
    userId: string;
    /** 昵称 */
    nickname?: string;
    /** 头像URL地址 */
    avatar?: string;
    /** 性别枚举: MALE 男性: FEMALE 女性: UNKNOWN 未知； */
    gender?: string;
    /** 邀请码 */
    inviteCode?: string;
    /** 是否app */
    app?: boolean;
  },
  options?: { [key: string]: any },
) {
  return request<{
    phoneAreaCode?: string;
    phone?: string;
    nickname?: string;
    avatar?: string;
    gender?: string;
    app?: boolean;
    id: number;
    createAt: string;
    updateAt: string;
    token: string;
    tokenExpire: string;
  }>('/member/auth/sign-in-with-thridpart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 第三方平台授权登录 POST /member/auth/sign-in-with-thridpart */
export async function memberAuthSiginInWithThirdpart2(
  body: {
    /** 第三方平台标识 */
    appType: string;
    /** 第三方平台用户id */
    userId: string;
    /** 昵称 */
    nickname?: string;
    /** 头像URL地址 */
    avatar?: string;
    /** 性别枚举: MALE 男性: FEMALE 女性: UNKNOWN 未知； */
    gender?: string;
    /** 邀请码 */
    inviteCode?: string;
    /** 是否app */
    app?: boolean;
  },
  options?: { [key: string]: any },
) {
  return request<{
    phoneAreaCode?: string;
    phone?: string;
    nickname?: string;
    avatar?: string;
    gender?: string;
    app?: boolean;
    id: number;
    createAt: string;
    updateAt: string;
    token: string;
    tokenExpire: string;
  }>('/member/auth/sign-in-with-thridpart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户注册接口 POST /member/auth/sign-up */
export async function memberAuthSignUp(
  body: {
    /** 电话区号 */
    phoneAreaCode: string;
    /** 电话号码 */
    phone: string;
    /** 昵称 */
    nickname?: string;
    /** 头像URL地址 */
    avatar?: string;
    /** 性别枚举: MALE 男性: FEMALE 女性: UNKNOWN 未知； */
    gender?: string;
    /** 验证码 */
    captcha: string;
    password?: { input?: string; confirm?: string };
    /** 邀请码 */
    inviteCode?: string;
    /** 是否app */
    app?: boolean;
  },
  options?: { [key: string]: any },
) {
  return request<{
    phoneAreaCode?: string;
    phone?: string;
    nickname?: string;
    avatar?: string;
    gender?: string;
    app?: boolean;
    id: number;
    createAt: string;
    updateAt: string;
    token: string;
    tokenExpire: string;
  }>('/member/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户注册接口 POST /member/auth/sign-up */
export async function memberAuthSignUp2(
  body: {
    /** 电话区号 */
    phoneAreaCode: string;
    /** 电话号码 */
    phone: string;
    /** 昵称 */
    nickname?: string;
    /** 头像URL地址 */
    avatar?: string;
    /** 性别枚举: MALE 男性: FEMALE 女性: UNKNOWN 未知； */
    gender?: string;
    /** 验证码 */
    captcha: string;
    password?: { input?: string; confirm?: string };
    /** 邀请码 */
    inviteCode?: string;
    /** 是否app */
    app?: boolean;
  },
  options?: { [key: string]: any },
) {
  return request<{
    phoneAreaCode?: string;
    phone?: string;
    nickname?: string;
    avatar?: string;
    gender?: string;
    app?: boolean;
    id: number;
    createAt: string;
    updateAt: string;
    token: string;
    tokenExpire: string;
  }>('/member/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
