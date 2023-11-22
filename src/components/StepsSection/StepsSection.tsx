import { Step } from "./Step";

export const StepsSection = () => {
  return (
    <section className="grid grid-cols-6 w-full fixed bottom-0 left-0 right-0">
      <Step text="Nightclub Profile" isActive />
      <Step text="Featured" isActive />
      <Step text="Beverages" isActive />
      <Step text="Table Information" />
      <Step text="Operational Hour" />
      <Step text="NEXT" isNextButton />
    </section>
  );
};
