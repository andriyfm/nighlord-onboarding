import { Listbox } from "@headlessui/react";
import cls from "classnames";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { FC, Fragment, useState } from "react";

const people = [
  { id: 0, name: "Select category", unavailable: false },
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

interface Props {
  label: string;
}

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const Selection: FC<Props> = ({ label }) => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <div className="flex flex-col gap-1 items-start w-full">
      <label
        htmlFor={label}
        className={`text-[#C9CACB] text-sm font-medium leading-[18.62px] tracking-[0.056px] ${poppins.className} antialiased`}
      >
        <span>{label}</span>
      </label>

      <Listbox
        value={selectedPerson}
        onChange={setSelectedPerson}
        as="div"
        className="relative w-full"
      >
        <Listbox.Button className="w-full px-3 py-[10px] rounded border border-solid border-[#323232] bg-[#1A1A1A] flex items-center justify-between">
          <span className="text-[#EFF0F2] text-left text-sm font-normal leading-[20px]">
            {selectedPerson.name}
          </span>
          <Image
            src="/chevron-down.svg"
            alt="chevron-down"
            width={20}
            height={20}
          />
        </Listbox.Button>

        <Listbox.Options className="absolute top-[calc(100%+4px)] w-full rounded border border-solid border-[#323232] overflow-hidden">
          {people.map((person) => (
            <Listbox.Option key={person.id} value={person} as={Fragment}>
              {({ active, selected }) => (
                <li
                  className={cls(
                    "bg-[#191919] text-[#EFF0F2] px-3 py-[10px] hover:bg-[#222222] cursor-pointer text-sm leading-[20px]",
                    selected && "bg-[#222222] font-bold text-[#AA5AFA]"
                  )}
                >
                  {selected}
                  {person.name}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};
