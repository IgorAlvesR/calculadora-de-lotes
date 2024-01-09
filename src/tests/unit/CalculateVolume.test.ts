import CalculateVolume from '@/domain/CalculateVolume'
import { expect, test } from 'vitest'

test('Deve retornar quantidade de volume da operação', () => {
  const VALUEPOINTINDOLLAR = 0.13
  const maxLossPerTrade = 5 // em Dolar
  const stopPointValue = 36.46
  const volume = CalculateVolume.execute(
    VALUEPOINTINDOLLAR,
    maxLossPerTrade,
    stopPointValue,
  )
  expect(volume).toBe(1.05)
})
