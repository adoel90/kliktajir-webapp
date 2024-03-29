import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import App from './App';
import './index.css';


const theme = createTheme({

  palette: {
    primary: {      
      light:'#32653c',
      main: '#023a15',
      dark:'#001700',
      // --primary-main: #2a6348;
      // --primary-light: #589174;
      // --primary-dark: #003820;
      contrastText:'#ffffff'

    },
    secondary: {
      light:'#ff7a41',
      main: '#e84710',
      dark:'#ae0000',
      contrastText: '#000000',
      
    },
    error: {
      light: '#bf334c',
      main:'#B00020',
      dark:'#7b0016',
      contrastText: 'white'
    },
    warning: {
      light:'#ffee33',
      main: '#ffd233',
      dark: '#b2a300',
      contrastText: 'white'

    },
    success: {
      light: '#91ff35',
      main: '#76ff03',
      dark: '#52b202',
      contrastText: 'white'
    },
    common: {
      white : '#ffffff',
      black: 'black',
      transparent: 'transparent',
      grey: 'grey',
      yellow: '#FFD233',
      softGrey: '#f7f7f7'
    },
  },
  typography: {  
    h5: {
      fontFamily: ['AvenirLight' ].join("",)   
    },  
    subtitle1: {
      fontFamily: ['AvenirLight' ].join("",)   
    },  
    p: {
      fontFamily: ['AvenirLight' ].join("",)   
    },      
  }

});





  


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline />
        <BrowserRouter>      
          <App />
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
