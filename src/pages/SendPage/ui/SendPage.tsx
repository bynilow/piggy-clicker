import { ActionButton } from '@/shared';
import { useState } from 'react';
import { SEND_PAGE_ACTIONS } from '../constants';
import * as S from './SendPage.styles';
import { Send } from './Send';
import { History } from './History';

const tabs = {
    send: <Send />,
    history: <History />
}

const SendPage = () => {
    const [selectedAction, setSelectedAction] = useState<'send' | 'history'>('send');

    return (
        <S.Page>
            <S.ActionsGroup>
                {
                    SEND_PAGE_ACTIONS.map(action => (
                        <ActionButton isActive={action.id === selectedAction} id={action.id} title={action.title} onClick={() => setSelectedAction(action.id)} />
                    ))
                }
            </S.ActionsGroup>

            {tabs[selectedAction]}
        </S.Page>
    );
}

export { SendPage };
