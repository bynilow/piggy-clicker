import * as S from './Divider.styles';

interface Props {
    isLight?: boolean;
}

const Divider = ({ isLight }: Props) => {
    return (
        <S.Divider $isLight={isLight} />
    );
}

export { Divider }