import * as S from "./styleForm";
import React, { useRef, useState } from "react";
import { arrOptions } from "../../utils/options";
import LabelInput from "../LabelInput/LabelInput";
import ModelProduct from "../../models/StockProduct";
import { Product, ProviderAllProps } from "../../context/Provider";
import useStock from "../../hooks/useStock";
import ToastGeneric from "../Toast/Toast";

interface FormProps {
  productUpdate?: Product;
}

function FormAddProduct({ productUpdate }: FormProps) {
  const {
    products,
    addProduct,
    updateProduct,
    defaultProduct,
    showToastCreate,
    setShowToastCreate,
    showToastUpdate,
    setShowToastUpdate,
    showToastRepeatedName,
    setShowToastRepeatedName,
  } = useStock() as ProviderAllProps;

  const [product, setProduct] = useState(
    productUpdate ? productUpdate : defaultProduct
  );
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(
    ev:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = ev.target;

    setShowToastCreate(false);
    setShowToastUpdate(false);
    setShowToastRepeatedName(false);
    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const repeatedName = products.find((prod) => prod.name === product.name);

    try {
      if (productUpdate) {
        updateProduct(productUpdate.id, product);
        setShowToastUpdate(true);
      } else {
        inputRef.current?.focus();

        if (repeatedName) {
          setShowToastRepeatedName(true);
        } else {
          const finalModel = new ModelProduct(product as Product);
          addProduct(finalModel);
          setProduct(defaultProduct);
          setShowToastCreate(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.ContentForm>
        <LabelInput
          type="text"
          name="name"
          value={product.name}
          onchange={handleChange}
          focus={inputRef}
        >
          Name
        </LabelInput>

        <LabelInput
          type="number"
          name="quantity"
          value={product.quantity}
          onchange={handleChange}
        >
          Quantidade
        </LabelInput>

        <LabelInput
          type="number"
          name="price"
          value={product.price}
          onchange={handleChange}
        >
          Preço
        </LabelInput>
      </S.ContentForm>

      <S.WrapperContent>
        <label htmlFor="category">Categoria</label>
        <select
          name="category"
          id="category"
          value={product.category}
          required
          onChange={handleChange}
        >
          {arrOptions.map((op) => (
            <option
              key={`${op.id}`}
              value={`${op.value}`}
            >{`${op.name}`}</option>
          ))}
        </select>
      </S.WrapperContent>

      <S.WrapperContent>
        <label htmlFor="description">Descrição</label>
        <textarea
          name="description"
          className="textArea"
          required
          value={product.description}
          onChange={handleChange}
        />
      </S.WrapperContent>

      {showToastCreate === true && (
        <ToastGeneric state={showToastCreate} color="success">
          Produto criado com sucesso!
        </ToastGeneric>
      )}

      {showToastUpdate === true && (
        <ToastGeneric state={showToastUpdate} color="secondary">
          Item atualizado com sucesso!
        </ToastGeneric>
      )}

      {showToastRepeatedName === true && (
        <ToastGeneric state={showToastRepeatedName} color="warning">
          Já existe produto cadrastrado com este nome
        </ToastGeneric>
      )}

      <S.WrapperBtnSubmit>
        <S.BtnSave type="submit">Salvar</S.BtnSave>
      </S.WrapperBtnSubmit>
    </S.Form>
  );
}

export default FormAddProduct;
