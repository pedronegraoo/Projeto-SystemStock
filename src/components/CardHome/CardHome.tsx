import * as S from "./styleCardHome";

interface CardProps {
  title: string;
  content: string | number;
}

function CardHome({ title, content }: CardProps) {
  return (
    <S.WrapperCardHome>
      <h2>{title}</h2>
      <h3>{content}</h3>
    </S.WrapperCardHome>
  );
}

export default CardHome;
