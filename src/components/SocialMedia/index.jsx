import * as S from './styles'

const SocialMedia = ({ color = 'white', href = '', icon }) => {
  return (
    <S.Link color={color} href={href} target="_blank">
      {icon}
    </S.Link>
  )
}

export default SocialMedia
