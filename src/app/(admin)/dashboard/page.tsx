import { FC } from 'react';
import Header from '@/app/components/header';

export interface PageProps {}

const Page: FC<PageProps> = () => {
  return (
    <>
      <Header>Dashboard</Header>
    </>
  );
};

export default Page;
