import * as S from "../../styles/subpages/updateProduct";
import { useParams } from "react-router-dom";
import FormAddProduct from "../../components/Form/Form";
import useStock from "../../hooks/useStock";

function UpdateProduct() {
  const { getProduct }: any = useStock();
  const { id }: any = useParams();

  const product = getProduct(+id);

  return (
    <S.WrapperContentUpdate>
      <h2>Atualizar produto</h2>

      <FormAddProduct productUpdate={product} />
    </S.WrapperContentUpdate>
  );
}

export default UpdateProduct;
