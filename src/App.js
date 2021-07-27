import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global'
import Navbar from './components/Navbar'
import SectionHero from './components/SectionHero'
import SectionSmallStudio from './components/SectionSmallStudio'
import theme from './styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <SectionHero />
      <SectionSmallStudio />
    </ThemeProvider>
  )
}

export default App
