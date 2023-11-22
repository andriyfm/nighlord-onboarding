import { Dialog } from "@headlessui/react";
import { FC } from "react";
import { ButtonCloseModal } from "./ButtonCloseModal";
import { FloatingMessage } from "./FloatingMessage";
import { FormNewProduct } from "./FormNewProduct";
import { Heading } from "./Heading";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const NewProductModal: FC<Props> = ({ isOpen, onClose }) => {
  const handleAddProduct = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-[#171717CC]/80" aria-hidden="true" />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="flex w-[600px] px-[38px] py-[32px] items-center gap-[10px] bg-[#222] rounded-lg relative">
          <ButtonCloseModal onClick={onClose} />

          <FloatingMessage />

          <div className="flex flex-col items-start gap-7 w-full">
            <Heading />
            <FormNewProduct onSubmit={handleAddProduct} />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
