import Image from "next/image";

export const BackButton = () => {
  return (
    <button className="flex items-center gap-1">
      <Image src="/arrow-left.svg" alt="arrow-left" width={20} height={20} />
      <p className="text-[18px] font-semibold leading-[27px] tracking-[0.09px]">
        Back
      </p>
    </button>
  );
};
