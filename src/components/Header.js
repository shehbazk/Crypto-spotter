import { AppBar, Container, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'
import './Header.css'

const Header = () => {
const history = useHistory();
const {currency , setCurrency}= CryptoState();
const darkTheme = createTheme({
  palette:{
    primary:{
      main:"#fff",
    },
    type : "dark",
  },
})


  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <Typography variant = 'h6' className='title' onClick = {()=>{
            history.push('/')
          } 
        }> Crypto Spotter</Typography>
          <Select variant='outlined' style={{
            width : 100,
            height : 40,
            marginRight : 15
          }}
            value={currency}
          onChange={(e)=>setCurrency(e.target.value) }
>
            <MenuItem value = {'USD'}>USD</MenuItem>
            <MenuItem value = {'INR'}>INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};

export default Header