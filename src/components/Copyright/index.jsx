import styled, { css } from 'styled-components'

const Copyright = styled.span`
  ${({ color = 'white', theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors[color]};
  `}
`

export default Copyright
