import React from "react";
import { AppBar, Avatar, Button, createTheme, IconButton, Stack, ThemeProvider, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import person from '../Images/logo.jpg'

function appBarLabel(label: string) {
  return (
    <Toolbar>
      <IconButton 
        edge="start" 
        color="inherit" 
        aria-label="menu" 
        sx={{ mr: 2 }}
        >
        <Avatar src={person} sx={{width:56, height:56}} />
      </IconButton>
      <Typography variant="h6" align="right" noWrap component="div" sx={{ flexGrow: 1, mr:5}}>
        {label}
      </Typography>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});


function Navbar(){
    return (<Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          {appBarLabel('Utsav Kuinkel')}
        </AppBar>
      </ThemeProvider>
    </Stack>);
}

export default Navbar;


