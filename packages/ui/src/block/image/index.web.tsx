/*
 * @Date: 2023-12-26 14:19:17
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-12 17:57:30
 * @FilePath: /snapx-nfc-app/packages/ui/src/block/image/index.web.tsx
 */
import {forwardRef} from 'react';

import {AppImageProps} from './shared';

export const AppImage = forwardRef<HTMLImageElement | null, AppImageProps>(function Image({web, type}, ref) {
  if (!web) {
    throw Error('You must pass web prop into Image component!');
  }

  const _web =
    type === 'local'
      ? {
          height: web?.height,
          width: web?.width,
          src: web?.src?.default?.src,
        }
      : web;
  return <img ref={ref} {..._web} />;
});
