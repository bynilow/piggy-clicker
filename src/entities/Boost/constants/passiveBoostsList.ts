import { bankImage, bookStoreImage, carDealershipImage, cinemaImage, clothingStoreImage, coffeeShopImage, electronicsStoreImage, fitnessCenterImage, hotelImage, realEstateAgencyImage, restaurantImage, shoppingMallImage, skyscraperImage, supermarketImage, techStartupImage } from "../assets";
import { PassiveBoostModel } from "../model";

const passiveBoostsList: PassiveBoostModel[] = [
    {
        id: "coffee_shop",
        title: "Кофейня",
        imagePath: coffeeShopImage,
        amount: 0.17,
        cost: 250,
        needToUnblock: []
    },
    {
        id: "clothing_store",
        title: "Магазин одежды",
        imagePath: clothingStoreImage,
        amount: 0.38,
        cost: 550,
        needToUnblock: [
            { id: 'seller', level: 1 }
        ]
    },
    {
        id: "book_store",
        title: "Книжный магазин",
        imagePath: bookStoreImage,
        amount: 0.22,
        cost: 320,
        needToUnblock: []
    },
    {
        id: "electronics_store",
        title: "Магазин электроники",
        imagePath: electronicsStoreImage,
        amount: 0.76,
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
        amount: 1.35,
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
        amount: 1.45,
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
        amount: 1.18,
        cost: 1700,
        needToUnblock: []
    },
    {
        id: "cinema",
        title: "Кинотеатр",
        imagePath: cinemaImage,
        amount: 1.31,
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
        amount: 1.94,
        cost: 2800,
        needToUnblock: [
            { id: 'electronics_store', level: 12 }
        ]
    },
    {
        id: "real_estate_agency",
        title: "Агентство недвижимости",
        imagePath: realEstateAgencyImage,
        amount: 1.7,
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
        amount: 2.5,
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
        amount: 2.15,
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
        amount: 2.04,
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
        amount: 3.61,
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
        amount: 2.8,
        cost: 4150,
        needToUnblock: [
            { id: "coffee_shop", level: 21, },
            { id: "restaurant", level: 16, },
            { id: 'cleaner', level: 23 }
        ]
    }
];

export { passiveBoostsList };