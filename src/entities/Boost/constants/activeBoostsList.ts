import { cupCoffeeImage, fastInternetImage, insiderTipImage, powerfulPcImage, privateJetImage } from "../assets";
import { ActiveBoostModel } from "../model";

const activeBoostsList: ActiveBoostModel[] = [
    {
        id: "cup_coffee",
        rare: 'common',
        title: "Кружка кофе",
        imagePath: cupCoffeeImage,
        type: 'click',
        amount: 1,
        cost: 100,
        needToUnblock: []
    },
    {
        id: "powerful_pc",
        rare: 'rare',
        title: "Мощный компьютер",
        imagePath: powerfulPcImage,
        type: 'click',
        amount: 4.1,
        cost: 4140,
        needToUnblock: []
    },
    {
        id: "fast_internet",
        rare: 'common',
        title: "Быстрый интернет",
        imagePath: fastInternetImage,
        type: 'click',
        amount: 1.8,
        cost: 1820,
        needToUnblock: []
    },
    {
        id: "market_insider_tip",
        rare: 'mythical',
        title: "Инсайдерская информация",
        imagePath: insiderTipImage,
        type: 'click',
        amount: 12.5,
        cost: 12500,
        needToUnblock: []
    },
    {
        id: "private_jet",
        rare: 'legendary',
        title: "Частный самолет",
        imagePath: privateJetImage,
        type: 'click',
        amount: 45.3,
        cost: 45300,
        needToUnblock: []
    },
];

export { activeBoostsList };
