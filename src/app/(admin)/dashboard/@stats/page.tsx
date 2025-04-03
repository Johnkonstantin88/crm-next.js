import { FC } from 'react';
import { getSummaryStats, SummaryStats } from '@/lib/api';
import StatCard, { StatCardType } from '@/app/components/stat-card';

export interface PageProps {}

const labelByStat = {
  promotions: 'Total promotions',
  categories: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};

const Page: FC<PageProps> = async ({}) => {
  const data = await getSummaryStats({
    next: {
      revalidate: 5,
    },
  });

  return (
    <div className="grid grid-cols-12 gap-5">
      {(Object.keys(labelByStat) as (keyof SummaryStats)[]).map(key => (
        <div key={key} className="col-span-3">
          <StatCard
            type={StatCardType.Gradient}
            label={labelByStat[key]}
            counter={data[key]}
          />
        </div>
      ))}
    </div>
  );
};

export default Page;
