import * as S from "./styleForm";
import React, { useState } from "react";
import { arrOptions } from "../../utils/options";
import LabelInput from "../LabelInput/LabelInput";
import ModelProduct from "../../models/StockProduct";
import { Product } from "../../context/Provider";
import useStock from "../../hooks/useStock";

interface FormProps {
  productUpdate: Product;
}

// interface EventProps {
//   ev:
//     | React.ChangeEvent<HTMLInputElement>
//     | React.ChangeEvent<HTMLSelectElement>
//     | React.ChangeEvent<HTMLTextAreaElement>;
// }

function FormAddProduct({ productUpdate }: FormProps) {
  const { addProduct, updateProduct }: any = useStock();

  const defaultProduct = {
    name: "",
    description: "",
    category: "",
    quantity: 0,
    price: 0,
  };
  const [product, setProduct] = useState(
    productUpdate ? productUpdate : defaultProduct
  );

  function handleChange(
    ev:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = ev.target;

    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    try {
      if (productUpdate) {
        updateProduct(productUpdate.id, product);
        alert("Item atualizado com sucesso!");
      } else {
        const finalModel = new ModelProduct(product as Product);
        addProduct(finalModel);
        setProduct(defaultProduct);
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
        <select name="category" id="category" required onChange={handleChange}>
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

      <S.WrapperBtnSubmit>
        <S.BtnSave type="submit">Salvar</S.BtnSave>
      </S.WrapperBtnSubmit>
    </S.Form>
  );
}

export default FormAddProduct;
