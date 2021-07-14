import styled, { css } from 'styled-components'

const wrapperModifiers = {
  footer: () => css`
    padding: 4rem 8rem;
  `,
}

export const Container = styled.div`
  ${({ backgroundColor, theme }) => css`
    background-color: ${theme.colors[backgroundColor]};
  `}
`

export const Wrapper = styled.div`
  ${({ modifier, theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: 8rem;

    ${wrapperModifiers[modifier] && wrapperModifiers[modifier]()};
  `}
`
