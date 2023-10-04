import { styled } from 'styled-components'

export const ReadMoreSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.gray900};
  px: 2rem;
  py: 3rem;
    ${(props) => props.theme.mediaQueries.md} {
    padding: 4.5rem 6rem;
  }
})
`

export const ReadMoreTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.xl};
  fontWeight: 'bold'
`
export const ReadMoreSubtitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.lg};
`

export const ReadMoreCardWrapper = styled.div`
  display: 'flex';
  flex-direction: 'column';
  justify-content: 'center';
  align-items: 'center';
  margin-top: ${props => props.theme.space['6']};
  width: '100%';
  gap: '40px';
  ${props => props.theme.mediaQueries.md} {
    flex-direction: 'row';
    flex-wrap: 'wrap'
  }
`

export const ReadMoreCard = styled.div`
  display: 'flex';
  flex-direction: 'column';
  align-items: 'center';
  width: '250px';
  padding: ${props => `${props.theme.space['3']} ${props.theme.space['5']}`};
  margin: ${props => `0 ${props.theme.space['3']}`};
  border: '3px solid #61DAFBCC';
  border-radius: '20px';
  boxShadow:
    '-10px 0px 15px 0px #61DAFB, 10px 0px 15px 0px #61DAFB, 0px 10px 15px 0px #61DAFB, 0px -10px 15px 0px #61DAFB';
`

export const ReadMoreCardTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.lg};
`

export const ReadMoreCardContent = styled.p`
  font-size: ${props => props.theme.fontSizes.md};
`
