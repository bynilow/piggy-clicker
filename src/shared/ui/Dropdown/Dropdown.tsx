import { motion, TargetAndTransition, VariantLabels } from 'motion/react';
import * as S from './Dropdown.styles'
import { UserDataResponseDto } from '@/entities/User';
import { Loader } from '../Loader';
import { Error } from '../Error';
import { LOCALIZATION } from '@/shared/constants';

const initialAnimation: TargetAndTransition | VariantLabels = {
    opacity: 0,
    y: -20
}

const animateAnimation: TargetAndTransition | VariantLabels = {
    opacity: 1,
    y: 0
}

interface ItemProps {
    id: string | number;
    text: string;
    image_url?: string;
}

interface Props {
    onSelect(value: UserDataResponseDto): void;
    values?: UserDataResponseDto[];
    isLoading: boolean;
    isError: boolean;
}

const Dropdown = ({ onSelect, values, isLoading, isError }: Props) => {
    return (
        <S.Dropdown
            as={motion.div}
            animate={animateAnimation}
            initial={initialAnimation}
            exit={initialAnimation}>

            {
                isLoading && <Loader />
            }

            {
                isError && <Error />
            }

            {
                values && values.length === 0 && LOCALIZATION.NOTHING_FOUND
            }

            {
                !isLoading && !isError && values && values.length !== 0 && values.map(value => (
                    <S.UserDropdownItem key={value.id} onClick={() => onSelect(value)}>
                        <S.UserAvatar src={value.avatar_url} />
                        {value.username}
                    </S.UserDropdownItem>
                ))
            }
        </S.Dropdown>
    );
}

export { Dropdown };