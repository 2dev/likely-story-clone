import styled, { css } from 'styled-components'

export const Link = styled.a`
  ${({ color, theme }) => css`
    cursor: pointer;

    svg {
      max-height: 20px;
      max-width: 20px;
      width: 20px;
      height: 20px;
      fill: ${theme.colors[color]};
    }
  `}
`
