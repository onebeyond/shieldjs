import {
  StyledFooter,
  StyledMenu,
  StyledMenuItem,
  StyledSubtitle,
  StyledTitle, StyledColumnLeft, StyledColumnRight
} from '@/components/Footer/Footer.styles'
import slackLogo from '@/assets/slack.svg'
import githubLogo from '@/assets/github.svg'
import oneBeyondLogo from '@/assets/one-beyond.svg'

const Footer = () => {
  return (
          <StyledFooter>
            <StyledColumnLeft>
              <StyledTitle> Shield.Js</StyledTitle>
              <StyledSubtitle>Since {new Date().getFullYear()} - One Beyond</StyledSubtitle>
              <img src={oneBeyondLogo} alt='one-beyond' height={'73px'}/>
            </StyledColumnLeft>
            <StyledColumnRight>
              <StyledMenu style={{ flexDirection: 'column', gap: '10px' }}>
                <StyledMenuItem>
                  <StyledTitle>Contact us</StyledTitle>
                </StyledMenuItem>
                <StyledMenu>
                  <StyledMenuItem>
                    <img src={slackLogo} alt='slack' height={'43px'}/>
                  </StyledMenuItem>
                  <StyledMenuItem>
                    <a href="https://github.com/onebeyond/shieldjs" target="_blank" rel="noreferrer">
                      <img src={githubLogo} alt='github' height={'43px'}/>
                    </a>
                  </StyledMenuItem>
                </StyledMenu>
              </StyledMenu>
            </StyledColumnRight>

          </StyledFooter>
  )
}

export default Footer
