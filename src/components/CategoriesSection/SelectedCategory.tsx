import { FC } from "react";

interface Props {
  text: string;
}

export const SelectedCategory: FC<Props> = ({ text }) => {
  return (
    <button className="flex px-4 py-2 justify-center items-center gap-[10px] rounded-xl border border-solid border-[#EEE]">
      <span className="text-[14px] font-medium leading-[18.62px] tracking-[0.056px] text-[#F6F6F6]">
        {text}
      </span>
    </button>
  );
};
