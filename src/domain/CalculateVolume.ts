export default class CalculateVolume {
  static execute(
    valuePointInDollar: number,
    maxLossPerTrade: number,
    stopPointValue: number,
  ) {
    const volume = maxLossPerTrade / valuePointInDollar / stopPointValue
    return +volume.toFixed(2)
  }
}
