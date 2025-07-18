// @ts-ignore
/* eslint-disable */
import request from 'app/utils/request';

/** 绑定手机号 POST /member/profile/bind-phone */
export async function memberProfileBindPhone(
  body: {
    /** 电话区号 */
    phoneAreaCode: string;
    /** 电话号码 */
    phone: string;
    /** 验证码 */
    captcha: string;
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
    account: string;
    phoneAreaCode: string;
    phone: string;
    nickname: string;
    avatar: string;
    gender: string;
    identity: string;
    lastAccessTime: string;
    memberFlag: number;
    freeze: boolean;
    freezeReason: string;
    timezone: number;
    virtualUser: boolean;
    appSignIn: boolean;
    freepass: boolean;
  }>('/member/profile/bind-phone', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 绑定手机号 POST /member/profile/bind-phone */
export async function memberProfileBindPhone2(
  body: {
    /** 电话区号 */
    phoneAreaCode: string;
    /** 电话号码 */
    phone: string;
    /** 验证码 */
    captcha: string;
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
    account: string;
    phoneAreaCode: string;
    phone: string;
    nickname: string;
    avatar: string;
    gender: string;
    identity: string;
    lastAccessTime: string;
    memberFlag: number;
    freeze: boolean;
    freezeReason: string;
    timezone: number;
    virtualUser: boolean;
    appSignIn: boolean;
    freepass: boolean;
  }>('/member/profile/bind-phone', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除账号 POST /member/profile/delete-account */
export async function memberProfileDeleteAccount(options?: { [key: string]: any }) {
  return request<any>('/member/profile/delete-account', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除账号 POST /member/profile/delete-account */
export async function memberProfileDeleteAccount2(options?: { [key: string]: any }) {
  return request<any>('/member/profile/delete-account', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 通过id获取会员用户信息 GET /member/profile/find-current-member */
export async function memberProfileFindCurrentMember(options?: { [key: string]: any }) {
  return request<{
    id: number;
    createBy: number;
    updateBy: number;
    createAt: string;
    updateAt: string;
    deleteAt: number;
    account: string;
    phoneAreaCode: string;
    phone: string;
    nickname: string;
    avatar: string;
    gender: string;
    identity: string;
    lastAccessTime: string;
    memberFlag: number;
    freeze: boolean;
    freezeReason: string;
    timezone: number;
    virtualUser: boolean;
    appSignIn: boolean;
    freepass: boolean;
  }>('/member/profile/find-current-member', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 通过id获取会员用户信息 GET /member/profile/find-current-member */
export async function memberProfileFindCurrentMember2(options?: { [key: string]: any }) {
  return request<{
    id: number;
    createBy: number;
    updateBy: number;
    createAt: string;
    updateAt: string;
    deleteAt: number;
    account: string;
    phoneAreaCode: string;
    phone: string;
    nickname: string;
    avatar: string;
    gender: string;
    identity: string;
    lastAccessTime: string;
    memberFlag: number;
    freeze: boolean;
    freezeReason: string;
    timezone: number;
    virtualUser: boolean;
    appSignIn: boolean;
    freepass: boolean;
  }>('/member/profile/find-current-member', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 修改忘记密码会员登录密码 POST /member/profile/update-member-forgot-password */
export async function memberProfileUpdateMemberForgotPassword(
  body: {
    /** 电话区号 */
    phoneAreaCode: string;
    /** 电话号码 */
    phone: string;
    /** 验证码 */
    captcha: string;
    password: { input?: string; confirm?: string };
  },
  options?: { [key: string]: any },
) {
  return request<string>('/member/profile/update-member-forgot-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改忘记密码会员登录密码 POST /member/profile/update-member-forgot-password */
export async function memberProfileUpdateMemberForgotPassword2(
  body: {
    /** 电话区号 */
    phoneAreaCode: string;
    /** 电话号码 */
    phone: string;
    /** 验证码 */
    captcha: string;
    password: { input?: string; confirm?: string };
  },
  options?: { [key: string]: any },
) {
  return request<string>('/member/profile/update-member-forgot-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改当前会员登录密码 POST /member/profile/update-member-password */
export async function memberProfileUpdateMemberPassword(
  body: {
    /** 验证码 */
    captcha: string;
    password: { input?: string; confirm?: string };
  },
  options?: { [key: string]: any },
) {
  return request<string>('/member/profile/update-member-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改当前会员登录密码 POST /member/profile/update-member-password */
export async function memberProfileUpdateMemberPassword2(
  body: {
    /** 验证码 */
    captcha: string;
    password: { input?: string; confirm?: string };
  },
  options?: { [key: string]: any },
) {
  return request<string>('/member/profile/update-member-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改当前会员个人信息 POST /member/profile/update-member-profile */
export async function memberProfileUpdateMemberProfile(
  body: {
    /** 昵称 */
    nickname?: string;
    /** 头像URL地址 */
    avatar?: string;
    /** 性别枚举: MALE 男性: FEMALE 女性: UNKNOWN 未知； */
    gender?: string;
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
    account: string;
    phoneAreaCode: string;
    phone: string;
    nickname: string;
    avatar: string;
    gender: string;
    identity: string;
    lastAccessTime: string;
    memberFlag: number;
    freeze: boolean;
    freezeReason: string;
    timezone: number;
    virtualUser: boolean;
    appSignIn: boolean;
    freepass: boolean;
  }>('/member/profile/update-member-profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改当前会员个人信息 POST /member/profile/update-member-profile */
export async function memberProfileUpdateMemberProfile2(
  body: {
    /** 昵称 */
    nickname?: string;
    /** 头像URL地址 */
    avatar?: string;
    /** 性别枚举: MALE 男性: FEMALE 女性: UNKNOWN 未知； */
    gender?: string;
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
    account: string;
    phoneAreaCode: string;
    phone: string;
    nickname: string;
    avatar: string;
    gender: string;
    identity: string;
    lastAccessTime: string;
    memberFlag: number;
    freeze: boolean;
    freezeReason: string;
    timezone: number;
    virtualUser: boolean;
    appSignIn: boolean;
    freepass: boolean;
  }>('/member/profile/update-member-profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
