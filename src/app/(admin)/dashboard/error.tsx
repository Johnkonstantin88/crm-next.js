'use client';

import Button from '@/app/components/button';
import { FC } from 'react';

export interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}

const Error: FC<ErrorComponentProps> = ({ error, reset }) => {
  return (
    <div>
      <p>{`Something went wrong. ${error.message}`}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
};

export default Error;
