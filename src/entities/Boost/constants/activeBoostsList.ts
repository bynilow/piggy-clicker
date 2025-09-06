import { cupCoffeeImage, fastInternetImage, insiderTipImage, powerfulPcImage, privateJetImage } from "../assets";
import { ActiveBoostModel } from "../model";

const activeBoostsList: ActiveBoostModel[] = [
    {
        id: "cup_coffee",
        title: "Кружка кофе",
        imagePath: cupCoffeeImage,
        level: 0,
        type: 'click',
        amount: 1,
        cost: 100,
        needToUnblock: []
    },
    {
        id: "powerful_pc",
        title: "Мощный компьютер",
        imagePath: powerfulPcImage,
        level: 6,
        type: 'click',
        amount: 4.1,
        cost: 4140,
        needToUnblock: []
    },
    {
        id: "fast_internet",
        title: "Быстрый интернет",
        imagePath: fastInternetImage,
        level: 0,
        type: 'click',
        amount: 1.8,
        cost: 1820,
        needToUnblock: [{ id: 'test', level: 1 }]
    },
    {
        id: "market_insider_tip",
        title: "Инсайдерская информация",
        imagePath: insiderTipImage,
        level: 23,
        type: 'click',
        amount: 12.5,
        cost: 12500,
        needToUnblock: []
    },
    {
        id: "private_jet",
        title: "Частный самолет",
        imagePath: privateJetImage,
        level: 0,
        type: 'click',
        amount: 45.3,
        cost: 45300,
        needToUnblock: []
    },
];

export { activeBoostsList };
