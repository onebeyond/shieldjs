import styled from 'styled-components'

export const HeroSection = styled.section`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.gradientBlueToGray};
  padding: 3rem 2rem;
  ${props => props.theme.mediaQueries.md} {
    padding: 4.5rem 6rem;
  }
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  text-align: left;
  ${props => props.theme.mediaQueries.md} {
    flex-basis: 40%;
  }
`

export const HeroTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.xl};
  margin: 0;
  ${props => props.theme.mediaQueries.md} {
    font-size: ${props => props.theme.fontSizes.xxl};
  }
`

export const HeroSubtitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.lg};
  line-height: 1.1;
  font-weight: normal;
  ${props => props.theme.mediaQueries.md} {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`

export const HeroDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.md};
  ${props => props.theme.mediaQueries.md} {
    font-size: ${props => props.theme.fontSizes.lg};
  }
`

export const HeroImage = styled.img`
  display: none;
  height: 180px;
  flex-basis: 30%;
  ${props => props.theme.mediaQueries.md} {
    display: block;
  }
`

export const HeroButton = styled.a`
  margin: auto;
  width: max-content;
  color: black;
  cursor: pointer;
  text-decoration: none;
  border-radius: 40px;
  border: 1px solid rgb(97, 218, 251);
  padding: 0.5rem 2rem;
  background: ${props => props.theme.colors.gradientButton};
  &:hover {
    color: black;
  }
`
