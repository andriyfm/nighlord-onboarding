import Image from "next/image";

export const Heading = () => {
  return (
    <div className="flex items-center gap-[10px] justify-center">
      <Image src="/box.svg" alt="box" width={24} height={24} />
      <h6 className="text-[24px] font-medium leading-[31.92px] tracking-[-0.48px]">
        Product List
      </h6>
    </div>
  );
};
