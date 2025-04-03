import React, { FC } from 'react';
import Header from '@/app/components/header';

export interface PageProps {
  params: Promise<{ id: string }>;
}

const Page: FC<PageProps> = async ({ params }) => {
  const { id } = await params;
  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${id})`}</p>
    </div>
  );
};

export default Page;
