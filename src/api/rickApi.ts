import api from '.'
import { ApiResponse, Character } from '@/types'
import { mapCharacter } from './mappers/mapCharacter'

export const getCharacters = async (): Promise<ApiResponse<Character>> => {
  const { data } = await api.get('/character')
  return {
    info: data.info,
    results: mapCharacter(data.results)
  }
}
