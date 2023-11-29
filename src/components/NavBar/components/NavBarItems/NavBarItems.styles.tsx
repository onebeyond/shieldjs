import styled from 'styled-components'

export const StyledNavItem = styled.li`
  color: ${props => props.theme.colors.white};;
  list-style: none;
  padding: 0.5rem 1rem;
  & a {
    text-decoration: none;
    color: ${props => props.theme.colors.white};;
    &:hover {
      color: black;
    }
  };
  &:hover {
    background: #61DAFB;
    transition: all .5s ease-in-out;
  };
  border-radius: 20px;
  margin: 0 1rem;
  font-weight: bold;
`
