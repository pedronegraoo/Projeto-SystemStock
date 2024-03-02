import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FiMenu } from "react-icons/fi";
import * as S from "./styleOffCanvas";
import { Link } from "react-router-dom";

function OffCanvasMobile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <S.WrapperOffCanvas>
      <S.BtnMenuMobile className="btnMenuMobile" onClick={handleShow}>
        <FiMenu className="iconMenuMobile" />
      </S.BtnMenuMobile>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        data-bs-theme="dark"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ visibility: "hidden" }}>
            Offcanvas
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <S.Nav>
            <Link className="linkHeader" to="/">
              Home
            </Link>

            <Link className="linkHeader" to="/products">
              Produtos
            </Link>
          </S.Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </S.WrapperOffCanvas>
  );
}

export default OffCanvasMobile;
