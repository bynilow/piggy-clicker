import { motion } from 'motion/react';
import * as S from './Loader.styles'

const Loader = () => {
    return (
        <S.Loader>
            <S.Point $index={0}>
                .
            </S.Point>
            <S.Point $index={1}>
                .
            </S.Point>
            <S.Point $index={2}>
                .
            </S.Point>
        </S.Loader>
    );
}

export { Loader };
