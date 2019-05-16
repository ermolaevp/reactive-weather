import { Theme, createStyles } from '@material-ui/core/styles'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginBottom: theme.spacing.unit * 2,
    },
  })

export default styles
