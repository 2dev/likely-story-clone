import * as S from './styles'

import Container from '../Container'
import Subtitle from '../Subtitle'
import Title from '../Title'

const SectionSmallStudio = () => {
  return (
    <Container as="section" fullHeight backgroundColor="orangeNormal">
      <S.Wrapper>
        <S.Content>
          <Title size="xxlarge" color="secondary">
            Small studio, Big ideas.
          </Title>
          <Subtitle color="secondary">
            We have a lot of very talented friends across all areas of creative
            and technical. This means on each and every project, we have the
            luxury of assembling the very best team for its individual needs and
            nuances. It also means we are nimble and responsive in a constantly
            changing industry.
          </Subtitle>
        </S.Content>
        <S.ImageContent>
          <S.Image src="/images/splash.png" />
        </S.ImageContent>
      </S.Wrapper>
    </Container>
  )
}

export default SectionSmallStudio
