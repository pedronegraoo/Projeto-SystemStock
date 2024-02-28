import { createContext, useState } from "react";

export const StockContext = createContext({});

type ProviderProps = {
  children: React.ReactNode;
};

export interface ProviderFunctions {
  addProduct: Function;
  getProduct: Function;
  updateProduct: Function;
  deleteProduct: Function;
  // addProduct: (product: ProductProps) => void;
  // deleteProduct: (id: string) => void;
  // updateProduct: (id: string, product: ProductProps) => void;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export function Provider({ children }: ProviderProps) {
  const [products, setProducts] = useState(() => {
    const storeProducts = localStorage.getItem("System");
    if (!storeProducts) return [];
    const product = JSON.parse(storeProducts);

    product.forEach((prod: Product) => {
      prod.createdAt = new Date(prod.createdAt).toISOString();
      prod.updatedAt = new Date(prod.updatedAt).toISOString();
    });

    // console.log(product);

    return product;
  });

  function addProduct(product: Product) {
    const store = product;

    setProducts((state: Product[]) => {
      const newState = [store, ...state];

      localStorage.setItem("System", JSON.stringify(newState));
      return newState;
    });
  }

  function deleteProduct(id: number) {
    setProducts((state: Product[]) => {
      const newState = state.filter((product) => product.id !== id);
      localStorage.setItem("System", JSON.stringify(newState));
      return newState;
    });
  }

  function getProduct(id: number) {
    return products.find((prod: Product) => prod.id === id);
  }

  function updateProduct(id: number, newAttributes: Product) {
    setProducts((state: Product[]) => {
      const index = state.findIndex((prod) => prod.id === id);
      // const newState = [...state];
      // Object.assign(newState[index], newAttributes, { updateAt: new Date() });
      // localStorage.setItem("System", JSON.stringify(newState));
      // return newState;

      // OUTRA FORMA
      state.splice(index, 1);
      const newState = [newAttributes, ...state];
      localStorage.setItem("System", JSON.stringify(newState));
      return newState;
    });
  }

  const value = {
    products,
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct,
  };

  return (
    <StockContext.Provider value={value}>{children}</StockContext.Provider>
  );
}
