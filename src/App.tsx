import React from 'react';
import Typography from '@mui/material/Typography';
import './App.css';
import { GameContainer } from './components/GameContainer';
import GlobalStyles from "@mui/material/GlobalStyles";
import ThemeProvider from '@mui/material/styles';

function App() {
  return (
    <div className='main'>
      <Typography 
        variant='h2'
        align='center'
        mb={5}
      >
        Calculation Game
      </Typography>
      <GameContainer />
    </div>
  );
}

export default App;
