import { styled } from 'styled-components'

export const TutorialSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme.colors.gradientGrayToBlueToGray};
  padding: ${(props) => `${props.theme.space['7']} ${props.theme.space['6']}`};
  ${(props) => props.theme.mediaQueries.md} {
    gap: ${(props) => props.theme.space['3']};
    padding: ${(props) => `${props.theme.space['4']} ${props.theme.space['6']}`};
  }
`

export const TutorialTextsContainer = styled.div`
display: flex;
flex-direction: column;
`

export const TutorialTitle = styled.h1`
font-size: ${(props) => props.theme.fontSizes.lg};
font-weight: bold;
margin: 0;
${(props) => props.theme.mediaQueries.md} {
  font-size: ${(props) => props.theme.fontSizes.xl};
}
`

export const TutorialSubtitle = styled.h2`
font-size: ${(props) => props.theme.fontSizes.md};
font-weight: normal;
margin: ${(props) => `${props.theme.space['4']} 0`};
${(props) => props.theme.mediaQueries.md} {
  font-size: ${(props) => props.theme.fontSizes.md};
}
`

export const TutorialImage = styled.img`
  margin: ${(props) => `${props.theme.space['4']} 0`};
  max-width: 100%;
  height: auto;
`
