import { Page } from '@/shared';
import * as S from './AchievementPage.styles';
import { Achievement, achievementList } from '@/entities/Achievement';

interface Props {

}

const AchievementPage = ({ }: Props) => {
  return (
    <Page>
      <S.List>
        {
          achievementList.map(achievement => (
            <Achievement
              currentNeedAmount={achievement.levelsAmount.common}
              title={achievement.description}
              rare="common" />
          ))
        }
      </S.List>
    </Page>
  );
}

export { AchievementPage };
