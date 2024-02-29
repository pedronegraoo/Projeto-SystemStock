import * as S from "../styles/home";
import CardHome from "../components/CardHome/CardHome";
import useStock from "../hooks/useStock";
import { Product } from "../context/Provider";
import CardPreview from "../components/CardPreview/CardPreview";

function Home() {
  const { products }: any = useStock();

  const inventoryProducts = products.reduce(
    (acc: number, value: { quantity: number }) => +acc + +value.quantity,
    0
  );

  const endingProduct: Product[] = products.filter(
    (product: { quantity: number }) => product.quantity <= 50
  );

  return (
    <S.WrapperHome>
      {/* <h1>Dados dos Produtos</h1> */}
      {/* <h1>Resumo</h1> */}

      <S.WrapperCardHome>
        <CardHome title="Diversidade" content={products.length} />
        <CardHome title="Inventário" content={inventoryProducts} />
        <CardHome title="Produtos Acabando" content={endingProduct.length} />

        <CardPreview />
      </S.WrapperCardHome>
    </S.WrapperHome>
  );
}

export default Home;
