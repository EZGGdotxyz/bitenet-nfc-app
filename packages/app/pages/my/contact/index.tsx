 /*
 * @Date: 2023-12-18 14:37:38
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-17 19:55:43
 * @FilePath: /snapx-nfc-app/packages/app/pages/my/contact/index.tsx
 */
 import { AppHeader, AppHeaderProps, HeaderBackButton, Paragraph, YStack } from '@my/ui';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PermissionPage from 'app/Components/PermissionPage';

 // 联系我们
 const ContactScreen = () => {
   const {t} = useTranslation();
   const HeaderLeft: AppHeaderProps['headerRight'] = () => <HeaderBackButton fallbackUrl="/my"></HeaderBackButton>;
   return (
     <PermissionPage>
       <AppHeader title={t('screen.contact.title')} headerLeft={HeaderLeft} />
       <YStack>
       <Paragraph> contact 联系我们</Paragraph>
       </YStack>
     </PermissionPage>
   );
 };
 export default ContactScreen;
