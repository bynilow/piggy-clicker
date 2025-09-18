import { CoinIcon, Description, Error, getFormattedCoins, Loader } from '@/shared';
import * as S from './History.styles'
import { useSendingHistory } from '@/entities/User';
import { LOCALIZATION } from '../../constants';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
dayjs.locale('ru');

const History = () => {
    const { sendingHistoryData, sendingHistoryError, sendingHistoryIsLoading } = useSendingHistory();

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
                sendingHistoryData?.map(history => (
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