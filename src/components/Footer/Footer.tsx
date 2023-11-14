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
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation('footer')

  return (
    <FooterWrapper>
      <LeftColumn>
        <Title> {t('title')}</Title>
        <Subtitle>{t('subtitle')}</Subtitle>
        <OneBeyondIcon src={oneBeyondLogo} alt='one-beyond'/>
      </LeftColumn>
      <RightColumn>
        <Title>{t('contact')}</Title>
        <MenuList>
          <MenuListItem>
            <a href="#" target="_blank" rel="noreferrer">
              <LinkIcon src={slackLogo} alt='slack'/>
            </a>
          </MenuListItem>
          <MenuListItem>
            <a href="https://github.com/onebeyond/shieldjs" data-testid='slackLink' target="_blank" rel="noreferrer">
              <LinkIcon src={githubLogo} alt='github'/>
            </a>
          </MenuListItem>
        </MenuList>
      </RightColumn>
    </FooterWrapper>
  )
}

export default Footer
