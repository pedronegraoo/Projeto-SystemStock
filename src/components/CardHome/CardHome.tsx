import * as S from "./styleCardHome";

interface CardProps {
  title: string;
  content: string | number;
}

function CardHome({ title, content }: CardProps) {
  return (
    <S.WrapperCardHome>
      <h2 className="contentTitle">{title}</h2>
      <h1 className="contentNumber">{content}</h1>
    </S.WrapperCardHome>
  );
}

export default CardHome;
