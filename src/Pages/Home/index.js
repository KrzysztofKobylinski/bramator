import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Image from 'material-ui-image'

import Styles from './styles';
import { tiers, grid, carousel } from './data';

import logo from '../../assets/logo.jpg';

import Copyright from '../../Components/Copyright';

import Map from '../../Components/Map';

import HeaderBar from '../../Components/HeaderBar';

import Carousel from '../../Components/Carousel';
import GridGallery from '../../Components/GridGallery';

import Form from '../../Components/Form';


export default function Pricing() {
  const classes = Styles();
  return (
    <React.Fragment>
      <HeaderBar classes={classes} logo={logo} />
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          <img className={classes.logo} src={logo} />
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Zajmujemy się sprzedażą, montażem, a także serwisem gwarancyjnym i pogwarancyjnym automatycznych bram garażowych, przemysłowych oraz wjazdowych.
          </Typography>
<br/>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Specjalizujemy się w rozwiązaniach firm:
        </Typography>
      </Container>

      <Carousel data={carousel} classes={classes} />

      <Container maxWidth="md" component="footer" className={classes.footer}>
      </Container>


      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="center">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button 
                    {...tier.buttonProps}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
          <Map classes={classes} />
        </Box>
      </Container>

      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
}