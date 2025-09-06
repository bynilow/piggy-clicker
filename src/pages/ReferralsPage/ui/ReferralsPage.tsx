import { CopyIcon } from '../assets';
import { LOCALIZATION } from '../constants';
import * as S from './ReferralsPage.styles';

const ReferralsPage = () => {
    // TODO: удалить при добавлении сетевого слоя
    const friends = [];

    return (
        <S.Page>
            {
                friends.length
                    ? (
                        <S.FriendList>
                            <S.FriendCell $depthFriend={0}>
                                <S.FriendAvatar />
                                <S.FriendInfo>
                                    <div>
                                        username friend
                                    </div>
                                    <S.IncomeFromFriend>
                                        +52.5/сек
                                    </S.IncomeFromFriend>
                                </S.FriendInfo>
                            </S.FriendCell>
                            <S.FriendCell $depthFriend={1}>
                                <S.FriendAvatar />
                                <S.FriendInfo>
                                    <div>
                                        username friend
                                    </div>
                                    <S.IncomeFromFriend>
                                        +52.5/сек
                                    </S.IncomeFromFriend>
                                </S.FriendInfo>
                            </S.FriendCell>
                            <S.FriendCell $depthFriend={1}>
                                <S.FriendAvatar />
                                <S.FriendInfo>
                                    <div>
                                        username friend
                                    </div>
                                    <S.IncomeFromFriend>
                                        +52.5/сек
                                    </S.IncomeFromFriend>
                                </S.FriendInfo>
                            </S.FriendCell>
                            <S.FriendCell $depthFriend={0}>
                                <S.FriendAvatar />
                                <S.FriendInfo>
                                    <div>
                                        username friend
                                    </div>
                                    <S.IncomeFromFriend>
                                        +52.5/сек
                                    </S.IncomeFromFriend>
                                </S.FriendInfo>
                            </S.FriendCell>
                            <S.FriendCell $depthFriend={0}>
                                <S.FriendAvatar />
                                <S.FriendInfo>
                                    <div>
                                        username friend
                                    </div>
                                    <S.IncomeFromFriend>
                                        +52.5/сек
                                    </S.IncomeFromFriend>
                                </S.FriendInfo>
                            </S.FriendCell>
                        </S.FriendList>
                    )
                    : <S.EmptyReferrals>
                        {LOCALIZATION.INVITE_FRIENDS}
                        <S.InviteUrl>
                            tg.com/clicker/#id
                            <S.CopyIcon src={CopyIcon} />
                        </S.InviteUrl>
                    </S.EmptyReferrals>
            }

        </S.Page>
    );
}

export { ReferralsPage };
