import { Description, Divider } from '@/shared';
import { getBoostNameById } from '../../lib';
import * as S from './NeedBoosts.styles';

interface Props {
    needBoosts: { id: string, level: number }[];
}

const NeedBoosts = ({ needBoosts }: Props) => {
    return (
        <S.Wrapper>
            {needBoosts.map((needBoost, index) => (
                <>
                    <S.Boost $haveBoost={Math.random() > 0.5}>
                        <S.Title>
                            {getBoostNameById(needBoost.id)}
                        </S.Title>
                        <S.Level>
                            lvl {needBoost.level} <Description>(2)</Description>
                        </S.Level>
                    </S.Boost>

                    {
                        needBoosts.length !== index + 1 && (
                            <Divider isLight />
                        )
                    }
                </>
            ))}
        </S.Wrapper>
    );
}

export { NeedBoosts };
