'use client';

import { FC } from 'react';

export interface GlobalErrorProps {}

const GlobalError: FC<GlobalErrorProps> = () => {
  return (
    <html>
      <body>
        <div>
          <p>Something globally went wrong</p>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
