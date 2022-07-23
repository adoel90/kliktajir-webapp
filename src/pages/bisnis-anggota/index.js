import React from 'react'
import { Box, Grid, Container, Card, Skeleton, Typography, CardMedia, IconButton, Paper} from '@mui/material'
import TextBigPicture from 'components/section/text-big-picture/index.js'
import DaftarJadiAnggota from 'components/section/daftar-jadi-anggota/index.js'
import { useQueryData } from 'hooks'
import { API_BISNIS_ANGGOTA } from 'constanta'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const BisnisAnggota = () => {

    const { data, isLoading } = useQueryData(`${API_BISNIS_ANGGOTA}/list?limit=10000&page=1`)    
    
    return (
        
        <>            
            <TextBigPicture>
                Bisnis <span className='text-secondary-main'>Anggota</span>
            </TextBigPicture>
            {
                isLoading ?
                    <Grid container>
                        <Grid item xs={12} sm={12} md={8} lg={8} alignContent="center" sx={{mx: 'auto'}}>   
                            <Skeleton variant="text" />
                            <Skeleton sx={{ height: 190,  mt:3 }} animation="wave" variant="rectangular" /> 
                        </Grid>
                    </Grid> :
                    <Container sx={{pt: 3, pb: 11}}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12} lg={12} alignContent="center">
                                {
                                    data?.data?.map((item, index) => (

                                        <Paper elevation={2} key={index} sx={{p:3, m:3}}>   
                                            <Typography variant='h4' className='text-oswald' sx={{mb:3}} >
                                                {item?.member_name} - &nbsp;
                                                
                                                <a className='text-primary-main' href={`https://wa.me/62${item.phone}?text=Assalamu%C3%A1laikum%20%3A)%0A%0ASaya%20mau%20pesan....`} target="_blank">                                                
                                                    {item?.phone}
                                                    <IconButton
                                                        size="large"                                           
                                                        color="inherit"
                                                    >
                                                        <WhatsAppIcon />
                                                    </IconButton>
                                                </a>
                                            </Typography>
                                            <Box sx={{display:'flex', flexDirection: 'row', justifyContent:'space-evenly', flexWrap: 'wrap'}}>
                                                
                                                {item?.image?.map( (img, indexImage) => (

                                                    <Card sx={{ width: '20%', p: 1,  m: 1}} key={indexImage}>
                                                        <CardMedia
                                                            component="img"
                                                            height="auto"
                                                            image={`${ process.env.REACT_APP_API_BASE_URL}/${img?.image}`}                                                
                                                        />                           
                                                    </Card>                                           
                                                ))}
                                            
                                                
                                            </Box>

                                            <Typography variant='h5' className='text-avenir-light text-center' sx={{mt:3}} >
                                                {item?.description}
                                            </Typography>

                                        </Paper>

                                    ))
                                }
                                
                                
                            </Grid>
                        </Grid>


                        <h1 className='text-oswald text-primary-main tracking-tight text-center'>
                            Anggota yang ingin mendaftarkan produk  &nbsp;          
                            <a className='text-primary-main' href="https://forms.gle/1w4G7yXsWKZjDjSg7"  target="_blank">
                                klik di sini 
                            </a>                            
                            
                        </h1>
                        <DaftarJadiAnggota />
                    </Container> 
            }
            
            <br />
            <br />
        </>
    )
}

export default BisnisAnggota;