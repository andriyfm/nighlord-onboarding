import { Poppins } from "next/font/google";
import { FC } from "react";
import cls from "classnames";

interface Props {
  label: string;
  placeholder: string;
  isRequired?: boolean;
  withGrayBorder?: boolean;
  unit?: string;
  type?: "text" | "number";
}

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const InputText: FC<Props> = ({
  label,
  placeholder,
  isRequired,
  withGrayBorder,
  unit,
  type,
}) => {
  return (
    <div className="flex flex-col gap-1 items-start">
      <label
        htmlFor={label}
        className={`text-[#C9CACB] text-sm font-medium leading-[18.62px] tracking-[0.056px] ${poppins.className} antialiased`}
      >
        <span>{label}</span>
        {isRequired && <span className="text-[#F47566]">*</span>}
      </label>
      <div
        className={cls(
          "w-full flex items-center self-stretch gap-2 px-3 py-[10px] border border-solid bg-[#1A1A1A] rounded",
          withGrayBorder ? "border-[#323232]" : "border-[#1A1A1A]"
        )}
      >
        {unit && (
          <span
            className={`${poppins.className} antialiased text-sm font-semibold text-[#FCFCFD] leading-[18.62px] tracking-[0.056px]`}
          >
            {unit}
          </span>
        )}
        <input
          className={cls(
            "w-full text-[#EFF0F2] text-sm font-medium leading-[18.62px] tracking-[0.056px] p-0 outline-none bg-transparent placeholder:text-[#41444D]"
          )}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

InputText.defaultProps = {
  isRequired: false,
  withGrayBorder: false,
  unit: "",
  type: "text",
};
