import * as S from "./styleModal";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IoTrashOutline } from "react-icons/io5";
import useStock from "../../hooks/useStock";
import { ProviderAllProps } from "../../context/Provider";

interface BtnDeleteProps {
  id: number;
  name: string;
}

function ModalRemove({ id, name }: BtnDeleteProps) {
  const { deleteProduct } = useStock() as ProviderAllProps;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <S.WrapperModal>
      <S.ButtonDelete onClick={handleShow}>
        <IoTrashOutline />
      </S.ButtonDelete>

      <Modal show={show} onHide={handleClose} centered data-bs-theme="dark">
        <Modal.Header closeButton>
          <Modal.Title style={{ textTransform: "capitalize", color: "#fff" }}>
            {name}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ color: "#fff" }}>
          Tem certeza que deseja excluir este produto?
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>

          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              deleteProduct(id);
            }}
          >
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </S.WrapperModal>
  );
}

export default ModalRemove;
