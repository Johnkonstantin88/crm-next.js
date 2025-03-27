'use client';

import dynamic from 'next/dynamic';
import Button from '@/app/components/button';
import { useState, FC } from 'react';

const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});

const AddCompanyButton = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
};

export default AddCompanyButton;
