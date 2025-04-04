import { FC } from 'react';

export interface SummaryTableProps {
  headers: React.ReactNode;
  children?: React.ReactNode;
}

const SummaryTable: FC<SummaryTableProps> = ({ headers, children }) => {
  return (
    <table className="table-auto w-full border-separate border-spacing-0">
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody className="[&>tr:nth-child(2n)]:bg-white [&>tr:nth-child(2n+1)]:bg-gray-100">
        {children}
      </tbody>
    </table>
  );
};

export default SummaryTable;
