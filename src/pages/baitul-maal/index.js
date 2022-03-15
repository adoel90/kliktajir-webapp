import React, { useEffect, useState} from 'react'
import { Box, Grid, Container, Paper, Card, CardContent, Typography, CardMedia, CardHeader} from '@mui/material'
import TextBigPicture from 'components/section/text-big-picture/index.js'
import { useQueryData } from 'hooks'



const BaitulMaal = () => {
    

    const { data } = useQueryData('v1/baitul-maal/list?limit=10&page=1')
    

    return (
                
        <>            
            <TextBigPicture>
                Baitul <span className='text-secondary-main'>Maal</span>
            </TextBigPicture>
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
                                                image={`http://averoa.com:8800/${item?.image}`}
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


            
            <br />
            <br />
        </>
    )
}

export default BaitulMaal;