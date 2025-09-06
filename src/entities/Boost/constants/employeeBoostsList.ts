import { administratorImage, bookkeeperImage, cleanerImage, courierImage, securityImage, sellerImage } from "../assets";
import { EmployeeBoostModel } from "../model";

const employeeBoostsList: EmployeeBoostModel[] = [
    {
        id: "cleaner",
        title: "Уборщик",
        imagePath: cleanerImage,
        level: 0,
        amount: 0.1,
        cost: 2250,
        needToUnblock: []
    },
    {
        id: "seller",
        title: "Продавец",
        imagePath: sellerImage,
        level: 0,
        amount: 0.3,
        cost: 6450,
        needToUnblock: []
    },
    {
        id: "courier",
        title: "Курьер",
        imagePath: courierImage,
        level: 21,
        amount: 0.3,
        cost: 7210,
        needToUnblock: []
    },
    {
        id: "security",
        title: "Охранник",
        imagePath: securityImage,
        level: 0,
        amount: 0.8,
        cost: 18580,
        needToUnblock: []
    },
    {
        id: "bookkeeper",
        title: "Бухгалтер",
        imagePath: bookkeeperImage,
        level: 9,
        amount: 1.8,
        cost: 57200,
        needToUnblock: []
    },
    {
        id: "administrator",
        title: "Администратор",
        imagePath: administratorImage,
        level: 0,
        amount: 2.9,
        cost: 77800,
        needToUnblock: []
    },
];

export { employeeBoostsList };
