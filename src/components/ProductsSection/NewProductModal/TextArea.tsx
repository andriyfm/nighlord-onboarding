import { Poppins } from "next/font/google";
import { FC } from "react";

interface Props {
  label: string;
  placeholder: string;
  isRequired?: boolean;
}

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const TextArea: FC<Props> = ({ label, placeholder, isRequired }) => {
  return (
    <div className="flex flex-col gap-1 items-start w-full">
      <label
        htmlFor={label}
        className={`text-[#C9CACB] text-sm font-medium leading-[18.62px] tracking-[0.056px] ${poppins.className} antialiased`}
      >
        <span>{label}</span>
        {isRequired && <span className="text-[#F47566]">*</span>}
      </label>
      <textarea
        className="flex px-3 py-[10px] items-start gap-[54px] self-stretch rounded border border-solid border-[#1A1A1A] bg-[#1A1A1A] resize-none w-full outline-none text-sm leading-[20px] font-normal placeholder:text-[#898E9A]"
        placeholder={placeholder}
      />
    </div>
  );
};

TextArea.defaultProps = {
  isRequired: false,
};
