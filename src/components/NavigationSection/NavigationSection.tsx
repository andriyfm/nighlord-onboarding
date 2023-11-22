import Image from "next/image";
import { BackButton } from "./BackButton";
import { Heading } from "./Heading";

export const NavigationSection = () => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3">
        <BackButton />
        <Heading />
      </div>
    </section>
  );
};
