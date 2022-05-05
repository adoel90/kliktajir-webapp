import React, { useState } from 'react'
import { Button, Box, AppBar, Toolbar, Slide, useScrollTrigger, Typography, Container, Menu, MenuItem, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@mui/material'
import { PAGE_TENTANG_KAMI, PAGE_INFORMASI_TERKINI, PAGE_BAITUL_MAAL, PAGE_BISNIS_ANGGOTA } from 'constanta/index'
import ImageLogoTajir from 'assets/images/logo-tajir.png'
import CustomLink from 'components/common/custom-link/index'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
// import InfoIcon from '@mui/icons-material/Info';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Link } from 'react-router-dom'
// import { useQueryData } from 'hooks'
import AxiosConfig from 'utilities/axios-config';
import { API_SALDO } from 'constanta'
import { useSnackbar } from 'notistack'

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

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
  });

const Header = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    //*
    const [anchorElNav, setAnchorElNav] = React.useState(null);    

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };  
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    //*Dialog Modal Cek Saldo
    const { enqueueSnackbar } = useSnackbar()

    const [isOpenDialogCekSaldo, setOpenDialogCekSaldo] = React.useState(false);

    const handleClickOpenDialogCekSaldo = () => {
        setOpenDialogCekSaldo(true);
    };
  
    const handleCloseDialogCekSaldo = () => {
        setOpenDialogCekSaldo(false);
    };

    const [isLoaderCekSaldo, setLoaderCekSaldo ] = useState(false)
    const [valuePhoneNumber, setValuePhoneNumber ] = useState('')
    const handleChangePhoneNumber = (e) => {
        
        setValuePhoneNumber( e.target.value)
    };

    const handleSubmitCekSaldo = () => {
        
        setLoaderCekSaldo(true);

        AxiosConfig.get(`${API_SALDO}/detail-wa/${valuePhoneNumber}`).then((response) => {

            setLoaderCekSaldo(false);
            console.log("RESPONSE ORIGNAL : ", response);
            if(response.data.status )enqueueSnackbar("Oke sekarang Anda dapat melihat saldo Anda saat ini :)", { variant: 'success'})
            if(!response.data.status ) {

                enqueueSnackbar(response?.data?.message, { variant: 'error'});                     
                handleCloseDialogCekSaldo();
            }
            
        }).catch((error) => {

            setLoaderCekSaldo(false);
            console.log("error : ", error)
            enqueueSnackbar(error?.data?.message, { variant: 'error'});    
            
            handleCloseDialogCekSaldo();
        })
    };
    


    return (
        <>           
            <HideOnScroll {...props}>                           
                <AppBar >
                    <Toolbar >                                        
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none'},                                    
                                }}
                            >
                            
                                <MenuItem  onClick={handleCloseNavMenu}>
                                    <CustomLink to="/"  isWhite={false}>                                              
                                        <p className='ml-3 ml-sm-1 mr-1 text-avenir-light' > Home</p>                                               
                                    </CustomLink>
                                </MenuItem>     
                                <MenuItem  onClick={handleCloseNavMenu}>
                                    <CustomLink to={`${PAGE_TENTANG_KAMI}`}  isWhite={false}>
                                        <p className='ml-1 mr-1 text-avenir-light' >
                                            Tentang Kami
                                        </p>
                                    </CustomLink>
                                </MenuItem>    
                                <MenuItem  onClick={handleCloseNavMenu}>
                                    <CustomLink to={`${PAGE_INFORMASI_TERKINI}`}  isWhite={false}>
                                        <p className='ml-1 mr-1 text-avenir-light' >
                                            Informasi Terkini
                                        </p>
                                    </CustomLink>                        
                                </MenuItem>
                                <MenuItem  onClick={handleCloseNavMenu}>
                                    <CustomLink to={`${PAGE_BISNIS_ANGGOTA}`}  isWhite={false}>
                                        <p className='ml-1 mr-1 text-avenir-light' >
                                            Bisnis Anggota
                                        </p>
                                    </CustomLink>
                                </MenuItem>
                                <MenuItem  onClick={handleCloseNavMenu}>
                                    <CustomLink to={`${PAGE_BAITUL_MAAL}`}  isWhite={false}>
                                        <p className='ml-1 mr-1 text-avenir-light' >
                                            Baitul Maal    
                                        </p>
                                    </CustomLink>
                                </MenuItem>

                            </Menu>
                        </Box>
                        <Box sx={{ mt: -1, ml: -3, flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <img src={ImageLogoTajir} height="31" width="75" />
                        </Box>

                        <Container sx={{display: { xs: "none", sm: "none", md: "block", lg: 'block' }}}>
                            <header>                
                                <nav className='flex flex-row'  >   
                                    <CustomLink to="/">                                   
                                        <img src={ImageLogoTajir} height="31" width="75" className='mt-1-half' />
                                    </CustomLink>
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
                                        <Button onClick={handleClickOpenDialogCekSaldo} variant="outlined" color="secondary" sx={{borderRadius: "24px", textTransform: 'none'}} >
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

            <Dialog 
                open={isOpenDialogCekSaldo} 
                onClose={handleCloseDialogCekSaldo}
                TransitionComponent={Transition}
            >
                <DialogTitle>
                    Cek Saldo Anggota Tajir
                    {/* <IconButton
                        size="large"                                                          
                        color="primary"
                    >
                        <InfoIcon />
                    </IconButton>  */}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>                
                        Untuk mengetahui saldo Anda di rekening Tajir,  <b><i>Anda harus masukan No Handphone yang terdaftar sebagai Anggota Tajir</i></b>
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="No Handphone"
                        type="phone"
                        fullWidth
                        variant="standard"
                        placeholder='Masukan No Handphone Anda di sini !'
                        onChange={handleChangePhoneNumber}
                        sx={{mt: 1}}
                    />
                </DialogContent>
                <DialogActions>
                    <Button size='small' onClick={handleCloseDialogCekSaldo}>Cancel</Button>
                    <Button size='small' color='primary' variant="contained" onClick={handleSubmitCekSaldo}>
                        {
                            isLoaderCekSaldo ? <i>Loading...</i> : 'Submit'
                        }
                        
                    </Button>
                </DialogActions>
            </Dialog>

        </>        
    )
}

export default Header