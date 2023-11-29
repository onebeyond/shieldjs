import styled, { css } from 'styled-components'

export const LanguageButton = styled.button<{ selected: boolean }>`
    margin: 10px 5px;
    padding: 0.25em 0.5em;
    border: none;
    background: rgba(255, 255, 255, 0.3);
    font-size: 2em;
    cursor: pointer;

    &:focus, &:focus-visible, &:active {
        outline: 1px solid white;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.5);
        outline: 1px solid gray;
    }
  
    ${props => props.selected && css`
        outline: 1px solid white;
    `}
`
