import { FC } from 'react';
import Header from '@/app/components/header';

export interface PageProps {}

const Page: FC<PageProps> = () => {
  return <Header>Add new company</Header>;
};

export default Page;
