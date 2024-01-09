import { Asset } from './interfaces/Asset'

export default class Hk50 implements Asset {
  getValuePerPoint() {
    return 0.13 // Dollar
  }
}
