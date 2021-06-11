import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 11rem;
  height: 9.2rem;
`

const logoSvgModifiers = {
  applyAnimation: (color, theme) => css`
    fill: transparent;
    transition: 0.7s ease;
    animation: logo-animation 5s ease forwards;

    @keyframes logo-animation {
      0% {
        stroke-width: 0;
        stroke-dasharray: 1 100;
        fill: transparent;
      }
      25% {
        stroke-width: 0.3;
        stroke-dasharray: 100 0;
        fill: transparent;
      }
      60%,
      100% {
        stroke-width: 0;
        fill: ${theme.colors[color]};
      }
    }
  `,
}

export const LogoSvg = styled.svg`
  ${({ applyAnimation, color, theme }) => css`
    ${applyAnimation && logoSvgModifiers.applyAnimation(color, theme)};
  `}
`
