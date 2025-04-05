'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/button';

export interface AddPromotionButtonProps {
  companyId: string;
}

const AddPromotionButton: FC<AddPromotionButtonProps> = ({ companyId }) => {
  const router = useRouter();

  return (
    <Button
      onClick={() =>
        router.push(`/companies/${companyId}/new-promotion`, { scroll: false })
      }
    >
      Add promotions
    </Button>
  );
};

export default AddPromotionButton;
