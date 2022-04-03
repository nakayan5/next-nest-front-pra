import React, { FC, memo, Suspense } from 'react';
import { TopContextProvider } from '@/context/top';

export const Top: FC = () => {
  return <TopContextProvider />;
};

export default Top;
