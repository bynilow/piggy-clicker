import { Description, Error, getAmountWithPercent, getFormattedCoins, Loader, Page } from '@/shared';
import * as S from './LeadersPage.styles';
import { useLeaders, useUsers } from '@/entities/User';
import { LOCALIZATION } from '../constants';
import { employeeBoostsList, passiveBoostsList } from '@/entities/Boost';

const placeColors = ['var(--gold-color)', 'var(--silver-color)', 'var(--bronze-color)'];

const LeadersPage = () => {

    const { leadersData, leadersError, isLeadersLoading } = useLeaders();

    if (leadersError) {
        return <Error />
    }

    if (isLeadersLoading) {
        return <Loader />
    }

    if (leadersData?.leaders?.length === 0 || !leadersData) {
        return LOCALIZATION.HERE_USERS;
    }

    return (
        <Page $justifyContent='start'>
            <Description>
                {LOCALIZATION.YOUR_PLACE}: #{leadersData.current_user_place}
            </Description>
            <S.List>
                {
                    leadersData.leaders.map((user, index) => {

                        const incomeMultiplier = user.boosts.reduce((sum, userBoost) => {
                            const boost = employeeBoostsList.find(boost => boost.id === userBoost.boost_id);
                            if (boost) {
                                return sum + (boost.amount * userBoost.boost_level);
                            }
                            return sum;
                        }, 0);

                        const perSecond = user.boosts.reduce((sum, userBoost) => {
                            const boost = passiveBoostsList.find(boost => boost.id === userBoost.boost_id);
                            if (boost) {
                                return sum + (boost.amount * userBoost.boost_level);
                            }
                            return sum;
                        }, 0);

                        return (
                            <S.Leader>
                                <S.Head>
                                    <S.Place $placeColor={placeColors[index]}>
                                        #{index + 1}
                                    </S.Place>
                                    <S.Avatar src={user.avatar_url} />
                                    <S.Username>
                                        {user.username}
                                    </S.Username>
                                </S.Head>
                                <S.Statistics>
                                    <S.Statistic>
                                        {getFormattedCoins(user.coins)}
                                    </S.Statistic>
                                    <S.Statistic>
                                        {getFormattedCoins(getAmountWithPercent(perSecond, incomeMultiplier))} / сек
                                    </S.Statistic>
                                </S.Statistics>
                            </S.Leader>
                        )
                    })
                }
            </S.List>
        </Page>
    );
}

export { LeadersPage };

