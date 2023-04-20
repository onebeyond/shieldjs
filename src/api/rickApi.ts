import api from '.'
import { RickApiResponse, Character } from '@/types'
import { mapCharacter } from './mappers/mapCharacter'

export const getCharacters = async (): Promise<RickApiResponse<Character>> => {
  const { data } = await api.get('/character')
  return {
    info: data.info,
    results: mapCharacter(data.results)
  }
}
