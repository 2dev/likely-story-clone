import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global'
import Navbar from './components/Navbar'
import SectionHero from './components/SectionHero'
import theme from './styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <SectionHero />
    </ThemeProvider>
  )
}

export default App
