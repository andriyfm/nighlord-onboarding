import { Poppins } from "next/font/google";
import Image from "next/image";
import { FC } from "react";

interface Props {
  label: string;
}

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const SwitchToggle: FC<Props> = ({ label }) => {
  return (
    <div className="flex items-center justify-between self-stretch">
      <label
        className={`${poppins.className} antialiased text-sm font-medium leading-[18.62px] tracking-[0.056px] text-[#C9CACB]`}
      >
        {label}
      </label>

      <Image src="/switch.svg" alt="arrow-left" width={32} height={16} />
    </div>
  );
};
