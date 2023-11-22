import Image from "next/image";
import { SelectedCategory } from "./SelectedCategory";

const SELECTED_CATEGORIES = [
  "Cocktail",
  "Shooters",
  "Premium Spirits",
  "Premium Spirits",
];

export const CategoriesSection = () => {
  return (
    <section className="flex px-8 py-4 flex-col justify-center items-start gap-8 self-stretch bg-[#1E1E1E] rounded-xl">
      <div className="flex gap-6 items-center w-[677px]">
        <div className="flex items-center gap-3">
          <p className="text-[14px]">Category</p>
          {SELECTED_CATEGORIES.map((item, index) => (
            <SelectedCategory key={index} text={item} />
          ))}
        </div>
        <button>
          <Image src="/pencil.svg" alt="arrow-left" width={20} height={20} />
        </button>
      </div>
    </section>
  );
};
