import { styled } from 'styled-components'

export const FooterWrapper = styled.footer`
  background-color: transparent;
  border-top: 1px solid #ddd;
  color: #fff;
  margin: 0 2rem;
  padding: 0.5rem 0;
  ${props => props.theme.mediaQueries.md} {
    margin: 0 3rem;
    padding: 1.5rem 0
  };
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  margin-top: auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  ${props => props.theme.mediaQueries.md} {
    gap: 1.5rem
  }
`

export const LeftColumn = styled(Column)`
  align-items: flex-start;
`

export const RightColumn = styled(Column)`
  align-items: flex-end
`

export const MenuList = styled.ul`
  p: 0, // Add to reset.css
  m: 0, // Add to reset.css
  display: flex,
  justifyContent: space-around,
  alignItems: center,
  gap: $5,
  @md: {
    gap: 3.8rem
  }
`

export const MenuListItem = styled.li`
  display: flex,
  alignItems: center,
  justifyContent: center,
  mb: $4
`

export const Subtitle = styled.h3`
  color: #fff,
  p: 0, // Add to reset.css
  m: 0, // Add to reset.css
  fontSize: $4,
  @md: {
    fontSize: $6
  },
  textAlign: left
`

export const Title = styled.h2`
  color: #fff,
  fontSize: $5,
  @md: {
    fontSize: $7
  },
  m: 0,
  p: 0,
  textAlign: left

`

export const OneBeyondIcon = styled.img`
  height: $8,
  @md: {
    height: $9
  }
`

export const LinkIcon = styled.img`
  height: 2rem,
  @md: {
    height: 2.7rem
  }
`
