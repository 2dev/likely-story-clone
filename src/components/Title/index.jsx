import * as S from './styles'

const Title = ({ children, size = 'huge', color = 'primary' }) => {
  return (
    <S.Title size={size} color={color}>
      {children}
    </S.Title>
  )
}

export default Title
