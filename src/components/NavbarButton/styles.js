import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

export const Text = styled.span`
  ${({ theme, textColor, textColorHover }) => css`
    color: ${theme.colors[textColor]};
    cursor: pointer;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    z-index: ${theme.layers.base};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    transition: color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
      color: ${theme.colors[textColorHover]};
    }
  `}
`

export const Bubble = styled.div`
  ${({ theme, backgroundColorHover }) => css`
    position: absolute;
    width: 85px;
    height: 85px;
    background: ${theme.colors[backgroundColorHover]};
    border-radius: 50%;
    overflow: hidden;
    pointer-events: none;
    opacity: 0;
    z-index: -1;

    transform: scale(0.3);
    transition: all 100s ease-in;

    @keyframes bubble-effect {
      0% {
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }

    @keyframes explode {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.3;
        transform: scale(1.1);
      }
      100% {
        transform: scale(1.3);
        opacity: 0;
      }
    }
  `}
`
