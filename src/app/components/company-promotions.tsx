'use client';

import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPromotions } from '@/lib/api';
import Promotion from '@/app/components/promotion';

export interface CompanyPromotionsProps {
  companyId: string;
}

const CompanyPromotions: FC<CompanyPromotionsProps> = ({ companyId }) => {
  const { data } = useQuery({
    queryKey: ['promotions', companyId],
    queryFn: () => getPromotions({ companyId }),
    staleTime: 10 * 1000,
  });

  return (
    <div className="grid grid-cols-12 gap-5">
      {data?.map(promotion => (
        <div key={promotion.id} className="col-span-4">
          <Promotion promotion={promotion} />
        </div>
      ))}
    </div>
  );
};

export default CompanyPromotions;
