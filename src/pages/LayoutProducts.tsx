import { Link, Outlet, useLocation } from "react-router-dom";
import * as S from "../styles/LayoutProducts";

function LayoutProducts() {
  const { pathname } = useLocation();

  return (
    <S.WrapperLayoutProducts>
      <S.WrapperContentLayoutProducts>
        <h1>Estoque Produtos</h1>

        <S.WrapperLink>
          <Link
            to="/products"
            className={`linkLayout ${pathname === "/products" ? "active" : ""}`}
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
      </S.WrapperContentLayoutProducts>

      <Outlet />
    </S.WrapperLayoutProducts>
  );
}

export default LayoutProducts;
