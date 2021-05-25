import * as S from './styles'

const Title = ({ size = 'huge', children }) => {
  return <S.Title size={size}>{children}</S.Title>
}

export default Title
