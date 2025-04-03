'use client';

import { FC } from 'react';
import CompanyForm from '@/app/components/company-form';

export interface PageProps {}

const Page: FC<PageProps> = () => {
  return (
    <div className="py-6 px-10">
      <CompanyForm onSubmit={console.log} />
    </div>
  );
};

export default Page;
