import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/GlobalStyle"
import { ThemeProvider } from "styled-components"
import { DefaultTheme } from "./Themes/default"


function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
  </ThemeProvider>
  )
}

export default App
