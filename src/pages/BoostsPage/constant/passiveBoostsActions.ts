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
    {
        id: 'sets',
        title: 'Наборы',
    },
] as const;

export { BOOSTS_PAGE_ACTIONS };