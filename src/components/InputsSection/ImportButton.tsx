import Image from "next/image";

export const ImportButton = () => {
  return (
    <button className="flex items-center justify-center gap-2 px-[10px] py-2 rounded border border-solid border-[#FCFCFC] w-[140px]">
      <Image src="/upload.svg" alt="arrow-left" width={16} height={16} />
      <p className="text-[14px] font-normal leading-[18.62px] tracking-[0.056px]">
        Import
      </p>
    </button>
  );
};
