import Volume from '@/domain/Volume'

export default class CalculateVolume {
  static execute(
    valuePointInDollar: number,
    maxLossPerTrade: number,
    stopPointValue: number,
  ) {
    const volume = new Volume(
      valuePointInDollar,
      maxLossPerTrade,
      stopPointValue,
    )
    return volume.calculate()
  }
}
