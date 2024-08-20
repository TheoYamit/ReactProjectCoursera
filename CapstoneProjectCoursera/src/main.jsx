import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from "@mui/material/styles";
import { ChakraProvider } from '@chakra-ui/react'
import theme from './fonts/fonts.jsx';
import muiTheme from './fonts/fonts2.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
