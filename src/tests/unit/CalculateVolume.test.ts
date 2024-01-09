import Hk50 from '@/domain/Hk50'
import CalculateVolume from '@/useCase/CalculateVolume'
import { expect, test } from 'vitest'

test('Deve retornar quantidade de volume da operação', () => {
  const hk50 = new Hk50()
  const maxLossPerTrade = 5 // em Dolar
  const stopPointValue = 36.46
  const volume = CalculateVolume.execute(
    hk50.getValuePerPoint(),
    maxLossPerTrade,
    stopPointValue,
  )
  expect(volume).toBe(1.05)
})

test('Deve retornar 0 quando passar um valor negativo', () => {
  const hk50 = new Hk50()
  const maxLossPerTrade = -1 // em Dolar
  const stopPointValue = -1
  const volume = CalculateVolume.execute(
    hk50.getValuePerPoint(),
    maxLossPerTrade,
    stopPointValue,
  )
  expect(volume).toBe(0)
})
