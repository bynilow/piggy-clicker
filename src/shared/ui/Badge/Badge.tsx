import * as S from './Badge.styles';

interface Props {
  text: string;
}

const Badge = ({ text }: Props) => {
  return (
    <S.Badge>
      {text}
    </S.Badge>
  );
}

export { Badge };