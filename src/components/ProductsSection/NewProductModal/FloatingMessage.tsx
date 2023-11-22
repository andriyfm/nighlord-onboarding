export const FloatingMessage = () => {
  return (
    <div className="flex w-[220px] p-[20px] flex-col items-start rounded-[8px] bg-gradient-to-r from-[rgba(160,96,250,22.29)] to-[rgba(200,0,204,81.69)] absolute top-0 left-[calc(100%+27px)] gap-4">
      <p className="text-base text-[#F6F6F6] font-bold leading-[22.88px] tracking-[0.04px]">
        Looking for variant ?
      </p>
      <p className="text-sm text-[#F6F6F6] font-medium leading-[18.62px] tracking-[0.056p]">
        <span>Don’t worry!!</span>
        <br />
        <br />
        <span>
          size, sugar level, ice level will be unlocked if you already approved
          by admin.
        </span>
      </p>
    </div>
  );
};
