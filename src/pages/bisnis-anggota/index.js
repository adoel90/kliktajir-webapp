import React from 'react'
import { Box, Grid, Container, Card, CardContent, Typography, CardMedia, CardHeader, Paper} from '@mui/material'
import TextBigPicture from 'components/section/text-big-picture/index.js'
import { useQueryData } from 'hooks'
import { API_BISNIS_ANGGOTA } from 'constanta'


const BisnisAnggota = () => {

    const { data } = useQueryData(`${API_BISNIS_ANGGOTA}/list?limit=10000&page=1`)    
    
    return (
        
        <>            
            <TextBigPicture>
                Bisnis <span className='text-secondary-main'>Anggota</span>
            </TextBigPicture>
            <Container sx={{pt: 3, pb: 11}}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} alignContent="center">
                        {
                            data?.map((item, index) => (

                                <Paper elevation={2} key={index} sx={{p:3, m:3}}>   
                                    <Typography variant='h4' className='text-oswald' sx={{mb:3}} >
                                        {item?.member_name} - {item?.phone}
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
                                        fdsadsfdasfasdf
                                    </Typography>

                                </Paper>
                            ))
                        }
                          
                    </Grid>
                </Grid>
            </Container> 


            
            <br />
            <br />
        </>
    )
}

export default BisnisAnggota;