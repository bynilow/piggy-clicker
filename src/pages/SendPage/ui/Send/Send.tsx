import { Dropdown, Loader, useDebounce, useUserStore } from '@/shared';
import { coinIconUrl, userImage } from '@/shared/assets';
import { LOCALIZATION } from '../../constants';
import { AnimatePresence, motion } from 'motion/react';
import * as S from './Send.styles';
import { useUsers, useCoins, UserDataResponseDto } from '@/entities/User';
import { useState } from 'react';

const Send = () => {
    const [amountToSend, setAmountToSend] = useState(0);
    console.log(amountToSend)
    const [whoRecipient, setWhoRecipient] = useState({ id: '', username: '' });
    const { coins } = useUserStore();

    const handleChangeAmountInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const onlyDigitsValue = event.currentTarget.value.replace(/\D/g, '');
        const inputValue = parseInt(onlyDigitsValue);

        setAmountToSend(inputValue > coins ? Number(coins.toFixed(0)) : inputValue);
    }

    const { id } = useUserStore();

    const [usernameForFetch, setUsernameForFetch] = useState('');

    const debounceFetchUsers = useDebounce((username: string) => {
        setUsernameForFetch(username)
    });

    const { usersData, usersError, usersIsLoading } = useUsers(Boolean(usernameForFetch), usernameForFetch);

    const { sendCoins, isSendCoinsPending } = useCoins();

    const [isDropdownOpened, setIsDropdownOpened] = useState(false);

    const handleChangeRecipientInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setWhoRecipient({
            id: '',
            username: event.currentTarget.value
        });

        debounceFetchUsers(event.currentTarget.value);
    }

    const handleSelectUser = (user: UserDataResponseDto) => {
        setWhoRecipient({
            id: user.id.toString(),
            username: user.username
        });
        setIsDropdownOpened(false);
    }

    const handleSendCoins = async () => {
        await sendCoins({ send_to_id: Number(whoRecipient.id), coins: amountToSend });
        setWhoRecipient({ id: '', username: '' });
        setAmountToSend(0);
    };

    return (
        <S.Form>
            <S.InputsGroup>
                <S.InputContent
                    onClick={(event) => event.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'end' })}>

                    {LOCALIZATION.SEND_AMOUNT}
                    <S.InputWrapper>
                        <S.Input
                            type='number'
                            placeholder={LOCALIZATION.ENTER_AMOUNT}
                            value={amountToSend || ''}
                            onChange={handleChangeAmountInput} />
                        <S.IconWrapper>
                            <S.Icon src={coinIconUrl} />
                        </S.IconWrapper>
                    </S.InputWrapper>
                </S.InputContent>
                <S.InputContent
                    onClick={(event) => event.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'end' })}>

                    {LOCALIZATION.WHO_ARE_SENDING}
                    <S.InputWrapper>
                        <AnimatePresence>
                            {
                                whoRecipient.username.replace('@', '') && isDropdownOpened && (
                                    <Dropdown
                                        values={usersData?.filter(user => user.id !== id)}
                                        isError={!!usersError}
                                        isLoading={usersIsLoading || usernameForFetch !== whoRecipient.username}
                                        onSelect={handleSelectUser} />
                                )
                            }
                        </AnimatePresence>
                        <S.Input
                            placeholder={LOCALIZATION.ENTER_WHO}
                            onFocus={(event) => {
                                event.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                setIsDropdownOpened(true);
                            }}
                            onBlur={() => setTimeout(() => setIsDropdownOpened(false), 100)}
                            onChange={handleChangeRecipientInput}
                            value={whoRecipient.username} />
                        <S.IconWrapper>
                            <S.Icon $isColorInvert src={userImage} />
                        </S.IconWrapper>
                    </S.InputWrapper>
                </S.InputContent>
            </S.InputsGroup>
            <S.ButtonSend
                as={motion.button}
                transition={{ duration: 0 }}
                whileTap={{ scale: 0.90 }}
                disabled={!whoRecipient.id || !amountToSend || isSendCoinsPending}
                onClick={handleSendCoins}>
                {isSendCoinsPending ? <Loader size='S' /> : LOCALIZATION.TRANSFER_COINS}
            </S.ButtonSend>
        </S.Form>
    );
}

export { Send }