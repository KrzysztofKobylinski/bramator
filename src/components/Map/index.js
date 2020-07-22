import React, { Component } from 'react'
import './index.css'
import SimpleCard from '../SimpleCard'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const lines = [
  'ul. Ignacego Krasickiego 20',
  '05-500 Nowa Iwiczna',
]

const hours = [
  'Godziny otwarcia:',
  'Pon-Pt: 8:00 - 16:00',
  'Sob: 8:00 - 16:00',
]

const link = 'www.google.com/maps/search/?api=1&query=Bramator'
export default class Map extends Component {

  navitage() {
    window.open(`https://${link}`);
  }
  render() {
    return (
      <Container maxWidth="md" component="footer" id="kontakt">

        <Grid container spacing={3}>
          <Grid item sm={4} xs={12}>
            <Card
              // elevation={0}
            >
              <CardHeader
                title='Kontakt'
                // subheader={tier.subheader}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                className={this.props.classes.cardHeader}
              />
              <CardContent>
                <ul>
                  {lines.map((line) => (
                    <Typography component="li" variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                </ul>
                <div className={this.props.classes.cardButton}>
                  <Button
                    fullWidth
                    onClick={() => this.navitage()}
                    // href='mailto:kontakt@bramator.pl'
                    variant='outlined'
                    color="primary"
                  >
                    Otwórz nawigację
                </Button>
                <div className={this.props.classes.break} />

                <ul>
                  {hours.map((line) => (
                    <Typography component="li" variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                </ul>

                </div>

                <div className={this.props.classes.cardButton}>

                  <Button
                    fullWidth
                    href="tel:227508678"
                    variant='contained'
                    color="primary"
                  >
                    Zadzwoń: (22)750-86-78
                </Button>

                </div>


                <div className={this.props.classes.cardButton}>
                  <Button
                    fullWidth
                    href='mailto:bramator@bramator.pl'
                    variant='outlined'
                    color="primary"
                  >
                    bramator@bramator.pl
                </Button>


                </div>
              </CardContent>

            </Card>






            {/* <SimpleCard {...cards[0]} /> */}

          </Grid>

          <Grid item sm={8} xs={12}>

            <iframe
              className="map"
              title="map"
              src='https://www.google.com/maps/embed/v1/place?key=AIzaSyAuEZKL9razNRFp8eOZIZ_3IfNeGjEc1H8&q=Bramator'
            />


          </Grid>



        </Grid>


      </Container>
    )
  }
}
