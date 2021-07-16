import * as S from './styles'

const Container = ({
  as,
  backgroundColor = 'secondary',
  children,
  fullHeight = false,
}) => {
  return (
    <S.Container
      as={as}
      backgroundColor={backgroundColor}
      fullHeight={fullHeight}
    >
      <S.Wrapper modifier={as}>{children}</S.Wrapper>
    </S.Container>
  )
}

export default Container
