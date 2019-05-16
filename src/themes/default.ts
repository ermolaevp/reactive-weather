import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(0, 62, 126)',
    },
    secondary: {
      main: 'rgb(10, 72, 145)',
    },
  },
  typography: {
    useNextVariants: true,
  },
})

export default theme
