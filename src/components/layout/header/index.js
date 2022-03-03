import React from 'react'
import { Link } from "react-router-dom";
import { Button, Box, AppBar, Toolbar, Slide, useScrollTrigger, Typography, Container  } from '@mui/material'
import { PAGE_TENTANG_KAMI, PAGE_INFORMASI_TERKINI, PAGE_BAITUL_MAAL, PAGE_BISNIS_ANGGOTA } from 'constanta/index'
import ImageLogoTajir from 'assets/images/logo-tajir.png'


function HideOnScroll(props) {
    
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

const Header = (props) => {

    return (
        <>           
            <HideOnScroll {...props}>   
                        
                <AppBar sx={{display: { xs: "none", sm: "none", md: "block", lg: 'block' }}}>
                    <Toolbar >
                        <Container>
                            <header>                
                                <nav className='flex flex-row'  >                                     
                                    <img src={ImageLogoTajir} height="31" width="75" className='mt-1-half' />
                                    <Link to="/" style={{textDecoration: 'none'}}>                                              
                                        <p className='ml-3 mr-1 text-avenir-light' style={{color: 'white'}}> Home</p>                                               
                                    </Link>
                                    <Link to={`${PAGE_TENTANG_KAMI}`} style={{textDecoration: 'none'}}>
                                        <p className='ml-1 mr-1 text-avenir-light' style={{color: 'white'}}>
                                            Tentang Kami
                                        </p>
                                    </Link>
                                    <Link to={`${PAGE_INFORMASI_TERKINI}`} style={{textDecoration: 'none'}}>
                                        <p className='ml-1 mr-1 text-avenir-light' style={{color: 'white'}}>
                                            Informasi Terkini
                                        </p>
                                    </Link>
                                    <Link to={`${PAGE_BISNIS_ANGGOTA}`} style={{textDecoration: 'none'}}>
                                        <p className='ml-1 mr-1 text-avenir-light' style={{color: 'white'}}>
                                            Bisnis Anggota
                                        </p>
                                    </Link>

                                    <Typography variant="p" sx={{ flexGrow: 1 }}>                                    
                                        <Link to={`${PAGE_BAITUL_MAAL}`} style={{textDecoration: 'none'}}> 
                                            <p className='ml-1 text-avenir-light' style={{color: 'white'}}>
                                                Baitul Maal                                        
                                            </p>                                               
                                        </Link>                    
                                    </Typography>                                        
                                                                                                                    
                                    <Box sx={{mt: 1}}>
                                        <Button variant="outlined" color="secondary" sx={{borderRadius: "24px", textTransform: 'none'}} >
                                            Cek Saldo
                                        </Button>
                                        <Button variant="contained" color="secondary" sx={{ml: 1, borderRadius: "24px", color: "primary.contrastText", textTransform: 'none'}}>
                                            Daftar
                                        </Button>    
                                    </Box>

                                </nav>                
                            </header>
                        </Container>
                    </Toolbar>                                                 
                </AppBar>           
            </HideOnScroll>

            <br />
            <br />

        </>        
    )
}

export default Header