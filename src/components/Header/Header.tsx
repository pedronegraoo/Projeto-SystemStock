import * as S from "./styleHeader";
import { Link } from "react-router-dom";
import DropDownMenu from "../DropDown/DropDown";
import useStock from "../../hooks/useStock";
import { ProviderAllProps } from "../../context/Provider";
// import OffCanvasMobile from "../OffCanvasMobile/OffCanvasMobile";

function Header() {
  const { setShowToastCreate, setShowToastUpdate, setShowToastRepeatedName } =
    useStock() as ProviderAllProps;

  return (
    <S.HeaderStyled>
      <Link className="nameSytem" to="/"  onClick={() => {
                setShowToastCreate(false);
                setShowToastUpdate(false);
                setShowToastRepeatedName(false);
              }}>
        System Stock
      </Link>

      <S.Nav>
        <Link className="linkHeader" to="/"  onClick={() => {
                setShowToastCreate(false);
                setShowToastUpdate(false);
                setShowToastRepeatedName(false);
              }}>
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
