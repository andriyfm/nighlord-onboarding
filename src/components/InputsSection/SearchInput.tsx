import Image from "next/image";

export const SearchInput = () => {
  return (
    <div className="px-3 py-[10px] flex justify-between items-center gap-[10px] w-[255px] bg-[#171717] border border-solid border-[#333] rounded">
      <input
        type="text"
        placeholder="Search product"
        className="p-0 bg-transparent text-sm font-normal leading-5 placeholder:text-[#898E9A] w-full outline-none"
      />
      <Image src="/search.svg" alt="arrow-left" width={20} height={20} />
    </div>
  );
};
