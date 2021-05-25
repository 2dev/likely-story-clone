import styled, { css } from 'styled-components'

const titleModifiers = {
  huge: theme => css`
    font-size: ${theme.font.sizes.huge};
  `,

  xxlarge: theme => css`
    font-size: ${theme.font.sizes.xxlarge};
  `,
}

export const Title = styled.h1`
  ${({ theme, size }) => css`
    font-weight: ${theme.font.extraBold};
    color: ${theme.colors.primary};

    ${!!size && titleModifiers[size](theme)}
  `}
`
