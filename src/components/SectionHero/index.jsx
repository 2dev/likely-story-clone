import * as S from './styles'

import Container from '../Container'
import Subtitle from '../Subtitle'
import Title from '../Title'

const SectionHero = () => {
  return (
    <Container fullHeight>
      <S.Wrapper>
        <S.Content>
          <Title>Oh hello</Title>
          <Subtitle>
            We’re Likely Story, an award-winning strategic creative agency,
            delivering high-quality projects for international clients. Ask us
            about digital, branding and storytelling.
          </Subtitle>
        </S.Content>
        <S.ImageContent>
          <S.Image src="/images/hero.png" />
        </S.ImageContent>
      </S.Wrapper>
    </Container>
  )
}

export default SectionHero
