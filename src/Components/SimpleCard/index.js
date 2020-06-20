import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    // maxWidth: 300,
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const { title, text, actionText, image } = props

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h1">
          {title}
        </Typography>
        <Typography variant="body2" component="p" className={classes.pos}>
          {text}
        </Typography>
        <img src={image} width='200px' />
      </CardContent>
      <CardActions>
        <Button size="small">{actionText}</Button>
      </CardActions>
    </Card>
  );
}