import { Character } from '@/types/Character'

export const mapCharacters = (characters: any[]): Character[] => (characters.map((character) => ({
  id: character.id,
  name: character.name,
  image: character.image
}))
)

export const mapCharacter = (character: any): Character => ({
  id: character.id,
  name: character.name,
  image: character.image
})
