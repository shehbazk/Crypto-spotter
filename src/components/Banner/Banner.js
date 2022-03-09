import { Container, Typography } from '@material-ui/core'
import React from 'react'
import './Banner.css'
import Carousel from './Carousel'

const Banner = () => {
  return (
    <div className='banner'>
        <Container className='bannerContent'>
            <div className="tagLine">
                <Typography variant='h2' style={{
                    fontWeight : 'bold',
                    marginBottom : 15,
                    fontFamily : 'Montserrat'
                }}>
                    Crypto Spotter
                </Typography>
                <Typography
                variant='subtitle2'
                style={{
                    color : 'darkgray',
                    textTransform : 'capitalize',
                    fontFamily : 'Montserrat'
                }}>
                    Get all the Latest info regarding your favourite crypto currencies
                </Typography>
            </div>
            <Carousel />
        </Container>
    </div>
  )
}

export default Banner