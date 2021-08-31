import * as S from './styles'

import Subtitle from '../Subtitle'
import Title from '../Title'

const ProjectLink = ({ preHeader, title, subtitle, color = 'white' }) => {
  return (
    <S.Wrapper>
      <S.PreHeader color={color} content={preHeader}>
        <S.PreHeaderText color={color}>{preHeader}</S.PreHeaderText>
      </S.PreHeader>
      <Title size="xxlarge" color={color}>
        {title}
      </Title>
      <Subtitle color={color}>{subtitle}</Subtitle>
      <S.Action>
        <S.ActionText color={color}>See this project</S.ActionText>
        <S.Arrow color={color} />
      </S.Action>
    </S.Wrapper>
  )
}

export default ProjectLink
