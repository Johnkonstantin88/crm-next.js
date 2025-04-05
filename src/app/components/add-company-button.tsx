'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/button';

const AddCompanyButton: FC = () => {
  const router = useRouter();

  return (
    <Button onClick={() => router.push('/companies/new', { scroll: false })}>
      Add company
    </Button>
  );
};

export default AddCompanyButton;
