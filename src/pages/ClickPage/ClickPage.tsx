import { Divider, getAmountWithPercent, getFormattedCoins, useBoostsStore, useDebounce, useUserStore } from '@/shared';
import { motion } from "motion/react"
import * as S from './ClickPage.styles';
import { useState } from 'react';
import { coinIconUrl } from '@/shared/assets';
import { CLICK_X_OFFSET, CLICK_Y_OFFSET, RANDOM_CLICK_ROTATION_DEGREE, RANDOM_OFFSET_X } from './constants';
import { addCoins, useCoins, useUser } from '@/entities/User';

const ClickPage = () => {
    const [clicks, setClicks] = useState<any[]>([]);

    const { id, addCoinsStore } = useUserStore();
    const { perClick, incomeMultiplier } = useBoostsStore();
    const totalAmountClick = getAmountWithPercent(perClick, incomeMultiplier);
    const { addCoins } = useCoins();

    const [clickedCoins, setClickedCoins] = useState(totalAmountClick);

    const sendClickedCoins = () => {
        addCoins({ user_id: id, coins: clickedCoins });
        setClickedCoins(totalAmountClick);
    };

    const debounce = useDebounce(sendClickedCoins);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        //TODO: в отдельный метод
        const { clientX, clientY } = event;
        const rect = event.currentTarget.getBoundingClientRect();

        console.log(rect, clientY)

        const x = clientX - rect.x - CLICK_X_OFFSET;
        const y = clientY - rect.y - CLICK_Y_OFFSET;

        const randomRotation = Math.random() * RANDOM_CLICK_ROTATION_DEGREE;
        const isNegativeRotation = Math.random() > 0.5;

        const randomOffsetX = Math.random() * RANDOM_OFFSET_X;
        const isNegativeOffsetX = Math.random() > 0.5;

        const newClick = {
            id: Date.now(),
            x: isNegativeOffsetX ? x + randomOffsetX : x - randomOffsetX, // уже правильные координаты
            y, // уже правильные координаты
            text: `+${getFormattedCoins(totalAmountClick)}`,
            rotation: isNegativeRotation ? randomRotation * -1 : randomRotation,
        };

        setClicks(prev => [...prev, newClick]);

        setTimeout(() => {
            setClicks(prev => prev.filter(click => click.id !== newClick.id));
        }, 1000);

        setClickedCoins(prevValue => prevValue + totalAmountClick);
        addCoinsStore(totalAmountClick);
        debounce();
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
            <S.ButtonField as={motion.div} whileTap={{ scale: 1.05 }} transition={{ duration: 0.5 }} onClick={handleClick}>
                <S.ClickButton src={coinIconUrl} />
            </S.ButtonField>
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
