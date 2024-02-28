import useStock from "../../hooks/useStock";
import { ButtonDelete } from "./styleBtnDelete";
import { IoTrashOutline } from "react-icons/io5";

interface BtnDeleteProps {
  id: number;
  name: string;
}

function BtnDelete({ id, name }: BtnDeleteProps) {
  const { deleteProduct }: any = useStock();

  function handleClick() {
    if (confirm(`Tem certeza que deseja excluir ${name}?`)) {
      deleteProduct(id);
    }
  }

  return (
    <ButtonDelete onClick={handleClick}>
      <IoTrashOutline />
    </ButtonDelete>
  );
}

export default BtnDelete;
