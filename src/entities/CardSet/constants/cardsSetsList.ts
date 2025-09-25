import { activeBoostsList, employeeBoostsList, passiveBoostsList } from "@/entities/Boost";
import { CardsSetsModel } from "../model";
import { startBoostSetImage } from "../assets";

const cardsSetsList: CardsSetsModel[] = [
    {
        id: "set_start",
        title: `Набор - "Все и сразу"`,
        costMultiplier: 0.8,
        imagePath: startBoostSetImage,
        boosts: [
            ...passiveBoostsList.map(boost => boost.id),
            ...activeBoostsList.map(boost => boost.id),
            ...employeeBoostsList.map(boost => boost.id),
        ]
    },
    {
        id: "set_passive",
        title: `Набор - "Пассивный заработок"`,
        costMultiplier: 1.7,
        imagePath: startBoostSetImage,
        boosts: passiveBoostsList.map(boost => boost.id),
    },
    {
        id: "set_employees",
        title: `Набор - "Сотрудники"`,
        costMultiplier: 1.4,
        imagePath: startBoostSetImage,
        boosts: employeeBoostsList.map(boost => boost.id),
    },
    {
        id: "set_tech",
        title: `Набор - "Инженерное дело"`,
        costMultiplier: 1.6,
        imagePath: startBoostSetImage,
        boosts: [
            'electronics_store',
            'car_dealership',
            'tech_startup',
            'powerful_pc',
            'fast_internet',
        ]
    },
];

export { cardsSetsList };

