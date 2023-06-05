import {
  FooterWrapper,
  MenuList,
  MenuListItem,
  Subtitle,
  Title, LeftColumn, RightColumn, OneBeyondIcon, LinkIcon
} from '@/components/Footer/Footer.styles'
import slackLogo from '@/assets/slack.svg'
import githubLogo from '@/assets/github.svg'
import oneBeyondLogo from '@/assets/one-beyond.svg'
import { t } from 'i18next'

const Footer = () => {
  return (
    <FooterWrapper>
      <LeftColumn>
        <Title> {t('Footer.FooterTitle')}</Title>
        <Subtitle>{t('Footer.OneBeyondSubtitle')}</Subtitle>
        <OneBeyondIcon src={oneBeyondLogo} alt='one-beyond'/>
      </LeftColumn>
      <RightColumn>
        <Title>{t('Footer.ContactUsTitle')}</Title>
        <MenuList>
          <MenuListItem>
            <a href="#" target="_blank" rel="noreferrer">
              <LinkIcon src={slackLogo} alt='slack'/>
            </a>
          </MenuListItem>
          <MenuListItem>
            <a href="https://github.com/onebeyond/shieldjs" target="_blank" rel="noreferrer">
              <LinkIcon src={githubLogo} alt='github'/>
            </a>
          </MenuListItem>
        </MenuList>
      </RightColumn>
    </FooterWrapper>
  )
}

export default Footer
