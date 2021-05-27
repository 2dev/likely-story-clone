import styled, { css } from 'styled-components'

export const Subtitle = styled.h5`
  ${({ theme, color }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors[color]};
    line-height: 2.8rem;
  `}
`
