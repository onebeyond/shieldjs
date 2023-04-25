import { styled } from '@/stitches.config'

export const CardWrapper = styled('div', {
  overflow: 'hidden',
  padding: '20px 10px',
  margin: '48px auto 0',
  width: '300px',
  backgroundColor: '#fff',
  boxShadow: '0 0 20px rgba(0, 0, 0, .05)',
  borderRadius: '5px'
})

export const CardHeader = styled('header', {
  display: 'flex',
  justifyContent: 'center'
})

export const CardImg = styled('img', {
  width: '90%',
  borderRadius: '5px'
})

export const CardBody = styled('div', {
  padding: '0 20px'
})

export const CardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#000'
})

export const CardButton = styled('button', {
  display: 'block',
  width: '100%',
  padding: '12px 0',
  fontFamily: 'inherit',
  fontSize: '14px',
  fontWeight: '700',
  color: '#fff',
  backgroundColor: '#e5195f',
  border: '0',
  borderRadius: '35px',
  boxShadow: '0 10px 10px rgba(0, 0, 0, .08)',
  cursor: 'pointer',
  transition: 'all .25s cubic-bezier(.02, .01, .47, 1)',
  '&:hover': {
    boxShadow: '0 15px 15px rgba(0, 0, 0, .16)',
    transform: 'translate(0, -5px)'
  }
})
