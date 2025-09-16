import { Description, Error, Loader, useReferralsStore, useUserStore } from '@/shared';
import { CopyIcon, SendIcon } from '../assets';
import { APP_LINK, LOCALIZATION, TG_SHARE_LINK } from '../constants';
import * as S from './ReferralsPage.styles';
import { ReferralCell, useReferrals } from '@/entities/Referral';

const ReferralsPage = () => {
    const { id } = useUserStore();
    const { referralsIsLoading, referralsError } = useReferrals();
    const { referrals, referralsTotalPerSecond } = useReferralsStore();

    const handleInvite = () => {
        const url = `${TG_SHARE_LINK}/url?url=${APP_LINK}/?start=${id}&text=${LOCALIZATION.PLAY_WITH_ME}`;

        window.Telegram.WebApp.openTelegramLink(url);
    }

    if (referralsIsLoading) {
        return <Loader />
    }

    if (referralsError) {
        return <Error />
    }

    return (
        <S.Page>
            {
                referrals?.length
                    ? (
                        <S.FriendList>
                            <Description>
                                {LOCALIZATION.TOTAL_INCOME_AMOUNT}: +{referralsTotalPerSecond.toFixed(2)} / сек
                            </Description>
                            {
                                referrals.map(referral => (
                                    <ReferralCell key={referral.user_id} avatarUrl={referral.avatar_url} incomePerSecond={referral.makeYouPerSecond} username={referral.username} />
                                ))
                            }
                            <S.InviteUrl onClick={handleInvite}>
                                <S.SendIcon src={SendIcon} />
                                {LOCALIZATION.INVITE}
                            </S.InviteUrl>
                        </S.FriendList>
                    )
                    : <S.EmptyReferrals>
                        {LOCALIZATION.INVITE_FRIENDS}
                        <S.InviteUrl onClick={handleInvite}>
                            <S.SendIcon src={SendIcon} />
                            {LOCALIZATION.INVITE}
                        </S.InviteUrl>
                    </S.EmptyReferrals>
            }

        </S.Page>
    );
}

export { ReferralsPage };
