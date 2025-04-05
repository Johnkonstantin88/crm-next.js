'use client';

import { FC } from 'react';
import PromotionForm from '@/app/components/promotion-form';
import Modal, { ModalProps } from '@/app/components/modal';

export interface PromotionFormModalProps extends ModalProps {
  companyId: string;
}

const PromotionFormModal: FC<PromotionFormModalProps> = ({
  companyId,
  onClose,
  ...rest
}) => {
  return (
    <Modal {...rest} onClose={onClose}>
      <PromotionForm companyId={companyId} onSubmit={() => onClose()} />
    </Modal>
  );
};

export default PromotionFormModal;
