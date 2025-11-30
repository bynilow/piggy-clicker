import { Error, Loader, Page, useAchievementsStore } from '@/shared';
import * as S from './AchievementPage.styles';
import { Achievement, achievementList, useAchievements } from '@/entities/Achievement';
import { RARE_BY_INDEX, RARE_COLORS, RARE_PRIORITY } from '@/shared/constants';

interface Props {

}

const AchievementPage = ({ }: Props) => {

  const { achievementsError, achievementsIsLoading } = useAchievements();
  const { achievements } = useAchievementsStore();

  console.log(achievements)

  if (achievementsIsLoading) {
    return <Loader />
  };

  if (achievementsError) {
    return <Error />
  }

  return (
    <Page>
      <S.List>
        {
          achievements.map(achievement => (
            <Achievement
              id={achievement.id}
              currentNeedAmount={achievement.levelsAmount[RARE_BY_INDEX[achievement.level]]}
              currentAmount={achievement.currentAmount}
              title={achievement.description}
              level={achievement.level}
              rare={RARE_BY_INDEX[achievement.level]} />
          ))
        }
      </S.List>
    </Page>
  );
}

export { AchievementPage };
