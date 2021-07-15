import * as S from './styles'

import Logo from '../Logo'
import NavbarButton from '../NavbarButton'

const Navbar = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Logo />
        <NavbarButton />
      </S.Wrapper>
    </S.Container>
  )
}

export default Navbar
