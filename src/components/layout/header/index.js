import React, { useState } from 'react'
import { Tooltip,Alert, AlertTitle, Button, Box, AppBar, Toolbar, Slide, useScrollTrigger, Typography, Container, Menu, MenuItem, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@mui/material'
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
import { indonesianFormat } from 'utilities/separator-currency'

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
        setCheckSaldoSuccess(false);
    };

    const [isLoaderCekSaldo, setLoaderCekSaldo ] = useState(false)
    const [valuePhoneNumber, setValuePhoneNumber ] = useState('')
    const handleChangePhoneNumber = (e) => {
        
        setValuePhoneNumber( e.target.value)
    };

    const [saldoSaatIni, setSaldoSaatIni ] = useState('')
    const [isCheckSaldoSuccess, setCheckSaldoSuccess] = useState(false)
    const handleSubmitCekSaldo = () => {
        
        setLoaderCekSaldo(true);

        AxiosConfig.get(`${API_SALDO}/detail-wa/${valuePhoneNumber}`).then((response) => {

            setLoaderCekSaldo(false);
            console.log("RESPONSE ORIGNAL : ", response);
            if(response.data.status ){

                setCheckSaldoSuccess(true)
                setSaldoSaatIni(response?.data?.data?.saldo);
                enqueueSnackbar("Saldo berhasil di tampilkan, sekarang Anda dapat melihat saldo saat ini :)", { variant: 'success'})
            }
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
                                        <Tooltip arrow title="Hanya untuk Cek Saldo Rekening Anggota (Wadiáh), tidak termasuk Saldo Simpanan Pokok, Wajib, Deposito, Tabungan Umroh & Qurban" placement='left-start'>
                                            <Button onClick={handleClickOpenDialogCekSaldo} variant="outlined" color="secondary" sx={{borderRadius: "24px", textTransform: 'none'}} >
                                                Cek Saldo
                                            </Button>
                                        </Tooltip>
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
                    Cek Saldo Rekening Anggota <i>(Akad Wadiáh)</i>
                    {/* <IconButton
                        size="large"                                                          
                        color="primary"
                    >
                        <InfoIcon />
                    </IconButton>  */}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>                
                        Untuk mengetahui Saldo Rekening,  &nbsp;
                        <b>
                           Anda harus masukan &nbsp; 
                                <Tooltip arrow title="Kode Akses adalah akses khusus yang di berikan ketika Anda telah menjadi Anggota Tajir">
                                <i><code className='text-lg text-bold'>Kode Akses</code> </i>
                                </Tooltip>
                                &nbsp; yang terdaftar sebagai Anggota Tajir.
                            
                        </b>
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Kode Akses"
                        type="phone"
                        fullWidth
                        variant="standard"
                        placeholder='Masukan Kode Akses Anda di sini !'
                        onChange={handleChangePhoneNumber}
                        sx={{mt: 1}}
                    />
                    
                    {
                        isCheckSaldoSuccess ? 
                            <Alert severity="success" sx={{mt:3}}  onClose={handleCloseDialogCekSaldo}>
                                <AlertTitle><b>Success</b></AlertTitle>
                                Saldo Rekening Anda saat ini adalah — <strong className='text-lg'><i>Rp {indonesianFormat.format(saldoSaatIni)},-</i></strong>
                            </Alert> : ''
                    }
                </DialogContent>
                {
                    !isCheckSaldoSuccess &&
                        <DialogActions>
                            <Button size='small' onClick={handleCloseDialogCekSaldo}>Cancel</Button>
                            <Button size='small' color='primary' variant="contained" onClick={handleSubmitCekSaldo}>
                                {
                                    isLoaderCekSaldo ? <i>Loading...</i> : 'Submit'
                                }
                                
                            </Button>
                        </DialogActions>
                }
            </Dialog>

        </>        
    )
}

export default Header