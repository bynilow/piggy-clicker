const getFormattedCoins = (coins: number) => {
    return new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 2,
        notation: 'compact',
        compactDisplay: 'short'
    }).format(coins);
}

export { getFormattedCoins };