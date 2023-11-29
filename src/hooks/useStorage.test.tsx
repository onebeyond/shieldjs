import { renderHook, act } from '@testing-library/react'
import { describe, beforeEach, expect, test } from 'vitest'
import { useLocalStorage } from './useStorage'

describe('useStorage', () => {
  beforeEach(() => {
    // Clear storage before each test
    localStorage.clear()
  })

  test('should return default value when storage is empty', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'defaultValue'))
    const [value] = result.current
    expect(value).toBe('defaultValue')
  })

  test('should return stored value when storage is not empty', () => {
    localStorage.setItem('testKey', JSON.stringify('storedValue'))
    const { result } = renderHook(() => useLocalStorage('testKey', 'defaultValue'))
    const [value,,] = result.current
    expect(value).toBe('storedValue')
  })

  test('should update stored value when setValue is called', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'defaultValue'))
    const [, setValue] = result.current

    act(() => {
      setValue('newValue')
    })

    expect(result.current[0]).toBe('newValue')
    expect(JSON.parse(localStorage.getItem('testKey')!)).toBe('newValue')
  })

  test('should remove stored value when remove is called', () => {
    localStorage.setItem('testKey', JSON.stringify('storedValue'))

    const { result } = renderHook(() => useLocalStorage('testKey', 'defaultValue'))
    const [, , remove] = result.current

    act(() => {
      remove()
    })

    expect(result.current[0]).toBeUndefined()
    expect(localStorage.getItem('testKey')).toBeNull()
  })
})
