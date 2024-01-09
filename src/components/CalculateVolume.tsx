'use client'
import { Label } from '@radix-ui/react-label'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useForm } from 'react-hook-form'
import { FormCalculate } from '@/types/FormCalculate'
import CalculateVolume from '@/useCase/CalculateVolume'
import Hk50 from '@/domain/Hk50'
import { useState } from 'react'
import { toast } from 'sonner'

export default function CalculateVolumeView() {
  const [volume, setVolume] = useState<number | null>(null)
  const { register, handleSubmit } = useForm<FormCalculate>({
    mode: 'all',
    criteriaMode: 'all',
  })

  const handleCalculate = handleSubmit((data) => {
    const hk50 = new Hk50()
    const volume = CalculateVolume.execute(
      hk50.getValuePerPoint(),
      data.maxLossPerTrade,
      data.stopPointValue,
    )
    if (volume) {
      setVolume(volume)
      return
    }
    setVolume(null)
    toast('Ops!', {
      cancel: {
        label: 'Ok',
      },
      description: 'Valores informados são inválidos.',
    })
  })

  return (
    <Card className="w-full md:max-w-3xl space-y-12 h-screen md:h-full">
      <CardHeader>
        <CardTitle className="md:text-2xl text-lg">
          Olá Trader, bem-vindo à Calculadora de Volume
        </CardTitle>
        <CardDescription className="text-xs">
          Os cálculos apresentados são baseados na corretora ActiveTrades.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-12">
        <h1 className="text-md md:text-lg  font-semibold text-center">
          Ativo: HK50
        </h1>
        <form id="formCalculate" onSubmit={handleCalculate}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label
                htmlFor="maxLossPerTrade"
                className="text-xs text-slate-600"
              >
                Informe sua perda máxima por trade
              </Label>
              <Input
                id="maxLossPerTrade"
                type="number"
                placeholder="$5.00"
                {...register('maxLossPerTrade')}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label
                htmlFor="stopPointValue"
                className="text-xs text-slate-600"
              >
                Informe o valor do seu stop em pontos
              </Label>
              <Input
                id="stopPointValue"
                type="number"
                placeholder="100.00"
                {...register('stopPointValue')}
              />
            </div>
          </div>
        </form>
        <p className="text-md md:text-lg">
          Volume máximo: <span className="font-bold">{volume}</span>
        </p>
      </CardContent>

      <CardFooter>
        <Button form="formCalculate" className="w-full font-bold">
          Calcular
        </Button>
      </CardFooter>
    </Card>
  )
}
