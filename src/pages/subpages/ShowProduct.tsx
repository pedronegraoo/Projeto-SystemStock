import { Link, useNavigate, useParams } from "react-router-dom";
import * as S from "../../styles/subpages/showproduct";
import useStock from "../../hooks/useStock";
import { Product, ProviderAllProps } from "../../context/Provider";
import { useState } from "react";
import LoadingRemove from "../../components/Loading/LoadingRemove";
import FormatCurrency from "../../utils/formatCurrency";

function ShowProduct() {
  const { getProduct, deleteProduct } = useStock() as ProviderAllProps;
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);

  const product: Product = getProduct(id);

  const navigate = useNavigate();

  function removeProduct() {
    setLoading(true);
    setTimeout(() => {
      navigate("/products");
      deleteProduct(product.id);
    }, 2000);
  }

  return (
    <S.WrapperShowProduct>
      <S.TitleOptions>
        <h1>{product.name}</h1>

        <Link to={`/products/${product.id}/update`} className="linkShowProduct">
          Atualizar
        </Link>

        {/* <Link
          to={`/products`}
          className="linkDeleteProduct"
          onClick={() => deleteProduct(product.id)}
        >
          Excluir
        </Link> */}

        <button onClick={removeProduct}>Excluir</button>
      </S.TitleOptions>

      {loading === true && <LoadingRemove />}

      <S.ContentProduct>
        <span>Categoria: {product.category}</span>
        <span>Quant. em estoque: {product.quantity}</span>
        <span>Preço: {FormatCurrency(product.price, "BRL")}</span>
      </S.ContentProduct>

      <S.ContentDescricao>
        <h5>Descrição</h5>
        <p>{product.description}</p>
      </S.ContentDescricao>

      <S.WrapperDates>
        <span>Criado em: {product.createdAt.toString()}</span>
        <span>Atualizado em: {product.updatedAt.toString()}</span>
      </S.WrapperDates>
    </S.WrapperShowProduct>
  );
}

export default ShowProduct;
