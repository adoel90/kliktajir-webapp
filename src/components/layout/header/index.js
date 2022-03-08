import React from 'react'
import { Button, Box, AppBar, Toolbar, Slide, useScrollTrigger, Typography, Container, Menu, MenuItem } from '@mui/material'
import { PAGE_TENTANG_KAMI, PAGE_INFORMASI_TERKINI, PAGE_BAITUL_MAAL, PAGE_BISNIS_ANGGOTA } from 'constanta/index'
import ImageLogoTajir from 'assets/images/logo-tajir.png'
import CustomLink from 'components/common/custom-link/index'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Link } from 'react-router-dom'

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

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <>           
            <HideOnScroll {...props}>   
                        
                <AppBar sx={{display: { xs: "none", sm: "none", md: "block", lg: 'block' }}}>
                    <Toolbar >
                        <Container>
                            <header>                
                                <nav className='flex flex-row'  >                                     
                                    <img src={ImageLogoTajir} height="31" width="75" className='mt-1-half' />
                                    <CustomLink to="/">                                              
                                        <p className='ml-3 mr-1 text-avenir-light' > Home</p>                                               
                                    </CustomLink>
                                    <CustomLink to={`${PAGE_TENTANG_KAMI}`} >
                                        <p className='ml-1 mr-1 text-avenir-light' >
                                            Tentang Kami
                                        </p>
                                    </CustomLink>
                                    <CustomLink to={`${PAGE_INFORMASI_TERKINI}`} >
                                        <p className='ml-1 mr-1 text-avenir-light' >
                                            Informasi Terkini
                                        </p>
                                    </CustomLink>
                                    <CustomLink to={`${PAGE_BISNIS_ANGGOTA}`} >
                                        <p className='ml-1 mr-1 text-avenir-light' >
                                            Bisnis Anggota
                                        </p>
                                    </CustomLink>

                                    <Typography variant="p" sx={{ flexGrow: 1 }}>                                    
                                        <CustomLink to={`${PAGE_BAITUL_MAAL}`} > 
                                            <p className='ml-1 text-avenir-light' >
                                                Baitul Maal                                        
                                            </p>                                               
                                        </CustomLink>                    
                                    </Typography>                                        
                                                                                                                    
                                    <Box sx={{mt: 1}}>
                                        <Button variant="outlined" color="secondary" sx={{borderRadius: "24px", textTransform: 'none'}} >
                                            Cek Saldo
                                        </Button>
                                        <Button 
                                            endIcon={<KeyboardArrowDownIcon />} 
                                            variant="contained" 
                                            color="secondary" 
                                            sx={{ml: 1, borderRadius: "24px", color: "primary.contrastText", textTransform: 'none'}}
                                            onClick={handleClick}    
                                            className="tracking-tight"
                                        >
                                            Daftar
                                        </Button>    

                                        <Menu                                        
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}                                           
                                        >
                                            <MenuItem onClick={handleClose}>
                                                <Link className='no-underline text-avenir-light text-bold text-primary-main tracking-normal' to="/daftar-anggota">
                                                    Daftar Anggota 
                                                </Link>
                                                <DoubleArrowIcon  fontSize='small' />
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <a className='no-underline  text-avenir-light text-bold text-primary-main tracking-normal' href="https://forms.gle/hdggctA9V3zSBp6E8" target="_blank">                                                
                                                    Daftar Konsultasi
                                                </a>
                                                <DoubleArrowIcon fontSize='small' />
                                            </MenuItem>                                            
                                        </Menu>
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