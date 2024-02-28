import { Link } from "react-router-dom";
import * as S from "./styleHeader";

function Header() {
  return (
    <S.HeaderStyled>
      <Link className="nameSytem" to="/">
        System Stock
      </Link>

      <S.Nav>
        <Link className="linkHeader" to="/">
          Home
        </Link>
        <Link className="linkHeader" to="/products">
          Produtos
        </Link>
      </S.Nav>
    </S.HeaderStyled>
  );
}

export default Header;
