import styled, { css } from 'styled-components'

export const Title = styled.h1`
  ${({ theme, size, color }) => css`
    font-weight: ${theme.font.extraBold};
    font-size: ${theme.font.sizes[size]};
    color: ${theme.colors[color]};
  `}
`
