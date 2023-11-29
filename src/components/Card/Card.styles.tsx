import styled from 'styled-components'
import { StyledButton } from '../Button/Button.styles'

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 20px 10px;
  margin: 48px auto 0;
  width: 300px;
  background-color: ${props => props.theme.colors.white};;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05);
  border-radius: 5px;
`

export const CardHeader = styled.header`
  display: flex;
  justify-content: center;
`

export const CardImg = styled.img`
  width: 90%;
  border-radius: 5px;
`

export const CardBody = styled.div`
  padding: 0 20px;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
`

export const CardButton = styled(StyledButton)`
  width: 100%;
  padding: 12px 0;
  color: ${props => props.theme.colors.white};
  background-color: #e5195f;
  border-radius: 35px;
  border: none;
  transition: all .25s cubic-bezier(.02, .01, .47, 1);
  &:hover {
    transform: translate(0, -5px);
    background-color: #e14179;
  }
`
