import { administratorImage, bookkeeperImage, cleanerImage, courierImage, securityImage, sellerImage } from "../assets";
import { EmployeeBoostModel } from "../model";

const employeeBoostsList: EmployeeBoostModel[] = [
    {
        id: "cleaner",
        title: "Уборщик",
        imagePath: cleanerImage,
        amount: 0.2,
        cost: 112,
        needToUnblock: []
    },
    {
        id: "seller",
        title: "Продавец",
        imagePath: sellerImage,
        amount: 0.6,
        cost: 322.5,
        needToUnblock: []
    },
    {
        id: "courier",
        title: "Курьер",
        imagePath: courierImage,
        amount: 0.6,
        cost: 360.5,
        needToUnblock: []
    },
    {
        id: "security",
        title: "Охранник",
        imagePath: securityImage,
        amount: 1.6,
        cost: 929,
        needToUnblock: []
    },
    {
        id: "bookkeeper",
        title: "Бухгалтер",
        imagePath: bookkeeperImage,
        amount: 3.6,
        cost: 2860,
        needToUnblock: []
    },
    {
        id: "administrator",
        title: "Администратор",
        imagePath: administratorImage,
        amount: 5.8,
        cost: 3890,
        needToUnblock: []
    },
];

export { employeeBoostsList };
