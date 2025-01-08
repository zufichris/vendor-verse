'use client'

import * as React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface CurrencyProviderProps {
  children: React.ReactNode
}

interface Currency {
  code: string
  symbol: string
  name: string
}

const currencies: Currency[] = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
]

export const CurrencyContext = React.createContext<{
  currentCurrency: Currency
  setCurrency: (code: string) => void
  formatPrice: (amount: number) => string
}>({
  currentCurrency: currencies[0],
  setCurrency: () => {},
  formatPrice: () => '',
})

export function CurrencyProvider({ children }: CurrencyProviderProps) {
  const [currentCurrency, setCurrentCurrency] = React.useState(currencies[0])

  const setCurrency = React.useCallback((code: string) => {
    const currency = currencies.find((curr) => curr.code === code)
    if (currency) {
      setCurrentCurrency(currency)
    }
  }, [])

  const formatPrice = React.useCallback(
    (amount: number) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currentCurrency.code,
      }).format(amount)
    },
    [currentCurrency]
  )

  return (
    <CurrencyContext.Provider value={{ currentCurrency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function CurrencySelector() {
  const { currentCurrency, setCurrency } = React.useContext(CurrencyContext)

  return (
    <Select value={currentCurrency.code} onValueChange={setCurrency}>
      <SelectTrigger className="w-[150px]">
        <SelectValue>
          <span className="flex items-center gap-2">
            <span>{currentCurrency.symbol}</span>
            <span>{currentCurrency.code}</span>
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {currencies.map((currency) => (
          <SelectItem key={currency.code} value={currency.code}>
            <span className="flex items-center gap-2">
              <span>{currency.symbol}</span>
              <span>{currency.code}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

