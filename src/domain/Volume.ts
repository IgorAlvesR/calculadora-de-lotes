export default class Volume {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly valuePointInDollar: number,
    private readonly maxLossPerTrade: number,
    private readonly stopPointValue: number,
  ) {}

  calculate() {
    const volume =
      this.maxLossPerTrade / this.valuePointInDollar / this.stopPointValue
    const volumeFormated = Number(volume.toFixed(2))

    if (this.isInvalidVolume(volumeFormated) || this.isInvalidParams()) {
      return 0
    }
    return volumeFormated
  }

  private isInvalidParams() {
    return (
      this.valuePointInDollar < 0 ||
      this.maxLossPerTrade < 0 ||
      this.stopPointValue < 0
    )
  }

  private isInvalidVolume(volume: number) {
    return isNaN(volume) || volume < 0
  }
}
