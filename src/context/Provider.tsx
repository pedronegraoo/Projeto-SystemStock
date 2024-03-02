import React, { createContext, useEffect, useState } from "react";

export const StockContext = createContext({});

type ProviderProps = {
  children: React.ReactNode;
};

export interface ProviderAllProps {
  products: Product[];

  addProduct: Function;
  getProduct: Function;
  updateProduct: Function;
  deleteProduct: Function;

  filteredProduct: Product[];
  setFilteredProduct: React.Dispatch<React.SetStateAction<Product[]>>;

  defaultProduct: Product;

  showToastCreate: boolean;
  setShowToastCreate: React.Dispatch<React.SetStateAction<boolean>>;
  showToastUpdate: boolean;
  setShowToastUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  showToastRepeatedName: boolean;
  setShowToastRepeatedName: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [products, setProducts] = useState<Product[]>(() => {
    const storeProducts = localStorage.getItem("System");
    if (!storeProducts) return [];
    const product = JSON.parse(storeProducts);

    product.forEach((prod: Product) => {
      prod.createdAt = new Date(prod.createdAt).toISOString();
      prod.updatedAt = new Date(prod.updatedAt).toISOString();
    });

    return product;
  });

  // CRIADO PARA FILTRAR OS ELEMENTOS DO ARRAY PRODUCTS
  const [filteredProduct, setFilteredProduct] = useState<Product[]>(() => {
    return products;
  });

  useEffect(() => {
    setFilteredProduct(products);
  }, [products]);

  // VALOR DEFAULT DE PRODUTOS
  const defaultProduct = {
    name: "",
    description: "",
    category: "",
    quantity: 0,
    price: 0,
  };

  // ESTADOS DO TOAST
  const [showToastCreate, setShowToastCreate] = useState(false);
  const [showToastUpdate, setShowToastUpdate] = useState(false);
  const [showToastRepeatedName, setShowToastRepeatedName] = useState(false);

  // FUNÇÕES PARA ADICIONAR / LER / ATUALIZAR / DELETAR
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

  function getProduct(id: string) {
    return products.find((prod: Product) => prod.id === +id);
  }

  function updateProduct(id: string, newAttributes: Product) {
    setProducts((state: Product[]) => {
      const index = state.findIndex((prod) => prod.id === +id);
      const newState = [...state];
      Object.assign(newState[index], newAttributes, { updateAt: new Date() });
      localStorage.setItem("System", JSON.stringify(newState));
      return newState;

      // OUTRA FORMA - mas não esta atualizando o updateAt
      // state.splice(index, 1);
      // const newState = [newAttributes, ...state];
      // localStorage.setItem("System", JSON.stringify(newState));
      // return newState;
    });
  }

  const value = {
    products,
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct,
    filteredProduct,
    setFilteredProduct,
    defaultProduct,
    showToastCreate,
    setShowToastCreate,
    showToastUpdate,
    setShowToastUpdate,
    showToastRepeatedName,
    setShowToastRepeatedName,
  };

  return (
    <StockContext.Provider value={value}>{children}</StockContext.Provider>
  );
}
