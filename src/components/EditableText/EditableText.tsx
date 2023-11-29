import { useLocalStorage } from '@/hooks/useStorage'
import React, { useState } from 'react'

type EditTextProps = {
    name: string;
    value: string;
};

export const EditableText: React.FC<EditTextProps> = ({ name, value }) => {
  const [edit, setEdit] = useState(false)
  const [text, setText] = useLocalStorage(`${name}-text`, value)
  const [backup, setBackup] = useState(value)

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setBackup(text)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleBlur = () => {
    setEdit(false)
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setEdit(false)
      setText(backup)
    }
    if (event.key === 'Enter') {
      setEdit(false)
    }
  }

  return (
    edit
      ? (
            <input
                name={name}
                type='text'
                value={text}
                autoFocus
                onFocus={handleFocus}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyUp={handleKeyUp}
            />
        )
      : (
            <span onClick={() => setEdit(prev => !prev)}>
                {text}
            </span>
        )
  )
}
