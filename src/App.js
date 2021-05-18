import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global'
import theme from './styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Hello</h1>
    </ThemeProvider>
  )
}

export default App
