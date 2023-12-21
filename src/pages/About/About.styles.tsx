import styled from 'styled-components'

export const AboutWrapper = styled.div`
  min-height: 100vh;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`
export const StyledImageList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 1rem;
  img {
    width: auto;
    height: 200px;
    transition: transform 1s ease-out;
  &:hover {
    transform: scale(1.2);
  }
  }
`
