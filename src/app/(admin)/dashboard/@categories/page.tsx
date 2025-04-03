import { FC } from 'react';
import { getSummaryCategories } from '@/lib/api';
import StatCard, { StatCardType } from '@/app/components/stat-card';
import DashboardCard from '@/app/components/dashboard-card';

export interface PageProps {}

const Page: FC<PageProps> = async ({}) => {
  const data = await getSummaryCategories();

  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5 ">
        {data.map(({ categoryId, categoryTitle, count }) => (
          <div
            key={categoryId}
            className="col-span-3 [&>*]: odd:text-purple-200 even:text-lime-200"
          >
            <StatCard
              type={StatCardType.Dark}
              label={categoryTitle}
              counter={count}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
};

export default Page;
