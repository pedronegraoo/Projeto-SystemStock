import * as S from "../styles/home";
import CardHome from "../components/CardHome/CardHome";
import useStock from "../hooks/useStock";
import { Product } from "../context/Provider";
import CardPreview from "../components/CardPreview/CardPreview";

function Home() {
  const { products }: any = useStock();

  let totalProducts = products.reduce(
    (acc: number, value: { quantity: number }) => {
      return acc + value.quantity;
    },
    0
  );

  const ending: Product[] = products.filter(
    (product: { quantity: number }) => product.quantity <= 50
  );

  return (
    <S.WrapperHome>
      {/* <h1>Dados dos Produtos</h1> */}
      {/* <h1>Resumo</h1> */}

      <S.WrapperCardHome>
        <CardHome title="Diversidade de Produtos" content={products.length} />
        <CardHome title="Total de Produtos" content={totalProducts} />
        <CardHome title="Produtos Esgotando" content={ending.length} />

        {/* <CardHome title="Preview" content="4" /> */}
        <CardPreview />
      </S.WrapperCardHome>
    </S.WrapperHome>
  );
}

export default Home;
