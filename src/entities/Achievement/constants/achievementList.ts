import { AchievementModel } from "../model";

const achievementList: AchievementModel[] = [
  {
    id: 'buy_boosts',
    description: 'Купить любых улучшений:',
    image: '',
    level: 0,
    currentAmount: 0,
    levelsAmount: {
      common: 50,
      rare: 300,
      mythical: 700,
      legendary: 1900,
    },
    giftBoostSetId: "set_start",
    giftBoostSetByLevel: {
      common: 3,
      rare: 9,
      mythical: 17,
      legendary: 45,
    },
  },

  {
    id: 'buy_passive',
    description: 'Купить пассивных улучшений:',
    image: '',
    level: 0,
    currentAmount: 0,
    levelsAmount: {
      common: 10,
      rare: 100,
      mythical: 300,
      legendary: 700,
    },
    giftBoostSetId: "set_passive",
    giftBoostSetByLevel: {
      common: 2,
      rare: 5,
      mythical: 12,
      legendary: 15,
    },
  },

  {
    id: 'buy_active',
    description: 'Купить активных улучшений:',
    image: '',
    level: 0,
    currentAmount: 0,
    levelsAmount: {
      common: 5,
      rare: 50,
      mythical: 120,
      legendary: 280,
    },
    giftBoostSetId: "set_active",
    giftBoostSetByLevel: {
      common: 1,
      rare: 2,
      mythical: 3,
      legendary: 10,
    },
  },

  {
    id: 'buy_employees',
    description: 'Купить улучшений сотрудников:',
    image: '',
    level: 0,
    currentAmount: 0,
    levelsAmount: {
      common: 7,
      rare: 80,
      mythical: 180,
      legendary: 410,
    },
    giftBoostSetId: "set_employees",
    giftBoostSetByLevel: {
      common: 1,
      rare: 2,
      mythical: 5,
      legendary: 15,
    },
  },

  {
    id: 'invite_referrals',
    description: 'Пригласить новых игроков:',
    image: '',
    level: 0,
    currentAmount: 0,
    levelsAmount: {
      common: 1,
      rare: 2,
      mythical: 3,
      legendary: 5,
    },
    giftBoostSetId: "set_start",
    giftBoostSetByLevel: {
      common: 5,
      rare: 10,
      mythical: 20,
      legendary: 50,
    },
  },

  {
    id: 'referrals_income',
    description: 'Доход от приглашенных в секунду:',
    image: '',
    level: 0,
    currentAmount: 0,
    levelsAmount: {
      common: 1,
      rare: 10,
      mythical: 35,
      legendary: 100,
    },
    giftBoostSetId: "set_start",
    giftBoostSetByLevel: {
      common: 2,
      rare: 5,
      mythical: 15,
      legendary: 35,
    },
  },

  {
    id: 'buy_one',
    description: 'Довести любое улучшение до уровня:',
    image: '',
    level: 0,
    currentAmount: 0,
    levelsAmount: {
      common: 3,
      rare: 8,
      mythical: 20,
      legendary: 50,
    },
    giftBoostSetId: "set_start",
    giftBoostSetByLevel: {
      common: 1,
      rare: 3,
      mythical: 5,
      legendary: 12,
    },
  },
];

export { achievementList };
