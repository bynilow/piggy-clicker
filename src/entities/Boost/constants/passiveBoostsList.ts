import { bakeryImage, bankImage, bookStoreImage, carDealershipImage, cinemaImage, clothingStoreImage, coffeeShopImage, electronicsStoreImage, fitnessCenterImage, hotelImage, realEstateAgencyImage, restaurantImage, shoppingMallImage, skyscraperImage, supermarketImage, techStartupImage } from "../assets";
import { PassiveBoostModel } from "../model";

const passiveBoostsList: PassiveBoostModel[] = [
    {
        id: "coffee_shop" as const,
        rare: 'common',
        title: "Кофейня",
        imagePath: coffeeShopImage,
        amount: 0.17,
        cost: 250,
        needToUnblock: []
    },
    {
        id: "clothing_store" as const,
        rare: 'common',
        title: "Магазин одежды",
        imagePath: clothingStoreImage,
        amount: 0.38,
        cost: 550,
        needToUnblock: [
            { id: 'seller', level: 1 }
        ]
    },
    {
        id: "bakery" as const,
        rare: 'rare',
        title: "Пекарня",
        imagePath: bakeryImage,
        amount: 0.65,
        cost: 740,
        createdDate: new Date('2025-09-26, 13:00'),
        needToUnblock: []
    },
    {
        id: "book_store" as const,
        rare: 'common',
        title: "Книжный магазин",
        imagePath: bookStoreImage,
        amount: 0.22,
        cost: 320,
        needToUnblock: []
    },
    {
        id: "electronics_store" as const,
        rare: 'rare',
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
        id: "restaurant" as const,
        rare: 'rare',
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
        id: "supermarket" as const,
        rare: 'mythical',
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
        id: "fitness_center" as const,
        rare: 'rare',
        title: "Фитнес-центр",
        imagePath: fitnessCenterImage,
        amount: 1.18,
        cost: 1700,
        needToUnblock: []
    },
    {
        id: "cinema" as const,
        rare: 'rare',
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
        id: "car_dealership" as const,
        rare: 'mythical',
        title: "Автосалон",
        imagePath: carDealershipImage,
        amount: 1.94,
        cost: 2800,
        needToUnblock: [
            { id: 'electronics_store', level: 12 }
        ]
    },
    {
        id: "real_estate_agency" as const,
        rare: 'rare',
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
        id: "tech_startup" as const,
        title: "IT-стартап",
        rare: 'legendary',
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
        id: "shopping_mall" as const,
        title: "Торговый центр",
        rare: 'mythical',
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
        id: "hotel" as const,
        title: "Отель",
        rare: 'mythical',
        imagePath: hotelImage,
        amount: 2.04,
        cost: 2950,
        needToUnblock: [
            { id: "restaurant", level: 10, },
            { id: 'administrator', level: 15 },
        ]
    },
    {
        id: "bank" as const,
        title: "Банк",
        rare: 'legendary',
        imagePath: bankImage,
        amount: 3.61,
        cost: 5200,
        needToUnblock: [
            { id: "private_jet", level: 2 },
            { id: 'security', level: 18 },
        ]
    },
    {
        id: "skyscraper" as const,
        title: "Небоскрёб",
        rare: 'legendary',
        imagePath: skyscraperImage,
        amount: 2.8,
        cost: 4150,
        needToUnblock: [
            { id: "coffee_shop", level: 21, },
            { id: "restaurant", level: 16, },
            { id: 'cleaner', level: 23 }
        ]
    }
] as const;

export { passiveBoostsList };