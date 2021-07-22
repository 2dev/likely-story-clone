import styled, { css } from 'styled-components'

export const Container = styled.nav`
  ${({ theme }) => css`
    position: fixed;
    width: 100%;
    z-index: ${theme.layers.menu};
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-height: 10rem;
    max-width: ${theme.grid.container};

    margin: 0 auto;
    padding: 8rem;
  `}
`
