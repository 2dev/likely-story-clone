import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    src: local(''),
        url('/fonts/montserrat-v15-latin-300.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('/fonts/montserrat-v15-latin-regular.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    src: local(''),
        url('/fonts/montserrat-v15-latin-600.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('/fonts/montserrat-v15-latin-700.woff2') format('woff2')
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherited;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    html,
    body {
      height: 100vh;
    }

    body {
      font-family: ${theme.font.family};
    }
  `}
`

export default GlobalStyles
