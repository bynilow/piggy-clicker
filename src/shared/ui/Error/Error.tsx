import { CROSS_UNICODE, LOCALIZATION } from '@/shared/constants';
import * as S from './Error.styles';
import { Description } from '../Description';

const Error = () => {
    return (
        <S.Wrapper>
            <S.Cross>
                {CROSS_UNICODE}
            </S.Cross>
            {LOCALIZATION.SOMETHING_WENT_WRONG}
            <Description>
                {LOCALIZATION.TRY_AGAIN_LATER}
            </Description>
        </S.Wrapper>
    );
}

export { Error }