import { Theme, createStyles } from '@material-ui/core/styles'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      minWidth: 160,
      flexGrow: 1,
      cursor: 'pointer',
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
    },
  })

export default styles
