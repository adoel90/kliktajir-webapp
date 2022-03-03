import { Container, Grid, Typography, Box } from '@mui/material'
import ImageLogoTajir from 'assets/images/logo-tajir-medium.svg'
import ImagePlaystore from 'assets/images/footer/image-playstore.svg'
import ImageWhiteFb from 'assets/images/footer/image-white-fb.png'


const Footer = () => {

    return (
        <footer className='bg-primary-main'>
            <Container sx={{pt: 7, pb: 5}}>                
                <Grid container sx={{pb: 7}}>
                    <Grid item xs={12} sm={12} md={3} lg={3} >
                        <img src={ImageLogoTajir} height="47" width="114" className='' />
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} lg={2} >
                        <Typography variant="p" component="p" mt={1} sx={{color: "common.white"}} className="text-avenir-light text-bold"> 
                            Tajir
                        </Typography>
                        <ul style={{paddingLeft: 0, listStyleType: 'none', color: 'white'}} className="text-avenir-light">
                            <li>Visi Misi</li>
                            <li>Sejarah</li>
                            <li>Struktur Organisasi</li>
                        </ul>
                    </Grid>

                    <Grid item xs={12} sm={12} md={2} lg={2} >
                        <Typography variant="p" component="p" mt={1} sx={{color: "common.white"}} className="text-avenir-light text-bold"> 
                            Learn More
                        </Typography>                    
                        <ul  style={{paddingLeft: 0, listStyleType: 'none', color: 'white'}} className="text-avenir-light">
                            <li>Bisnis Anggota</li>
                            <li>Baitul Maal</li>
                            <li>Informasi Terkini</li>
                        </ul>
                    </Grid>

                    <Grid item xs={12} sm={12} md={2} lg={2} >
                        <Typography variant="p" component="p" mt={1} sx={{color: "common.white"}} className="text-avenir-light text-bold"> 
                            Support
                        </Typography>                           
                        <ul style={{paddingLeft: 0, listStyleType: 'none', color: 'white'}} className="text-avenir-light">
                            <li>FAQ</li>
                            <li>Help</li>            
                        </ul>
                    </Grid>

                    <Grid item xs={12} sm={12} md={3} lg={3} >
                        <h1>
                            Map Location
                        </h1>
                    </Grid>
                </Grid>

                <hr style={{borderWidth: 1}} />
                <Grid container sx={{pt:3}}>
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        <Typography variant="p" component="p" mt={3} sx={{color: "common.white"}} className="text-avenir-light"> 
                            © Kliktajir. {new Date().getFullYear()}. All Right Reserved
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} md={3} lg={3} >
                        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: {xs: 'center', md: 'end'}, mt: 2 }}>
                            <img src={ImagePlaystore} width={127} height={43} alt="ImagePlaystore" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} > 
                        <Box sx={{ display:'row', justifyContent: {xs: 'center', md: 'end'} }}>
                            <figure className='flex' style={{flexDirection: 'row-reverse'}}>
                                <img src={ImageWhiteFb} alt="" width={40} height={40} />
                                <figcaption>
                                    <Typography variant="p" component="p" mt={1} mr={2} sx={{color: "common.white"}} className="text-avenir-light text-bold"> 
                                        Ikuti kami di FB
                                    </Typography>      
                                </figcaption>
                            </figure>                        
                        </Box>

                    </Grid>

                </Grid>
            </Container>
        </footer>
    )
}

export default Footer;