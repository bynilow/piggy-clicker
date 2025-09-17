import { useState } from 'react';
import { LOCALIZATION } from '../constants';
import * as S from './SendPage.styles'
import { CoinIcon, Dropdown, Loader, useDebounce, useUserStore } from '@/shared';
import { coinIconUrl, userImage } from '@/shared/assets';
import { AnimatePresence, LegacyAnimationControls, motion, TargetAndTransition, VariantLabels } from 'motion/react';
import { fetchAllUsers, useCoins, UserDataResponseDto, useUser, useUsers } from '@/entities/User';
import { DEFAULT_ANIMATION_DURATION_MS } from '@/shared/constants';

const SendPage = () => {
    const [amountToSend, setAmountToSend] = useState(0);
    const [whoRecipient, setWhoRecipient] = useState({ id: '', username: '' });
    const { coins } = useUserStore();

    const handleChangeAmountInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = Number(Number(event.currentTarget.value).toFixed(1));

        setAmountToSend(inputValue > coins ? Number(coins.toFixed(1)) : inputValue);
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
    }

    return (
        <S.Page>
            <S.Form>
                <S.Title>
                    {LOCALIZATION.SEND}
                </S.Title>
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
            </S.Form>
            <S.ButtonSend
                as={motion.button}
                transition={{ duration: 0 }}
                whileTap={{ scale: 0.90 }}
                disabled={!whoRecipient.id || !amountToSend || isSendCoinsPending}
                onClick={handleSendCoins}>
                {isSendCoinsPending ? <Loader size='S' /> : LOCALIZATION.TRANSFER_COINS}
            </S.ButtonSend>
        </S.Page>
    );
}

export { SendPage }