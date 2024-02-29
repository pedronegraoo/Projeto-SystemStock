import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import { WrapperToast } from "./styleToast";
import { FaCircleCheck } from "react-icons/fa6";

function ToastSuccess({ state }: any) {
  const [show, setShow] = useState(state);

  const color = "Success";

  return (
    <WrapperToast>
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
        bg={color.toLowerCase()}
        className="toast"
      >
        <Toast.Header>
          <FaCircleCheck className="me-auto iconToast" />
        </Toast.Header>

        <Toast.Body className="textToast">
          Produto criado com sucesso!
        </Toast.Body>
      </Toast>
    </WrapperToast>
  );
}

export default ToastSuccess;
