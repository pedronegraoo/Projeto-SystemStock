import { Link } from "react-router-dom";
import * as S from "./styleTable";
import useStock from "../../hooks/useStock";
import { BsEye } from "react-icons/bs";
import { LuPenSquare } from "react-icons/lu";
import { Product, ProviderAllProps } from "../../context/Provider";
import ModalRemove from "../Modal/Modal";

function TableShowProducts() {
  const { filteredProduct } = useStock() as ProviderAllProps;

  return (
    <S.WrapperTable>
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
        {filteredProduct.map((product: Product) => (
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
    </S.WrapperTable>
  );
}

export default TableShowProducts;
