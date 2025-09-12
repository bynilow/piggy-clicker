import { Loader } from '../Loader/Loader';
import * as S from './LoaderModal.styles'

const LoaderModal = () => {
    return (
        <S.Wrapper>
            <Loader />
        </S.Wrapper>
    );
}

export { LoaderModal }