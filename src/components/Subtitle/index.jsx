import * as S from './styles'

const Subtitle = ({ children, color = 'primary' }) => {
  return <S.Subtitle color={color}>{children}</S.Subtitle>
}

export default Subtitle
