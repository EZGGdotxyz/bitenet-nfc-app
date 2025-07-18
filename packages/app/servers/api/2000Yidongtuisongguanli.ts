// @ts-ignore
/* eslint-disable */
import request from 'app/utils/request';

/** 测试向当前用户推送消息 POST /infra/pushing/aws/publish-message */
export async function pushingPublishMessage(
  body: {
    message: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/infra/pushing/aws/publish-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 测试向当前用户推送消息 POST /infra/pushing/aws/publish-message */
export async function pushingPublishMessage2(
  body: {
    message: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/infra/pushing/aws/publish-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 注册移动推送设备 POST /infra/pushing/aws/register-device */
export async function pushingRegisterDevice(
  body: {
    /** 应用平台枚举：SNAPX_APP_IOS 苹果端； SNAPX_APP_ANDROID 安卓端 */
    platform: string;
    /** 设备token或者id */
    deviceToken: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/infra/pushing/aws/register-device', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 注册移动推送设备 POST /infra/pushing/aws/register-device */
export async function pushingRegisterDevice2(
  body: {
    /** 应用平台枚举：SNAPX_APP_IOS 苹果端； SNAPX_APP_ANDROID 安卓端 */
    platform: string;
    /** 设备token或者id */
    deviceToken: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/infra/pushing/aws/register-device', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
