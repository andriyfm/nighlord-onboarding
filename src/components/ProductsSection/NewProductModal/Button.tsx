import { FC, ReactNode } from "react";
import { Poppins } from "next/font/google";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button
      className={`${poppins.className} antialiased text-base text-white font-medium leading-[22.88px] tracking-[0.04px] w-full flex px-3 py-2 justify-center items-center gap-2 rounded-md bg-gradient-to-r from-[rgba(160,96,250,22.29)] to-[rgba(200,0,204,81.69)]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
