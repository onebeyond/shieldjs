import { styled } from 'styled-components'

export const TechnologiesSection = styled.section`
  display: 'flex',
  justify-content: 'center',
  align-items: 'center',
  flex-direction: 'column',
  background: ${(props) => props.theme.colors.gray900};
  padding: ${(props) => `${props.theme.space['7']} ${props.theme.space['6']}`};
   ${(props) => props.theme.mediaQueries.md} {
    padding: 4.5rem 6rem;
  }
`

export const TechnologiesTextsContainer = styled.div`
  display: 'flex',
  flex-direction: 'column'
`

export const TechnologiesTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 'bold',
  margin: 0;
  ${(props) => props.theme.mediaQueries.md} {
    font-size: ${(props) => props.theme.fontSizes.xl};
  }
`

export const TechnologiesSubtitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: 'normal',
  margin: ${(props) => `${props.theme.space['4']} 0`};
  ${(props) => props.theme.mediaQueries.md} {
    font-size: ${(props) => props.theme.fontSizes.md};
  }
`

export const TechnologiesList = styled.ul`
  padding: 0,
  margin-top: 0,
  display: 'flex',
  flex-direction: 'column',
  justify-content: 'center',
  align-items: 'center',
  gap: ${(props) => props.theme.space['2']};
  margin: ${(props) => `${props.theme.space['4']} 0`};
  ${(props) => props.theme.mediaQueries.md} {
    flex-direction: 'row',
    gap: margin: ${(props) => props.theme.space['6']};
  }
`

export const TechnologiesImage = styled.img`
  width: '3rem', ${(props) => props.theme.mediaQueries.md} {
    width: '5rem';
  }
`

export const TechnologiesListItem = styled.li`
  list-style: 'none';
`
