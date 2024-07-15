'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from './Loading';

const PageTransitionClient = dynamic(() => import('./PageTransitionClient'), {
  ssr: false,
  loading: () => <Loading />
});

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Loading />}>
      <PageTransitionClient>{children}</PageTransitionClient>
    </Suspense>
  );
}