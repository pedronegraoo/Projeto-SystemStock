import { Link, Outlet, useLocation } from "react-router-dom";
import * as S from "../styles/LayoutProducts";
import InputFilter from "../components/InputFilter/InputFilter";
import useStock from "../hooks/useStock";

interface StockContextData {
  setShowToastCreate: React.Dispatch<React.SetStateAction<boolean>>;
  setShowToastUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

function LayoutProducts() {
  const { setShowToastCreate, setShowToastUpdate } =
    useStock() as StockContextData;
  const { pathname } = useLocation();

  return (
    <S.WrapperLayoutProducts>
      <S.WrapperContentLayoutProducts>
        <h1>Estoque Produtos</h1>

        <S.WrapperLinkInput>
          <S.WrapperLink>
            <Link
              to="/products"
              className={`linkLayout ${
                pathname === "/products" ? "active" : ""
              }`}
              onClick={() => {
                setShowToastCreate(false);
                setShowToastUpdate(false);
              }}
            >
              Todos os produtos
            </Link>
            <Link
              to="/products/new"
              className={`linkLayout ${
                pathname === "/products/new" ? "active" : ""
              }`}
            >
              Novo produto
            </Link>
          </S.WrapperLink>

          <S.WrapperInputFilter>
            {pathname === "/products" ? <InputFilter /> : ""}
          </S.WrapperInputFilter>
        </S.WrapperLinkInput>
      </S.WrapperContentLayoutProducts>

      <Outlet />
    </S.WrapperLayoutProducts>
  );
}

export default LayoutProducts;
