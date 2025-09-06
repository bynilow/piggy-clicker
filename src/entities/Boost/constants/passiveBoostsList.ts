import { bankImage, bookStoreImage, carDealershipImage, cinemaImage, clothingStoreImage, coffeeShopImage, electronicsStoreImage, fitnessCenterImage, hotelImage, realEstateAgencyImage, restaurantImage, shoppingMallImage, skyscraperImage, supermarketImage, techStartupImage } from "../assets";
import { PassiveBoostModel } from "../model";

const passiveBoostsList: PassiveBoostModel[] = [
    {
        id: "coffee_shop",
        title: "Кофейня",
        imagePath: coffeeShopImage,
        level: 18,
        amount: 10.4,
        cost: 250,
        needToUnblock: []
    },
    {
        id: "clothing_store",
        title: "Магазин одежды",
        imagePath: clothingStoreImage,
        level: 0,
        amount: 22.9,
        cost: 550,
        needToUnblock: [
            { id: 'seller', level: 1 }
        ]
    },
    {
        id: "book_store",
        title: "Книжный магазин",
        imagePath: bookStoreImage,
        level: 0,
        amount: 13.3,
        cost: 320,
        needToUnblock: []
    },
    {
        id: "electronics_store",
        title: "Магазин электроники",
        imagePath: electronicsStoreImage,
        level: 15,
        amount: 45.8,
        cost: 1100,
        needToUnblock: [
            { id: 'seller', level: 3 },
            { id: 'cleaner', level: 1 }
        ]
    },
    {
        id: "restaurant",
        title: "Ресторан",
        imagePath: restaurantImage,
        level: 0,
        amount: 81.2,
        cost: 1950,
        needToUnblock: [
            { id: 'coffee_shop', level: 7 },
            { id: 'cleaner', level: 11 },
            { id: 'administrator', level: 7 },
        ]
    },
    {
        id: "supermarket",
        title: "Супермаркет",
        imagePath: supermarketImage,
        level: 0,
        amount: 87.5,
        cost: 2100,
        needToUnblock: [
            { id: 'seller', level: 9 },
            { id: 'security', level: 4 },
            { id: 'courier', level: 2 },
        ]
    },
    {
        id: "fitness_center",
        title: "Фитнес-центр",
        imagePath: fitnessCenterImage,
        level: 0,
        amount: 70.8,
        cost: 1700,
        needToUnblock: []
    },
    {
        id: "cinema",
        title: "Кинотеатр",
        imagePath: cinemaImage,
        level: 0,
        amount: 79.1,
        cost: 1900,
        needToUnblock: [
            { id: 'fast_internet', level: 13 },
            { id: 'cleaner', level: 7 },
        ]
    },
    {
        id: "car_dealership",
        title: "Автосалон",
        imagePath: carDealershipImage,
        level: 0,
        amount: 116.6,
        cost: 2800,
        needToUnblock: [
            { id: 'electronics_store', level: 12 }
        ]
    },
    {
        id: "real_estate_agency",
        title: "Агентство недвижимости",
        imagePath: realEstateAgencyImage,
        level: 0,
        amount: 102,
        cost: 2450,
        needToUnblock: [
            { id: 'market_insider_tip', level: 2 },
            { id: 'bookkeeper', level: 3 },
        ]
    },
    {
        id: "tech_startup",
        title: "IT-стартап",
        imagePath: techStartupImage,
        level: 0,
        amount: 150,
        cost: 3600,
        needToUnblock: [
            { id: 'electronics_store', level: 17 },
            { id: "book_store", level: 7 },
            { id: "powerful_pc", level: 3 },
            { id: "fast_internet", level: 6 },
            { id: 'bookkeeper', level: 12 },
        ]
    },
    {
        id: "shopping_mall",
        title: "Торговый центр",
        imagePath: shoppingMallImage,
        level: 0,
        amount: 129.1,
        cost: 3100,
        needToUnblock: [
            { id: "cinema", level: 12, },
            { id: "supermarket", level: 16, },
            { id: "fitness_center", level: 9, },
            { id: 'security', level: 10 },
        ]
    },
    {
        id: "hotel",
        title: "Отель",
        imagePath: hotelImage,
        level: 0,
        amount: 122.9,
        cost: 2950,
        needToUnblock: [
            { id: "restaurant", level: 10, },
            { id: 'administrator', level: 15 },
        ]
    },
    {
        id: "bank",
        title: "Банк",
        imagePath: bankImage,
        level: 11,
        amount: 216.6,
        cost: 5200,
        needToUnblock: [
            { id: "private_jet", level: 2 },
            { id: 'security', level: 18 },
        ]
    },
    {
        id: "skyscraper",
        title: "Небоскрёб",
        imagePath: skyscraperImage,
        level: 0,
        amount: 172.9,
        cost: 4150,
        needToUnblock: [
            { id: "coffee_shop", level: 21, },
            { id: "restaurant", level: 16, },
            { id: 'cleaner', level: 23 }
        ]
    }
];

export { passiveBoostsList };