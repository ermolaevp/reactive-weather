import { Theme, createStyles } from '@material-ui/core/styles'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr 200px',
      justifyContent: 'center',
    },
    content: {
      margin: theme.spacing.unit,
    },
  })

export default styles
