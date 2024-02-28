import FormAddProduct from "../../components/Form/Form";

function CreateProduct() {
  return (
    // <S.Form action="">
    //   <S.ContentForm>
    //     <LabelInput type="text" name="name">
    //       Name
    //     </LabelInput>

    //     <LabelInput type="number" name="quantity">
    //       Quantidade
    //     </LabelInput>

    //     <LabelInput type="number" name="price">
    //       Preço
    //     </LabelInput>
    //   </S.ContentForm>

    //   <S.WrapperContent>
    //     <label htmlFor="category">Categoria</label>
    //     <select name="category" id="">
    //       {arrOptions.map((op) => (
    //         <option
    //           key={`${op.id}`}
    //           value={`${op.value}`}
    //         >{`${op.name}`}</option>
    //       ))}
    //     </select>
    //   </S.WrapperContent>

    //   <S.WrapperContent>
    //     <label htmlFor="description">Descrição</label>
    //     <textarea name="description" className="textArea" />
    //   </S.WrapperContent>

    //   <S.WrapperBtnSubmit>
    //     <S.BtnSave type="submit">Salvar</S.BtnSave>
    //   </S.WrapperBtnSubmit>
    // </S.Form>

    <FormAddProduct />
  );
}

export default CreateProduct;
