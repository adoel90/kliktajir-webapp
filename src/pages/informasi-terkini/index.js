import React from 'react'
import { Box, Grid, Container, Card, CardContent, Typography, CardMedia, CardHeader, Paper, Skeleton } from '@mui/material'
import TextBigPicture from 'components/section/text-big-picture/index.js'
import { useQueryData } from 'hooks'
import { API_INFORMASI_TERKINI } from 'constanta'

const InformasiTerkini = () => {

    const { data, isLoading } = useQueryData(`${API_INFORMASI_TERKINI}/list?limit=10000&page=1`)    

    return (
        <>
            <TextBigPicture>
                Informasi <span className='text-secondary-main'>Terkini</span>
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
                                        data?.data?.map((item, i) => (
                                            <Box sx={{display:'flex', justifyContent: 'center', mb: 7}} key={i}>

                                                <Card sx={{ 
                                                    
                                                    width:  {
                                                        sm: "100%",
                                                        md:'50%'
                                                    }                                                                                                        
                                                    
                                                }} >
                                                    <CardHeader                                 
                                                        title={
                                                            <Typography variant='h3' className='text-oswald' >
                                                                {item?.title || "-"}
                                                            </Typography>
                                                        }
                                                        subheader={
                                                            <Typography variant='subtitle-1' className='text-avenir-light' >
                                                                {item?.date || "-"}
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

export default InformasiTerkini;