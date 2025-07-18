/*
 * @Date: 2023-12-18 14:37:38
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-17 19:56:04
 * @FilePath: /snapx-nfc-app/packages/app/pages/my/privacy/index.tsx
 */
import { AppHeader, AppHeaderProps, HeaderBackButton, Paragraph, YStack } from '@my/ui';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PermissionPage from 'app/Components/PermissionPage';

// 服务条款
const PrivacyScreen = () => {
  const {t} = useTranslation();
  const HeaderLeft: AppHeaderProps['headerRight'] = () => <HeaderBackButton fallbackUrl="/my"></HeaderBackButton>;
  return (
    <PermissionPage>
      <AppHeader title={t('screen.privacy.title')} headerLeft={HeaderLeft} />
      <YStack>
        <Paragraph> privacy 服务条款</Paragraph>
      </YStack>
    </PermissionPage>
  );
};
export default PrivacyScreen;
