const getFormattedCoins = (coins: number, isCompact: boolean = true) => {
    return new Intl.NumberFormat(isCompact ? 'en-US' : 'ru-RU', {
        maximumFractionDigits: 1,
        notation: isCompact ? 'compact' : 'standard',
        compactDisplay: 'short'
    }).format(coins);
}

export { getFormattedCoins };