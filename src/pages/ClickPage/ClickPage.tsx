import { Divider } from '@/shared';
import { motion } from "motion/react"
import * as S from './ClickPage.styles';
import { useState } from 'react';
import { coinIconUrl } from '@/shared/assets';
import { CLICK_X_OFFSET, CLICK_Y_OFFSET, RANDOM_CLICK_ROTATION_DEGREE, RANDOM_OFFSET_X } from './constants';

const ClickPage = () => {
    const [clicks, setClicks] = useState<any[]>([]);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left + CLICK_X_OFFSET;
        const y = event.clientY - rect.top + CLICK_Y_OFFSET;

        console.log(event.clientY, rect)

        const randomRotation = Math.random() * RANDOM_CLICK_ROTATION_DEGREE;
        const isNegativeRotation = Math.random() > 0.5;

        const randomOffsetX = Math.random() * RANDOM_OFFSET_X;
        const isNegativeOffsetX = Math.random() > 0.5;

        const newClick = {
            id: Date.now(),
            x: x + (isNegativeOffsetX ? randomOffsetX * -1 : randomOffsetX),
            y: y,
            text: '+1',
            rotation: isNegativeRotation ? randomRotation * -1 : randomRotation,
        };

        setClicks(prev => [...prev, newClick]);

        setTimeout(() => {
            setClicks(prev => prev.filter(click => click.id !== newClick.id));
        }, 1000);
    };

    return (
        <S.Page>
            {clicks.map(click => (
                <S.Click as={motion.div}
                    key={click.id}
                    animate={{
                        scale: 0.7,
                        marginBottom: 20,
                        opacity: 0,
                        rotate: click.rotation,
                        top: click.y - 70,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    style={{
                        left: click.x,
                        top: click.y,
                    }}
                >
                    {click.text}
                </S.Click>
            ))}
            <S.MainButtonWrapper as={motion.div} whileTap={{ scale: 1.05 }} transition={{ duration: 0.5 }} onClick={handleClick}>
                <S.MainButton src={coinIconUrl} />
            </S.MainButtonWrapper>
            <S.LevelWrapper>
                <Divider />
                <S.LevelHead>
                    <S.LevelName>
                        Gold
                    </S.LevelName>
                    <S.LevelCount>
                        3/12
                    </S.LevelCount>
                </S.LevelHead>
                <S.LevelLine />
            </S.LevelWrapper>
        </S.Page>
    );
}

export { ClickPage };
