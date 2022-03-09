
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';
import { makeStyles } from '@material-ui/styles';

function App() {

  return (
    <BrowserRouter>
       <>
       <div className='app'>  
         <Header />
         <Route path = '/'  component = {HomePage}exact/>
         <Route path = '/coins/:id'  component = {CoinPage}exact/>
       </div>
       </>
       </BrowserRouter>
    
  );
}

export default App;
