'use client';

import { FC, useMemo } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const Providers: FC<{ children: React.ReactNode }> = ({ children }) => {
  const client = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Providers;
