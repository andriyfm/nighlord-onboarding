"use client";

import * as UI from "@/components";
import { ProductProvider } from "@/contexts/ProductContext";

export default function Home() {
  return (
    <ProductProvider>
      <main className="min-h-screen pt-[32px]">
        <UI.NavigationSection />
        <div className="w-[1018px] mx-auto flex flex-col gap-6 items-start justify-center mt-[68px] flex-1">
          <UI.InputsSection />
          <UI.CategoriesSection />
          <UI.ProductsSection />
        </div>
        <UI.StepsSection />
      </main>
    </ProductProvider>
  );
}
