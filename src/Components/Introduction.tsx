import { Box, Button, CardMedia, Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import ProductHeroLayout from './ProductHeroLayout';
import myImage from '../Images/utsav.png';

const backgroundImage = `https://images.unsplash.com/photo-1513941025786-ed97f054ebba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`

function subText(text: string, isLeft = false) {
  return (
    <Grid item={true} xs={3}>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, pl: 4, pr: 4 }}
      >
        {text}
      </Typography>
    </Grid>
  );
}
function divider() {
  return (
    <Divider
      orientation="vertical"
      textAlign='center'
      variant="middle"
      sx={{ bgcolor: "yellow", mr: -1, height: '20px' }}
      flexItem
    />
  );
}

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`, // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      <Grid container spacing={2} >
        <Grid justifyContent="center" item xs={6} md={6} >
          <Container fixed sx={{ textAlign: "center", mt: 20 }} >

            <Typography color="inherit" align="center" variant="h2" >
              Utsav Kuinkel
            </Typography>
            <Grid justifyContent="center" container={true} item xs={12} sx={{ mt: 3 }}>
              {subText("Dotnet", true)}
              {divider()}
              {subText("React")}
              {divider()}
              {subText("Flutter")}
              {divider()}
              {subText("MsSQL")}
            </Grid>

            <Typography variant="body2" align='center' color="inherit" sx={{ mt: 2 }}>
              There is no limit to ones learning capabilities
            </Typography>
          </Container>
        </Grid>

        <Grid justifyContent="center" item xs={6} md={6}>
          
          <Container fixed>
          <CardMedia
            sx={{mb:-6}}
            component="img"
            image={myImage}
            alt="My Picture"
          />
          </Container>
        </Grid>

      </Grid>
    </ProductHeroLayout>
  );
}