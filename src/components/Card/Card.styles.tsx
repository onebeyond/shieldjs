import { styled } from 'styled-components'

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 20px 10px;
  margin: 48px auto 0;
  width: 300px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05);
  border-radius: 5px
`

export const CardHeader = styled.header`
  display: flex;
  justify-content: center
`

export const CardImg = styled.img`
  width: 90%;
  border-radius: 5px
`

export const CardBody = styled.div`
  padding: 0 20px
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000
`

export const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .08);
  cursor: pointer;
  transition: all .25s cubic-bezier(.02, .01, .47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
    transform: translate(0, -5px)
  }
`
