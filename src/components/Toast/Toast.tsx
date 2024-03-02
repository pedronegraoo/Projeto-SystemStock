import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import { WrapperToast } from "./styleToast";
import { FaCircleCheck } from "react-icons/fa6";

interface ToastProps {
  state: boolean;
  color?: string;
  colorCustom?: string;
  children: React.ReactNode;
}

function ToastGeneric({ state, color, children }: ToastProps) {
  const [show, setShow] = useState(state);

  return (
    <WrapperToast>
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
        bg={color?.toLowerCase()}
        className="toast"
      >
        <Toast.Header>
          {/* {color === "success" ? (
            <FaCircleCheck className="me-auto iconToastSuccess" />
          ) : (
            <FaCircleCheck className="me-auto iconToastSecondary" />
          )} */}

          {color === "success" && (
            <FaCircleCheck className="me-auto iconToastSuccess" />
          )}

          {color === "secondary" && (
            <FaCircleCheck className="me-auto iconToastSecondary" />
          )}

          {color === "warning" && (
            <FaCircleCheck className="me-auto iconToastWarning" />
          )}

          {/* {colorCustom === "yellow" && (
            <FaCircleCheck className="me-auto iconToastYellow" />
          )} */}
        </Toast.Header>

        <Toast.Body className="textToast">{children}</Toast.Body>
      </Toast>
    </WrapperToast>
  );
}

export default ToastGeneric;
