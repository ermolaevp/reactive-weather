import { Theme, createStyles } from '@material-ui/core/styles'
export default (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    toolbar: theme.mixins.toolbar,
  })
