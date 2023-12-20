import styled from 'styled-components'

const getSize = (size?: 'small' | 'large') => ({
  small: '7px 25px 8px',
  large: '9px 30px 11px',
  default: '14px 30px 16px'
})[size || 'default']

export const StyledButton = styled.a<{ size?: 'small' | 'large' }>`
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  display: inline-block;
  color: #1b116e;
  min-width: 250px;
  background-color: #6bedb5;
  border: 2px solid #55bd90;
  opacity: 1;
  padding: ${props => getSize(props.size)};
  &:hover {
    background-color: #55bd90;
    color: #1b116e;
  };
  &:active {
    border: solid 2px #1b116e;
  };
`
