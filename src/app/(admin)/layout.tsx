import Sidebar from '@/app/components/sidebar';
import { FC } from 'react';

export interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
};

export default Layout;
