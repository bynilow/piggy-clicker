import { Description, Divider, useBoostsStore, useModal } from '@/shared';
import { getBoostNameById } from '../../lib';
import * as S from './NeedBoosts.styles';

interface Props {
    needBoosts: { id: string, level: number }[];
}

const NeedBoosts = ({ needBoosts }: Props) => {
    const { boosts } = useBoostsStore();

    const { closeModal } = useModal();

    return (
        <S.Wrapper onClick={closeModal}>
            {needBoosts.map((needBoost, index) => {
                const currentLevel = boosts.find(boost => boost.boost_id === needBoost.id)?.boost_level || 0;

                return (
                    <>
                        <S.Boost $haveBoost={currentLevel >= needBoost.level}>
                            <S.Title>
                                {getBoostNameById(needBoost.id)}
                            </S.Title>
                            <S.Level>
                                {needBoost.level}{" / "}<S.CurrentLevel>{currentLevel}</S.CurrentLevel>
                            </S.Level>
                        </S.Boost>

                        {
                            needBoosts.length !== index + 1 && (
                                <Divider isLight />
                            )
                        }
                    </>
                )
            })}
        </S.Wrapper>
    );
}

export { NeedBoosts };
