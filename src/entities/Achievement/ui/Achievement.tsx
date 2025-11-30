import { Rare } from '@/shared';
import * as S from './Achievement.styles';
import { RARE_COLORS } from '@/shared/constants';
import { useAchievements } from '../model';

interface Props {
  id: string;
  title: string;
  rare: Rare;
  level: number;
  currentNeedAmount: number;
  currentAmount: number;
}

const Achievement = ({ id, title, currentNeedAmount, rare, currentAmount, level }: Props) => {
  const canReceive = currentAmount >= currentNeedAmount && level !== 4;

  const { addAchievement } = useAchievements();

  const handleClickAchievement = () => {
    if (canReceive) {
      addAchievement(id)
    }
  };

  return (
    <S.Achievement $rareColor={RARE_COLORS[rare]} onClick={handleClickAchievement}>
      <S.Image />
      <S.Body>
        <S.Title>
          {level !== 4 ? title : title.replace(':', '')} {level !== 4 && currentNeedAmount}
        </S.Title>
        {
          level !== 4 && (
            <S.Progress>
              <S.ProgressText>
                {currentAmount}
              </S.ProgressText>
              <S.ProgressBar id="progress" value={currentAmount} max={currentNeedAmount} />
            </S.Progress>
          )
        }
      </S.Body>
    </S.Achievement>
  );
}

export { Achievement };
