import { Link } from "react-router-dom";
import { Product } from "../../context/Provider";
import useStock from "../../hooks/useStock";
import * as S from "./styleCardPreview";

function CardPreview() {
  const { products }: any = useStock();

  let productRender: Product[] = [];
  const quantityRender = 4;

  if (products.length > 4) {
    productRender = products.slice(0, quantityRender);
  } else {
    productRender = products;
  }

  return (
    <S.WrapperCardPreview>
      <h2>Itens Recentes</h2>

      {productRender.map((product: Product) => (
        <S.WrapperContentCardPreview key={product.id}>
          <span className="contentName">{product.name}</span>
          <span className="contentCategory">{product.category}</span>
          {/* <span className="contentQuantity">QDT: {product.quantity}</span> */}
        </S.WrapperContentCardPreview>
      ))}

      <Link to="/products" className="linkShowMore">
        Ver mais
      </Link>
    </S.WrapperCardPreview>
  );
}

export default CardPreview;
