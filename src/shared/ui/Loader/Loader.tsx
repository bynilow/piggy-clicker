import { motion } from "motion/react"
import * as S from './Loader.styles'
import { LOCALIZATION } from '@/shared/constants';
import { useEffect, useState } from 'react';

const FIRST_TEXT_DURATION_MS = 9000;

interface Props {
    isModal?: boolean;
}

const Loader = ({ isModal }: Props) => {

    const [haveSecondText, setHaveSecondText] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setHaveSecondText(true);
        }, FIRST_TEXT_DURATION_MS);

        return () => clearTimeout(timeout);
    }, [])

    return (
        <S.Loader>
            <S.Dots>
                <S.Point $index={0}>
                    .
                </S.Point>
                <S.Point $index={1}>
                    .
                </S.Point>
                <S.Point $index={2}>
                    .
                </S.Point>
            </S.Dots>
            {
                !haveSecondText && !isModal && (
                    <motion.div
                        transition={{
                            duration: 1,
                            delay: 3,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        exit={{
                            opacity: 0,
                            y: -10
                        }}
                        style={{
                            opacity: 0,
                            y: 10
                        }}>
                        {LOCALIZATION.LITTLE_MORE}
                    </motion.div>
                )
            }
            {
                haveSecondText && !isModal && (
                    <motion.div
                        transition={{
                            duration: 1,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        exit={{
                            opacity: 0,
                            y: -10
                        }}
                        style={{
                            opacity: 0,
                            y: 10
                        }}>
                        {LOCALIZATION.PLEASE_WAIT}
                    </motion.div>
                )
            }
        </S.Loader>
    );
}

export { Loader };
