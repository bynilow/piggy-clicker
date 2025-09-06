import * as S from './Description.styles'

interface Props {
    children: any;
}

const Description = ({ children }: Props) => {
    return (
        <S.Description>
            {children}
        </S.Description>
    );
}

export { Description };