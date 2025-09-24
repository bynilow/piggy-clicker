import { activeBoostsList, employeeBoostsList, passiveBoostsList } from "@/entities/Boost";
import { CardsSetsModel } from "../model";

const cardsSetsList: CardsSetsModel[] = [
    {
        id: "set_start",
        title: `Набор - "Все и сразу"`,
        costMultiplier: 1,
        imagePath: '',
        boosts: [
            ...passiveBoostsList.map(boost => boost.id),
            ...activeBoostsList.map(boost => boost.id),
            ...employeeBoostsList.map(boost => boost.id),
        ]
    },
];

export { cardsSetsList };

