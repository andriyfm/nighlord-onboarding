import Image from "next/image";

export const ProductCard = () => {
  return (
    <div className="flex w-[228px] p-4 flex-col justify-center items-start gap-3 bg-[#1B1B1B] rounded-lg">
      <div className="text-base text-[#EFF0F2] font-medium leading-[22.88px] tracking-[0.04px]">
        15.000 NT
      </div>

      <div className="rounded-lg h-[153px] object-cover w-full">
        <Image src="/beer.png" width={196} height={153} alt="beer" />
      </div>

      <div className="flex flex-col items-start self-stretch gap-[13px]">
        <div className="text-base font-bold leading22.88px] tracking-[0.04px]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[rgba(160,96,250,22.29)] to-[rgba(200,0,204,81.69)]">
            Pack of Beer (6pcs of heineken)
          </span>
        </div>

        <div className="text-sm text-[#9F9E9F] font-normal leading-[18.62px] tracking-[0.056px]">
          Heineken lager beer, or known as just Heineken, is one of the pale
          beers with 5% alcohol.
        </div>

        <div className="text-sm text-[#EFF0F2] font-bold leading-[18.62px] tracking-[0.056px]">
          6pcs
        </div>
      </div>
    </div>
  );
};
