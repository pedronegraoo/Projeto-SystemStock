import { useRef } from "react";
import useStock from "../../hooks/useStock";
import { Product, ProviderAllProps } from "../../context/Provider";
import { InputFil } from "./styleInputFilter";

function InputFilter() {
  const { products, setFilteredProduct } = useStock() as ProviderAllProps;
  const inputValue = useRef<HTMLInputElement>(null);

  function inputChange() {
    const newInputValue = inputValue.current?.value.toLowerCase();

    const filter = products.filter((product: Product) =>
      product.name.toLowerCase().includes(newInputValue ?? "")
    );

    setFilteredProduct(filter);
  }

  return (
    <InputFil
      type="text"
      placeholder="Pesquisar produto"
      ref={inputValue}
      onChange={inputChange}
    />
  );
}

export default InputFilter;
