import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  logo: {
    mixBlendMode: 'multiply',
    width: 300,
  },
  logoSmall: {
    mixBlendMode: 'multiply',
    width: 100,
  },
  carouselItem: {
    display: 'flex',
    justifyContent: 'center',
    // border: 'solid 1px red'
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  break: {
    margin: 40
  },
  cardButton: {
    margin: 10
  },
  formUserContact: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  formUserSpacer: {
    minWidth: 60,
    display: 'flex',
    justifyContent: 'center',
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));