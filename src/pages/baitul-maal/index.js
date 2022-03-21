import React from 'react'
import { Box, Grid, Container, Card, CardContent, Typography, CardMedia, CardHeader, Skeleton } from '@mui/material'
import TextBigPicture from 'components/section/text-big-picture/index.js'
import { useQueryData } from 'hooks'
import { API_BAITUL_MAAL } from 'constanta'



const BaitulMaal = () => {
    

    const { data, isLoading } = useQueryData(`${API_BAITUL_MAAL}/list?limit=10000&page=1`)
    
    return (
                
        <>            
            <TextBigPicture>
                Baitul <span className='text-secondary-main'>Maal</span>
            </TextBigPicture>
            {
                isLoading ?
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6} lg={6} alignContent="center" sx={{mx: 'auto'}}>   
                            <Skeleton variant="text" />
                            <Skeleton sx={{ height: 190,  mt:3 }} animation="wave" variant="rectangular" /> 
                        </Grid>
                    </Grid> : 
                    
                    <Container sx={{pt: 3, pb: 11}}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12} lg={12} alignContent="center">

                                    {
                                        data?.map((item, i) => (
                                            <Box sx={{display:'flex', justifyContent: 'center', mb: 7}} key={i}>

                                                <Card sx={{ width: '50%'}} >
                                                    <CardHeader                                 
                                                        title={
                                                            <Typography variant='h3' className='text-oswald' >
                                                                {item?.title || "-"}
                                                            </Typography>
                                                        }
                                                        sx={{textAlign: 'center'}}
                                                    />
                                                    <CardMedia
                                                        component="img"
                                                        height="auto"
                                                        image={`${ process.env.REACT_APP_API_BASE_URL}/${item?.image}`}
                                                        alt= {item?.judul}
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="p" component="div" className="text-white-dark"  >
                                                            {item?.date}
                                                        </Typography>
                                                        <Typography variant="h5" className='text-black text-avenir-light' sx={{fontWeight: 'bold', pb: 5}} >
                                                            {item?.description}
                                                        </Typography>
                                                    </CardContent>
                                                    {/* <CardActions>
                                                        <Button size="small">Share</Button>
                                                        <Button size="small">Learn More</Button>
                                                    </CardActions> */}
                                                </Card>
                                            </Box>
                                        ))
                                    }
                            </Grid>
                        </Grid>
                    </Container> 

            }


            
            <br />
            <br />
        </>
    )
}

export default BaitulMaal;