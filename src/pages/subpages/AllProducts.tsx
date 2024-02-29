import * as S from "../../styles/subpages/allproducts";
import { BsEye } from "react-icons/bs";
import { LuPenSquare } from "react-icons/lu";
import { Link } from "react-router-dom";
import useStock from "../../hooks/useStock";
import { Product } from "../../context/Provider";
import ModalRemove from "../../components/Modal/Modal";

// interface useStockProps {
//   products: ProductProps;
// }

function AllProducts() {
  const { products }: any = useStock();

  return (
    <S.WrapperAllProduts>
      <S.Table>
        <thead>
          <tr className="titleTable">
            <th>ID</th>
            <th>Nome</th>
            <th>estoque</th>
            <th>Categoria</th>
            <th>Opções</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product: Product) => (
            <tr key={product.id} className="contentTable">
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.category}</td>
              <td>
                <div>
                  <Link to={`/products/${product.id}`} className="linkShow">
                    <BsEye />
                  </Link>
                </div>

                <div>
                  <Link
                    to={`/products/${product.id}/update`}
                    className="linkEdit"
                  >
                    <LuPenSquare />
                  </Link>
                </div>

                <ModalRemove id={product.id} name={product.name} />
              </td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.WrapperAllProduts>
  );
}

export default AllProducts;
