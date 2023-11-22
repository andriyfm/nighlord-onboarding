import Image from "next/image";
import { FC } from "react";

interface Props {
  onClick: () => void;
}

export const ButtonCloseModal: FC<Props> = ({ onClick }) => {
  return (
    <button className="absolute top-4 right-4" onClick={onClick}>
      <Image src="/x.svg" alt="arrow-left" width={24} height={24} />
    </button>
  );
};
