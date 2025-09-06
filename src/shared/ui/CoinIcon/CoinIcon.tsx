import { coinIconUrl } from '@/shared/assets';
import * as S from './CoinIcon.styles'

interface Props {
    isDisabled?: boolean;
}

const CoinIcon = ({ isDisabled }: Props) => {
    return (
        <S.Coin $isDisabled={isDisabled} src={coinIconUrl} />
    );
}

export { CoinIcon };