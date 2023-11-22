"use client";

import Image from "next/image";
import { useState } from "react";
import { NewProductModal } from "./NewProductModal/NewProductModal";

export const UploadProductButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="flex w-[228px] min-h-[206px] p-4 flex-col justify-center items-center gap-3 rounded-xl border-[2px] border-dashed border-[#313131] bg-[#1E1E1E]"
        onClick={() => setIsOpen(true)}
      >
        <Image src="/plus.svg" alt="arrow-left" width={24} height={24} />
        <div className="text-base font-medium leading-[22.88px] tracking-[0.04px]">
          Add New Product
        </div>
      </button>

      <NewProductModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
