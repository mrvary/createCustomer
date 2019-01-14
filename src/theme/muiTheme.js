import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#cc6f9b',
      main: '#ab0f59',
      dark: '#880C47',
      contrastText: '#fff',
    }
  }
})

export default theme