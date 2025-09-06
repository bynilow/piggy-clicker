import { ActionButtonProps } from "@/shared";

const BOOSTS_PAGE_ACTIONS = [
    {
        id: 'passive',
        title: 'Пассивные',
    },
    {
        id: 'active',
        title: 'Клики',
    },
    {
        id: 'employee',
        title: 'Сотрудники',
    },
] as const;

export { BOOSTS_PAGE_ACTIONS };