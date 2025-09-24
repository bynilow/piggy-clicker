import { administratorImage, bookkeeperImage, cleanerImage, courierImage, securityImage, sellerImage } from "../assets";
import { EmployeeBoostModel } from "../model";

const employeeBoostsList: EmployeeBoostModel[] = [
    {
        id: "cleaner",
        rare: 'common',
        title: "Уборщик",
        imagePath: cleanerImage,
        amount: 0.2,
        cost: 112,
        needToUnblock: []
    },
    {
        id: "seller",
        rare: 'common',
        title: "Продавец",
        imagePath: sellerImage,
        amount: 0.6,
        cost: 322.5,
        needToUnblock: []
    },
    {
        id: "courier",
        rare: 'common',
        title: "Курьер",
        imagePath: courierImage,
        amount: 0.6,
        cost: 360.5,
        needToUnblock: []
    },
    {
        id: "security",
        rare: 'rare',
        title: "Охранник",
        imagePath: securityImage,
        amount: 1.6,
        cost: 929,
        needToUnblock: []
    },
    {
        id: "bookkeeper",
        rare: 'mythical',
        title: "Бухгалтер",
        imagePath: bookkeeperImage,
        amount: 3.6,
        cost: 2860,
        needToUnblock: []
    },
    {
        id: "administrator",
        rare: 'legendary',
        title: "Администратор",
        imagePath: administratorImage,
        amount: 5.8,
        cost: 3890,
        needToUnblock: []
    },
];

export { employeeBoostsList };
