import * as S from './styles'

import Logo from '../Logo'
import Container from '../Container'
import SocialMedia from '../SocialMedia'
import Instagram from '../Icons/Instagram'
import Twitter from '../Icons/Twitter'
import Medium from '../Icons/Medium'
import Copyright from '../Copyright'

const Footer = () => {
  return (
    <Container as="footer" backgroundColor="dark">
      <S.Wrapper>
        <Logo color="white" />

        <S.FooterItem>
          <S.SocialMediaWrapper>
            <SocialMedia icon={<Medium />} />
            <SocialMedia icon={<Twitter />} />
            <SocialMedia icon={<Instagram />} />
          </S.SocialMediaWrapper>

          <Copyright>
            © Likely Story Agency Ltd 2021. All rights reserved.
          </Copyright>
        </S.FooterItem>
      </S.Wrapper>
    </Container>
  )
}

export default Footer
