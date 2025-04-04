import { FC } from 'react';
import Toolbar from '@/app/components/toolbar';
import SearchInput from '@/app/components/search-input';
import AddCompanyButton from '@/app/components/add-company-button';

export interface PageProps {}

const Page: FC<PageProps> = () => {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
};

export default Page;
