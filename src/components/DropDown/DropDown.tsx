import Dropdown from "react-bootstrap/Dropdown";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import * as S from "./styleDropDown";

function DropDownMenu() {
  return (
    <S.WrapperDropDown>
      <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
          <FiMenu className="iconMenuMobile" />
        </Dropdown.Toggle>

        <Dropdown.Menu className="contentDropDown">
          <S.Nav>
            <Link className="linkHeader" to="/">
              Home
            </Link>

            <Link className="linkHeader" to="/products">
              Produtos
            </Link>
          </S.Nav>
        </Dropdown.Menu>
      </Dropdown>
    </S.WrapperDropDown>
  );
}

export default DropDownMenu;
