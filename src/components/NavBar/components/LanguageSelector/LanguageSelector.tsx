import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageButton } from './LanguageSelector.styles'

const languages = [
  { code: 'en', icon: '🇬🇧' },
  { code: 'es', icon: '🇪🇸' }
]

interface LanguageSelectorProps {
    defaultLanguage?: string
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ defaultLanguage = 'en' }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage)
  const { i18n } = useTranslation()

  const handleOnLang = (code: string) => {
    setSelectedLanguage(code)
    i18n.changeLanguage(code).then()
  }

  return (
    <div>
        {languages?.map(({ code, icon }) => (
          <LanguageButton
            key={code}
            selected={code === selectedLanguage}
            onClick={() => handleOnLang(code)}>
            {icon}
          </LanguageButton>
        ))}
      </div>
  )
}
