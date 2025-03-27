'use client';

import CompanyForm, { CompanyFormProps } from '@/app/components/company-form';
import Modal, { ModalProps } from '@/app/components/modal';
import { FC } from 'react';

export interface CompanyFormModalProps extends ModalProps {
  onSubmit: CompanyFormProps['onSubmit'];
}

const CompanyFormModal: FC<CompanyFormModalProps> = ({ onSubmit, ...rest }) => {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
};

export default CompanyFormModal;
