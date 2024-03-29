import { Container, Grid, Typography, Box, IconButton} from '@mui/material'
import ImageLogoTajir from 'assets/images/logo-tajir-medium.svg'
import ImagePlaystore from 'assets/images/footer/image-playstore.svg'
import ImageWhiteFb from 'assets/images/footer/image-white-fb.png'
import { Link, useNavigate } from 'react-router-dom'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

// https://google-map-generator.com/
//  Jl. Soekarno-Hatta No.641, Sukapura, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40285
// <div class="mapouter"><div class="gmap_canvas"><iframe width="416" height="296" id="gmap_canvas" src="https://maps.google.com/maps?q=%20Jl.%20Soekarno-Hatta%20No.641,%20Sukapura,%20Kec.%20Kiaracondong,%20Kota%20Bandung,%20Jawa%20Barat%2040285&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br><style>.mapouter{position:relative;text-align:right;height:296px;width:416px;}</style><a href="https://www.embedgooglemap.net"></a><style>.gmap_canvas {overflow:hidden;background:none!important;height:296px;width:416px;}</style></div></div>

const Footer = () => {

    const navigate = useNavigate();
    const handleToPageAdmin = () => {
        localStorage.clear();        
        handleNavigate()
    }

    const handleNavigate = async ()=> {
        
        await navigate('/pages-admin');
        await window.location.reload()
        
    };

    return (
        <footer className='bg-primary-main'>
            <Container sx={{pt: 7, pb: 5}}>                
                <Grid container sx={{pb: 7}}>
                    <Grid item xs={12} sm={12} md={3} lg={3} 
                        sx={{                            
                            mb: {
                                xs: 3
                            }
                        }}
                    >
                        {/* <Link to="/pages-admin" className='no-underline'  onClick={() => console.log("TEST")}> */}
                            <img src={ImageLogoTajir} height="47" width="114" className='' onClick={() => handleToPageAdmin()} />
                        {/* </Link> */}
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} lg={2} >
                        <Typography variant="p" component="p" mt={1} sx={{color: "common.white"}} className="text-avenir-light text-bold"> 
                            Tajir
                        </Typography>
                        <ul style={{paddingLeft: 0, listStyleType: 'none', color: 'white'}} className="text-avenir-light">
                            <li>
                                <Link className='no-underline text-white' to="/tentang-kami">
                                    Visi Misi
                                </Link>
                            </li>
                            <li className='mt-1-half'>
                                <Link className='no-underline text-white' to="/tentang-kami">
                                    Sejarah
                                </Link>
                            </li>
                            <li className='mt-1-half'>
                                <Link className='no-underline text-white' to="/struktur-organisasi">
                                    Struktur Organisasi
                                </Link>
                            </li>
                        </ul>
                    </Grid>

                    <Grid item xs={6} sm={6} md={2} lg={2} >
                        <Typography variant="p" component="p" mt={1} sx={{color: "common.white"}} className="text-avenir-light text-bold"> 
                            Learn More
                        </Typography>                    
                        <ul  style={{paddingLeft: 0, listStyleType: 'none', color: 'white'}} className="text-avenir-light">
                            <li>
                                <Link className='no-underline text-white' to="/bisnis-anggota">
                                    Bisnis Anggota
                                </Link>
                            </li>
                            <li className='mt-1-half'>
                                <Link className='no-underline text-white' to="/baitul-maal">
                                    Baitul Maal 
                                </Link>                        
                            </li>
                            <li className='mt-1-half'>
                                <Link className='no-underline text-white' to="/informasi-terkini">                            
                                    Informasi Terkini
                                </Link>
                            </li>
                        </ul>
                    </Grid>

                    <Grid item xs={12} sm={12} md={2} lg={2} 
                        sx={{
                            mb: {
                                xs: 3
                            }
                        }}
                    >
                        <Typography variant="p" component="p" mt={1} sx={{color: "common.white"}} className="text-avenir-light text-bold"> 
                            Support
                        </Typography>                           
                        <ul style={{paddingLeft: 0, listStyleType: 'none', color: 'white'}} className="text-avenir-light">
                            <li>FAQ</li>
                            <li className='mt-1-half'>
                                <a className='text-white no-underline' href={`https://wa.me/6285723858570?text=Assalamu%C3%A1laikum`} target="_blank">                                                
                                    Help
                                </a>
                            </li>            
                        </ul>
                    </Grid>

                    <Grid item xs={12} sm={12} md={3} lg={3} 
                         sx={{
                            color: "common.white", 
                            textAlign: {
                                xs: 'center'                                
                            }
                        }} 
                    >
                        <div class="mapouter">
                            <div class="gmap_canvas">
                                <iframe width="296" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=%20Jl.%20Soekarno-Hatta%20No.641,%20Sukapura,%20Kec.%20Kiaracondong,%20Kota%20Bandung,%20Jawa%20Barat%2040285&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a>                                
                                </div>
                            </div>
                    </Grid>
                </Grid>

                <hr style={{borderWidth: 1}} />
                <Grid container >
                    <Grid item xs={12} sm={12} md={3} lg={3} >
                        <Typography 
                            variant="p" 
                            component="p" 
                            mt={3} 
                            sx={{
                                color: "common.white", 
                                textAlign: {
                                    xs: 'center',
                                    md: 'left',
                                }
                            }} 
                            className="text-avenir-light"
                        > 
                            © Kliktajir. {new Date().getFullYear()}. All Right Reserved
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} lg={2} >
                        <Typography 
                                variant="p" 
                                component="p" 
                                mt={2}                                                               
                            > 
                                <a className='text-white ' href={`https://wa.me/6285723858570?text=Assalamu%C3%A1laikum`} target="_blank">                                                
                                    <IconButton
                                        size="large"                                           
                                        color="inherit"
                                    >
                                        <WhatsAppIcon />
                                    </IconButton>
                                    085723858570
                                </a>
                        </Typography>
                    </Grid>  

                    <Grid item xs={12} sm={12} md={3} lg={3} >
                        <Typography 
                                variant="p" 
                                component="p" 
                                mt={2}                                                               
                            > 
                                <a className='text-white no-underline' href="mailto:tajir.info01@gmail.com" >                                                
                                    <IconButton
                                        size="large"                                           
                                        color="inherit"
                                    >
                                        <EmailIcon />
                                    </IconButton>
                                    tajir.info01@gmail.com
                                </a>
                        </Typography>
                    </Grid>    

                    <Grid item xs={12} sm={12} md={1} lg={1} 
                         sx={{                            
                            textAlign: {
                                xs: 'center'
                            }
                        }} 
                    >
                        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: {xs: 'center', md: 'end'}, mt: 2 }}>
                            <a className='no-underline' href="https://play.google.com/store/apps/details?id=id.co.neosantara.tajir" target="_blank">
                                <img  src={ImagePlaystore} width={127} height={43} alt="ImagePlaystore" />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} >                         
                        <a className='no-underline' href="https://www.facebook.com/tajir.muamalah.syariah" target="_blank">                                
                            <figure >
                                <Box 
                                    sx={{
                                        display: {
                                            xs: 'block',
                                            md:'flex', 
                                        },
                                        flexDirection: {
                                            xs: 'initial',
                                            md: 'row-reverse', 
                                        },                                            
                                        textAlign: {
                                            xs: 'center',
                                            md: 'right'
                                        }                                            
                                    }}>
                                    <img src={ImageWhiteFb} alt="" width={40} height={40} />
                                    <figcaption>
                                        <Typography variant="p" component="p" mt={1} mr={2} 
                                            sx={{
                                                color: "common.white", 
                                                textAlign: 'center',
                                                display: {
                                                    xs: 'none',
                                                    md: 'block'
                                                }
                                            }} 
                                            className="text-avenir-light text-bold"
                                        > 
                                            Ikuti kami di FB
                                        </Typography>      
                                    </figcaption>
                                </Box>
                            </figure>                        
                        </a>                    
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer;
