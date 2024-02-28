import { useParams } from "react-router-dom";
import FormAddProduct from "../../components/Form/Form";
import useStock from "../../hooks/useStock";

function UpdateProduct() {
  const { getProduct }: any = useStock();
  const { id }: any = useParams();

  const product = getProduct(+id);

  return (
    <>
      <h1>Update produto</h1>
      <FormAddProduct productUpdate={product} />
    </>
  );
}

export default UpdateProduct;
