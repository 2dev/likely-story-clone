import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr;
  justify-content: flex-start;
  align-content: flex-end;
  position: relative;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`

export const ImageContent = styled.div`
  position: absolute;
  display: block;
  right: -23rem;
  bottom: -8.7rem;
`

export const Image = styled.img`
  width: 30rem;
  max-width: 30rem;
`
