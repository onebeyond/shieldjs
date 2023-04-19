import { Character } from '@/types/Character'

export const mapCharacter = (characters: any[]): Character[] => (characters.map((character) => ({
  id: character.id,
  name: character.name
}))
)
