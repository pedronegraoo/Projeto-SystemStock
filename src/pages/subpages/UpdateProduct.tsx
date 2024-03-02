import * as S from "../../styles/subpages/updateProduct";
import { useParams } from "react-router-dom";
import FormAddProduct from "../../components/Form/Form";
import useStock from "../../hooks/useStock";
import { ProviderAllProps } from "../../context/Provider";

function UpdateProduct() {
  const { getProduct } = useStock() as ProviderAllProps;
  const { id } = useParams<{ id: string }>();

  const product = getProduct(id);

  return (
    <S.WrapperContentUpdate>
      <h2>Atualizar produto</h2>

      <FormAddProduct productUpdate={product} />
    </S.WrapperContentUpdate>
  );
}

export default UpdateProduct;
