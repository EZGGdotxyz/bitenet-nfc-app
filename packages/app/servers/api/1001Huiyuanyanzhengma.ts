// @ts-ignore
/* eslint-disable */
import request from 'app/utils/request';

/** 发送绑定手机号验证码 POST /member/captcha/send-bind-phone-code */
export async function memberCaptchaSendBindPhoneCode(
  body: {
    /** 电话区号 */
    phoneAreaCode: string;
    /** 电话号码 */
    phone: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    app: 'ADMIN' | 'CUSTOMER' | 'RESTAURANT';
    scene: 'SIGN_UP' | 'SIGN_IN' | 'MODIFY_PASSWORD' | 'FORGOT_PASSWORD' | 'BIND_PHONE';
    channel: 'EMAIL' | 'SMS';
    receiver: string;
    expireAt: string;
  }>('/member/captcha/send-bind-phone-code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发送绑定手机号验证码 POST /member/captcha/send-bind-phone-code */
export async function memberCaptchaSendBindPhoneCode2(
  body: {
    /** 电话区号 */
    phoneAreaCode: string;
    /** 电话号码 */
    phone: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    app: 'ADMIN' | 'CUSTOMER' | 'RESTAURANT';
    scene: 'SIGN_UP' | 'SIGN_IN' | 'MODIFY_PASSWORD' | 'FORGOT_PASSWORD' | 'BIND_PHONE';
    channel: 'EMAIL' | 'SMS';
    receiver: string;
    expireAt: string;
  }>('/member/captcha/send-bind-phone-code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发送忘记密码验证码 POST /member/captcha/send-forgot-password-code */
export async function memberCaptchaSendForgotPasswordCode(
  body: {
    /** 电话区号 */
    phoneAreaCode: string;
    /** 电话号码 */
    phone: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    app: 'ADMIN' | 'CUSTOMER' | 'RESTAURANT';
    scene: 'SIGN_UP' | 'SIGN_IN' | 'MODIFY_PASSWORD' | 'FORGOT_PASSWORD' | 'BIND_PHONE';
    channel: 'EMAIL' | 'SMS';
    receiver: string;
    expireAt: string;
  }>('/member/captcha/send-forgot-password-code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发送忘记密码验证码 POST /member/captcha/send-forgot-password-code */
export async function memberCaptchaSendForgotPasswordCode2(
  body: {
    /** 电话区号 */
    phoneAreaCode: string;
    /** 电话号码 */
    phone: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    app: 'ADMIN' | 'CUSTOMER' | 'RESTAURANT';
    scene: 'SIGN_UP' | 'SIGN_IN' | 'MODIFY_PASSWORD' | 'FORGOT_PASSWORD' | 'BIND_PHONE';
    channel: 'EMAIL' | 'SMS';
    receiver: string;
    expireAt: string;
  }>('/member/captcha/send-forgot-password-code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发送修改密码验证码 POST /member/captcha/send-modify-password-code */
export async function memberCaptchaSendModifyPasswordCode(options?: { [key: string]: any }) {
  return request<{
    app: 'ADMIN' | 'CUSTOMER' | 'RESTAURANT';
    scene: 'SIGN_UP' | 'SIGN_IN' | 'MODIFY_PASSWORD' | 'FORGOT_PASSWORD' | 'BIND_PHONE';
    channel: 'EMAIL' | 'SMS';
    receiver: string;
    expireAt: string;
  }>('/member/captcha/send-modify-password-code', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 发送修改密码验证码 POST /member/captcha/send-modify-password-code */
export async function memberCaptchaSendModifyPasswordCode2(options?: { [key: string]: any }) {
  return request<{
    app: 'ADMIN' | 'CUSTOMER' | 'RESTAURANT';
    scene: 'SIGN_UP' | 'SIGN_IN' | 'MODIFY_PASSWORD' | 'FORGOT_PASSWORD' | 'BIND_PHONE';
    channel: 'EMAIL' | 'SMS';
    receiver: string;
    expireAt: string;
  }>('/member/captcha/send-modify-password-code', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 发送登录验证码 POST /member/captcha/send-sign-in-code */
export async function memberCaptchaSendSignInCode(
  body: {
    /** 电话区号 */
    phoneAreaCode: string;
    /** 电话号码 */
    phone: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    app: 'ADMIN' | 'CUSTOMER' | 'RESTAURANT';
    scene: 'SIGN_UP' | 'SIGN_IN' | 'MODIFY_PASSWORD' | 'FORGOT_PASSWORD' | 'BIND_PHONE';
    channel: 'EMAIL' | 'SMS';
    receiver: string;
    expireAt: string;
  }>('/member/captcha/send-sign-in-code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发送登录验证码 POST /member/captcha/send-sign-in-code */
export async function memberCaptchaSendSignInCode2(
  body: {
    /** 电话区号 */
    phoneAreaCode: string;
    /** 电话号码 */
    phone: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    app: 'ADMIN' | 'CUSTOMER' | 'RESTAURANT';
    scene: 'SIGN_UP' | 'SIGN_IN' | 'MODIFY_PASSWORD' | 'FORGOT_PASSWORD' | 'BIND_PHONE';
    channel: 'EMAIL' | 'SMS';
    receiver: string;
    expireAt: string;
  }>('/member/captcha/send-sign-in-code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发送注册验证码 POST /member/captcha/send-sign-up-code */
export async function memberCaptchaSendSignUpCode(
  body: {
    /** 电话区号 */
    phoneAreaCode: string;
    /** 电话号码 */
    phone: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    app: 'ADMIN' | 'CUSTOMER' | 'RESTAURANT';
    scene: 'SIGN_UP' | 'SIGN_IN' | 'MODIFY_PASSWORD' | 'FORGOT_PASSWORD' | 'BIND_PHONE';
    channel: 'EMAIL' | 'SMS';
    receiver: string;
    expireAt: string;
  }>('/member/captcha/send-sign-up-code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发送注册验证码 POST /member/captcha/send-sign-up-code */
export async function memberCaptchaSendSignUpCode2(
  body: {
    /** 电话区号 */
    phoneAreaCode: string;
    /** 电话号码 */
    phone: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    app: 'ADMIN' | 'CUSTOMER' | 'RESTAURANT';
    scene: 'SIGN_UP' | 'SIGN_IN' | 'MODIFY_PASSWORD' | 'FORGOT_PASSWORD' | 'BIND_PHONE';
    channel: 'EMAIL' | 'SMS';
    receiver: string;
    expireAt: string;
  }>('/member/captcha/send-sign-up-code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 校验注册验证码 POST /member/captcha/verify-sign-up-code */
export async function memberCaptchaVerifySignUpCode(
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
  return request<{ valid: boolean }>('/member/captcha/verify-sign-up-code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 校验注册验证码 POST /member/captcha/verify-sign-up-code */
export async function memberCaptchaVerifySignUpCode2(
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
  return request<{ valid: boolean }>('/member/captcha/verify-sign-up-code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
