import { Poppins } from "next/font/google";
import { FC, useRef } from "react";
import cls from "classnames";

interface Props {
  label: string;
  placeholder: string;
  isRequired?: boolean;
  withGrayBorder?: boolean;
}

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const InputFile: FC<Props> = ({
  label,
  placeholder,
  isRequired,
  withGrayBorder,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef?.current?.click();
  };

  return (
    <div className="flex flex-col gap-1 items-start w-full">
      <label
        htmlFor={label}
        className={`text-[#C9CACB] text-sm font-medium leading-[18.62px] tracking-[0.056px] ${poppins.className} antialiased`}
      >
        <span>{label}</span>
        {isRequired && <span className="text-[#F47566]">*</span>}
      </label>
      <button
        className={cls(
          "w-full flex items-center self-stretch gap-2 px-3 py-[10px] border border-solid bg-[#1A1A1A] rounded",
          withGrayBorder ? "border-[#323232]" : "border-[#1A1A1A]"
        )}
        onClick={handleClick}
      >
        <span
          className={`${poppins.className} antialiased text-sm font-normal leading-[20px] text-[#EFF0F2]`}
        >
          {placeholder}
        </span>
        <input
          className={cls(
            "w-full text-[#EFF0F2] text-sm font-medium leading-[18.62px] tracking-[0.056px] p-0 outline-none bg-transparent placeholder:text-[#41444D]"
          )}
          ref={inputRef}
          hidden
          type="file"
          placeholder={placeholder}
        />
      </button>
    </div>
  );
};

InputFile.defaultProps = {
  isRequired: false,
  withGrayBorder: false,
};
