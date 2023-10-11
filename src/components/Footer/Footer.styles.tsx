import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  background-color: transparent;
  border-top: 1px solid #ddd;
  color: #fff;
  margin: 0 2rem;
  padding: 0.5rem 0;
  ${props => props.theme.mediaQueries.md} {
    margin: 0 3rem;
    padding: 1.5rem 0;
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
    gap: 1.5rem;
  }
`

export const LeftColumn = styled(Column)`
  align-items: flex-start;
`

export const RightColumn = styled(Column)`
  align-items: flex-end;
`

export const MenuList = styled.ul`
  padding: 0; // Add to reset.css
  margin: 0; // Add to reset.css
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${props => props.theme.mediaQueries.md} {
    gap: 1.5rem;
  }
  gap: ${props => props.theme.space['5']};
  ${props => props.theme.mediaQueries.md} {
    gap: 3.8rem;
  }
`

export const MenuListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.space['4']};
`

export const Subtitle = styled.h3`
  color: #fff;
  padding: 0; // Add to reset.css
  margin: 0; // Add to reset.css
  text-align: left;
  font-size:  ${props => props.theme.fontSizes.md};
  ${props => props.theme.mediaQueries.md} {
    font-size: ${props => props.theme.fontSizes.lg};
  };
`

export const Title = styled.h2`
  color: #fff;
  padding: 0; // Add to reset.css
  margin: 0; // Add to reset.css
  text-align: left;
  font-size:  ${props => props.theme.fontSizes.md};
  ${props => props.theme.mediaQueries.md} {
    font-size: ${props => props.theme.fontSizes.xl};
  };

`

export const OneBeyondIcon = styled.img`
  height: ${props => props.theme.space['8']};
  ${props => props.theme.mediaQueries.md} {
    height: ${props => props.theme.space['9']};
  }
`

export const LinkIcon = styled.img`
  height: 2rem;
  ${props => props.theme.mediaQueries.md} {
    height: 2.7rem;
  }
`
