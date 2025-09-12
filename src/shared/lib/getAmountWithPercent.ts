const getAmountWithPercent = (amount: number, percent: number) => {
    return Number((amount * (1 + percent / 100)).toFixed(2))
};

export { getAmountWithPercent };
