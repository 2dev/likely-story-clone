import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  justify-content: flex-end;
  align-content: flex-end;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`

export const ImageContent = styled.div`
  position: relative;
`

export const Image = styled.img`
  position: absolute;
  height: 56rem;
  top: -2.1rem;
  right: -12rem;
  pointer-events: none;
`
