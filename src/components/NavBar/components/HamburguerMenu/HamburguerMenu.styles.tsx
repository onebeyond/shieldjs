import styled, { css } from 'styled-components'

export const StyledHamburguerMenu = styled.ul<{ expanded: boolean }>`
  display: block;
  cursor: pointer;
  & li {
    list-style: none;
    width: 35px;
    height: 3px;
    background-color: white;
    margin: 6px 0;
    transition: 0.4s;
  }
  
  ${props => props.expanded && css`
    li.bar1 {
      transform: rotate(-45deg) translate(-6px, 6px);
    }
    li.bar2 {
      opacity: 0;
    }
    li.bar3 {
      transform: rotate(45deg) translate(-6px, -8px);
    }
  `}
`
