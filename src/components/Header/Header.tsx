import * as S from "./styleHeader";
import { Link } from "react-router-dom";
import DropDownMenu from "../DropDown/DropDown";
// import OffCanvasMobile from "../OffCanvasMobile/OffCanvasMobile";

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

      <S.WrapperMenuMobile>
        {/* <OffCanvasMobile /> */}

        <DropDownMenu />
      </S.WrapperMenuMobile>
    </S.HeaderStyled>
  );
}

export default Header;
