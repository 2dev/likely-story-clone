import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const PreHeader = styled.div`
  ${({ color, theme }) => css`
    &:before {
      content: '';
      padding-right: 40px;
      border-top: 1px solid ${theme.colors[color]};
      position: absolute;
    }

    position: relative;
    display: flex;
    align-items: center;
  `}
`

export const PreHeaderText = styled.p`
  ${({ color, theme }) => css`
    margin-left: 50px;
    color: ${theme.colors[color]};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
  `}
`

export const Action = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`

export const ActionText = styled.p`
  ${({ color, theme }) => css`
    color: ${theme.colors[color]};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
  `}
`

export const Arrow = styled.span`
  ${({ color, theme }) => css`
    &:after {
      content: '';
      position: relative;
      display: inline-block;
      border: solid ${theme.colors[color]};
      border-width: 0 1px 1px 0;
      padding: 2px;
      transform: rotate(-45deg);
      left: -4.8px;
    }

    &:before {
      content: '';
      width: 20px;
      height: 1px;
      background: ${theme.colors[color]};
      display: inline-block;
    }

    display: flex;
    align-items: center;
  `}
`
