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
      <h2>Preview </h2>

      <S.WrapprerContentCardPreview>
        {productRender.map((product: Product) => (
          <div key={product.id} className="contentCard">
            <span>{product.name}</span>
            <span>{product.category}</span>
            <span>{product.quantity}</span>
          </div>
        ))}
      </S.WrapprerContentCardPreview>

      <Link to="/products" className="linkShowMore">
        Ver mais
      </Link>
    </S.WrapperCardPreview>
  );
}

export default CardPreview;
