import Spinner from "react-bootstrap/Spinner";
import * as S from "./styleLoading";

function LoadingRemove() {
  return (
    <S.WrapperLoading>
      <Spinner animation="border" role="status" variant="light">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </S.WrapperLoading>
  );
}

export default LoadingRemove;
