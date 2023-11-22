import React, { createContext, useReducer, useContext, ReactNode } from "react";

// Inisialisasi Konteks
interface ProductContextProps {
  children: ReactNode;
}

interface Product {
  id: number;
  name: string;
}

interface ProductState {
  products: Product[];
}

interface ProductContextValue extends ProductState {
  addProduct: (product: Product) => void;
}

const ProductContext = createContext<ProductContextValue | undefined>(
  undefined
);

// Inisialisasi Fungsi untuk Mengonsumsi Konteks
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

// Inisialisasi State Awal
const initialState: ProductState = {
  products: [],
};

// Definisikan Aksi (Actions)
type ProductAction = { type: "ADD_PRODUCT"; payload: Product };

// Reducer untuk Memanipulasi State
const productReducer = (
  state: ProductState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

// Buat Provider Konteks
export const ProductProvider: React.FC<ProductContextProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  // Fungsi untuk Menambah Produk
  const addProduct = (product: Product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };

  // Nilai yang Disediakan oleh Konteks
  const contextValue: ProductContextValue = {
    products: state.products,
    addProduct,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
