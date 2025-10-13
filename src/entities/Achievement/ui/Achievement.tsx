import { Rare } from '@/shared';
import * as S from './Achievement.styles';
import { RARE_COLORS } from '@/shared/constants';

interface Props {
  title: string;
  rare: Rare;
  currentNeedAmount: number;
}

const Achievement = ({ title, currentNeedAmount, rare }: Props) => {
  return (
    <S.Achievement $rareColor={RARE_COLORS[rare]}>
      <S.Image />
      <S.Body>
        <S.Title>
          {title} {currentNeedAmount}
        </S.Title>
        <S.Progress>
          <S.ProgressText>
            252
          </S.ProgressText>
          <S.ProgressBar id="progress" value={45} max={100} />
        </S.Progress>
      </S.Body>
    </S.Achievement>
  );
}

export { Achievement };
