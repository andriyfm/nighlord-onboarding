"use client";

import Image from "next/image";
import { useState } from "react";
import { NewProductModal } from "./NewProductModal/NewProductModal";
import cls from "classnames";
import { useProductContext } from "@/contexts/ProductContext";

export const UploadProductButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { products } = useProductContext();

  return (
    <>
      <button
        className={cls(
          "flex w-[228px] p-4 flex-col justify-center items-center gap-3 rounded-xl bg-[#1E1E1E] self-stretch",
          products.length === 0 &&
            "h-[206px] border-[2px] border-dashed border-[#313131]"
        )}
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
