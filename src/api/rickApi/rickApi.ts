import api from '..'
import { Character } from '@/types'
import { mapCharacter, mapCharacters } from './mappers/characterMapper'

export interface RickApiPaginateResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

const rickApi = api({ url: 'https://rickandmortyapi.com/api' })

export const getCharacters = async (): Promise<RickApiPaginateResponse> => {
  const { data } = await rickApi.get('/character')
  return {
    info: data.info,
    results: mapCharacters(data.results)
  }
}

export const getCharacter = async (id: number): Promise<Character> => {
  const { data } = await rickApi.get(`/character/${id}`)
  return mapCharacter(data)
}
