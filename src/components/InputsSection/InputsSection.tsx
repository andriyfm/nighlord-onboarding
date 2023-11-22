import { ImportButton } from "./ImportButton";
import { SearchInput } from "./SearchInput";

export const InputsSection = () => {
  return (
    <section className="flex justify-between items-center self-stretch w-full">
      <SearchInput />
      <ImportButton />
    </section>
  );
};
