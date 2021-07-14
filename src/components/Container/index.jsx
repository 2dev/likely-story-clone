import * as S from './styles'

const Container = ({ as, backgroundColor = 'secondary', children }) => {
  return (
    <S.Container as={as} backgroundColor={backgroundColor}>
      <S.Wrapper modifier={as}>{children}</S.Wrapper>
    </S.Container>
  )
}

export default Container
