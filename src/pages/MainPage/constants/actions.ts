import { ActionButtonProps } from "@/shared";
import { icons } from "../assets";

const MAIN_PAGE_ACTIONS = [
    {
        id: 'main',
        title: 'Главная',
        iconUrl: icons.homeIconUrl
    },
    {
        id: 'boosts',
        title: 'Ускорения',
        iconUrl: icons.boostIconUrl
    },
    {
        id: 'referrals',
        title: 'Рефералы',
        iconUrl: icons.referralsIconUrl
    },
    {
        id: 'send',
        title: 'Перевести',
        iconUrl: icons.sendIconUrl
    },
] as const;

export { MAIN_PAGE_ACTIONS };