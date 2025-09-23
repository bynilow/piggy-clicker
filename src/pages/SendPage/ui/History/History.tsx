import { CoinIcon, Description, Error, getFormattedCoins, Loader, useUserStore } from '@/shared';
import * as S from './History.styles'
import { useSendingHistory } from '@/entities/User';
import { LOCALIZATION } from '../../constants';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { useMemo } from 'react';
dayjs.locale('ru');

const History = () => {
    const { id } = useUserStore();
    const { sendingHistoryData, sendingHistoryError, sendingHistoryIsLoading } = useSendingHistory();

    const formattedHistory = useMemo(() => {
        if (!sendingHistoryData) {
            return []
        }

        const uniqueDates = Array.from(new Set(sendingHistoryData.map(historyItem => new Date(historyItem.datetime).toLocaleDateString())));

        return uniqueDates.map(date => {
            const operations =
                sendingHistoryData
                    .filter(historyItem => new Date(historyItem.datetime).toLocaleDateString().startsWith(date))
                    .map(historyItem => ({
                        id: historyItem.id,
                        is_sending: historyItem.sender_id === id.toString(),
                        full_date_time: new Date(historyItem.datetime),
                        coins: historyItem.coins,
                        user: {
                            username: historyItem.username,
                            avatar: historyItem.avatar_url,
                        },
                    }))

            return {
                date: date,
                operations,
            }
        })
    }, [sendingHistoryData]);

    if (sendingHistoryError) {
        return <Error />
    }

    if (sendingHistoryIsLoading) {
        return <Loader />
    }

    if (sendingHistoryData && sendingHistoryData.length === 0) {
        return LOCALIZATION.YOUR_TRANSFERS_HERE;
    }

    return (
        <S.History>
            {
                formattedHistory?.map(history => (
                    <S.Date>
                        <S.DateTitle>
                            {dayjs(history.date.split('.').reverse().join('-')).format('DD MMMM, YYYY')}
                        </S.DateTitle>
                        {
                            history.operations.map(operation => (
                                <S.HistoryItem>
                                    <S.UserInfo>
                                        <S.Avatar src={operation.user.avatar} />
                                        <S.Username>
                                            {operation.user.username}
                                        </S.Username>
                                    </S.UserInfo>
                                    <S.AmountAndTime>
                                        <S.Amount $isUserSender={operation.is_sending}>
                                            {operation.is_sending ? '-' : '+'} {getFormattedCoins(operation.coins)} <CoinIcon />
                                        </S.Amount>
                                        <S.Time>
                                            {new Date(operation.full_date_time).toLocaleTimeString().slice(0, -3)}
                                        </S.Time>
                                    </S.AmountAndTime>
                                </S.HistoryItem>
                            ))
                        }
                    </S.Date>
                ))
            }
        </S.History>
    );
}

export { History };