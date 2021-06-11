import styled, { css } from 'styled-components'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: ${theme.spacings.large};
    max-height: 10rem;
    width: 100%;

    position: fixed;
    z-index: ${theme.layers.menu};
  `}
`
