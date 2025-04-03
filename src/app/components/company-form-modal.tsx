'use client';

import { FC } from 'react';
import CompanyForm, { CompanyFormProps } from '@/app/components/company-form';
import Modal, { ModalProps } from '@/app/components/modal';

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
