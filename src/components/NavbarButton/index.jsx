import { useRef } from 'react'

import * as S from './styles'

const NavbarButton = ({
  backgroundColorHover = 'primary',
  textColor = 'primary',
  textColorHover = 'secondary',
}) => {
  const refBubble = useRef()

  const onMouseEnterAnimation =
    'bubble-effect 400ms forwards cubic-bezier(.3,.5,.65,.76)'
  const onMouseLeaveAnimation = 'explode .600s forwards ease-out'

  return (
    <S.Wrapper>
      <S.Text
        textColor={textColor}
        textColorHover={textColorHover}
        onMouseEnter={() => {
          refBubble.current.style.animation = onMouseEnterAnimation
        }}
        onMouseLeave={() => {
          refBubble.current.style.animation = onMouseLeaveAnimation
        }}
      >
        Menu
        <S.Bubble ref={refBubble} backgroundColorHover={backgroundColorHover} />
      </S.Text>
    </S.Wrapper>
  )
}

export default NavbarButton
