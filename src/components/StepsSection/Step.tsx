import { FC, useMemo } from "react";
import cls from "classnames";

interface Props {
  text: string;
  isNextButton?: boolean;
  isActive?: boolean;
}

export const Step: FC<Props> = ({ text, isNextButton, isActive }) => {
  return (
    <button
      className={cls(
        "flex py-3 px-0 items-center justify-center gap-[10px] border-t-4 border-solid bg-[#1E1E1E]",
        !isActive && !isNextButton && "border-[#262626]",
        isNextButton && "bg-[#AB5CFA] border-none",
        isActive && "border-[#EF9533]"
      )}
    >
      <span
        className={cls(
          "text-center text-sm font-medium leading-[18.62px] tracking-[0.056px]",
          !isActive && !isNextButton && "text-[#9F9E9F]",
          isActive && "text-[#EF9533]",
          isNextButton && "text-[#FCFCFC]"
        )}
      >
        {text}
      </span>
    </button>
  );
};

Step.defaultProps = {
  isNextButton: false,
  isActive: false,
};
