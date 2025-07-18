/*
 * @Date: 2023-12-18 14:37:38
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-17 19:55:36
 * @FilePath: /snapx-nfc-app/packages/app/pages/my/about_us/index.tsx
 */
import { AppHeader, AppHeaderProps, HeaderBackButton, Paragraph, YStack } from '@my/ui';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PermissionPage from 'app/Components/PermissionPage';

// 关于我们
const AboutUsScreen = () => {
  const {t} = useTranslation();
  const HeaderLeft: AppHeaderProps['headerRight'] = () => <HeaderBackButton fallbackUrl="/my"></HeaderBackButton>;
  return (
    <PermissionPage>
      <AppHeader title={t('screen.about_us.title')} headerLeft={HeaderLeft} />
      <YStack>
        <Paragraph> about_us 关于我们</Paragraph>
      </YStack>
    </PermissionPage>
  );
};
export default AboutUsScreen;
