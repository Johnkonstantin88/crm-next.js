import { FC } from 'react';
import Header from '@/app/components/header';

export interface PageProps {
  params: Promise<{ id: string }>;
}

const Page: FC<PageProps> = async ({ params }) => {
  const { id } = await params;
  return <Header>{`Company (${id})`}</Header>;
};

export default Page;
