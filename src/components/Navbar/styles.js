import styled, { css } from 'styled-components'

export const Container = styled.nav`
  position: fixed;
  width: 100%;
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-height: 10rem;
    max-width: ${theme.grid.container};

    z-index: ${theme.layers.menu};

    margin: 0 auto;
    padding: 8rem;
  `}
`
