'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface LanguageProviderProps {
  children: React.ReactNode
}

interface Language {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
]

export const LanguageContext = React.createContext<{
  currentLanguage: Language
  setLanguage: (code: string) => void
}>({
  currentLanguage: languages[0],
  setLanguage: () => { },
})

export function LanguageProvider({ children }: LanguageProviderProps) {
  const router = useRouter()
  const [currentLanguage, setCurrentLanguage] = React.useState(languages[0])

  const setLanguage = React.useCallback((code: string) => {
    const language = languages.find((lang) => lang.code === code)
    if (language) {
      setCurrentLanguage(language)
      document.documentElement.lang = code
      // In a real app, this would update the URL and fetch translated content
      // router.push(`/${code}${pathname}`)
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function LanguageSelector() {
  const { currentLanguage, setLanguage } = React.useContext(LanguageContext)

  return (
    <Select value={currentLanguage.code} onValueChange={setLanguage}>
      <SelectTrigger className="w-[150px]">
        <SelectValue>
          <span className="flex items-center gap-2">
            <span>{currentLanguage.flag}</span>
            <span>{currentLanguage.name}</span>
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            <span className="flex items-center gap-2">
              <span>{language.flag}</span>
              <span>{language.name}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

