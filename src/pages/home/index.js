import React from 'react'
import { Container, Grid, Box, Button } from '@mui/material'
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import ImageSectionOne from 'assets/images/home/image-section-1.png'
import ImageSecondaryArrowRight from 'assets/images/common/icon-secondary-arrow-right.png'
import ImageWhiteProperty from 'assets/images/home/produk/icon-white-properti.svg'
import ImageWhiteTravel from 'assets/images/home/produk/icon-white-travel.svg'
import ImageWhitePpob from 'assets/images/home/produk/icon-white-ppob.svg'
import ImageWhiteTransportasi from 'assets/images/home/produk/icon-white-transport.svg'
import ImageWhiteKesehatan from 'assets/images/home/produk/icon-white-kesehatan.svg'
import ImageWhiteIbadah from 'assets/images/home/produk/icon-white-ibadah.svg'
import ImageWhitePembiayaan from 'assets/images/home/produk/icon-white-pembiayaan.svg'
import ImageWhiteSyirkah from 'assets/images/home/produk/icon-white-syirkah.svg'
import ImageUstKahar from 'assets/images/home/image-ust-kahar.png'
import ImageWhatIsBadanSyirkah from 'assets/images/home/image-section-what-is-badan-syirkah.png'

import ImageManfaatMenjadiAnggota1 from 'assets/images/home/manfaat-menjadi-anggota/1.png'
import ImageManfaatMenjadiAnggota2 from 'assets/images/home/manfaat-menjadi-anggota/2.png'
import ImageManfaatMenjadiAnggota3 from 'assets/images/home/manfaat-menjadi-anggota/3.png'
import ImageManfaatMenjadiAnggota4 from 'assets/images/home/manfaat-menjadi-anggota/4.png'
import ImageManfaatMenjadiAnggota5 from 'assets/images/home/manfaat-menjadi-anggota/5.png'
import ImageManfaatMenjadiAnggota6 from 'assets/images/home/manfaat-menjadi-anggota/6.png'

const Home = () => {

    return (
        <>
            <section id="hero" className='bg-primary-main'>                            
                <Container>
                    <Grid container >
                        <Grid item xs={12} sm={12} md={8} lg={8} sx={{pt: 15}}>
                               
                            <h1 className='text-oswald text-56px text-white tracking-normal'>
                                Mitra Bisnis Syariah Anda
                            </h1>

                            <h3 className='text-white-dark text-avenir-light text-20px text-500'>
                                Badan Syirkah Muamalah TAJIR.  Powered By Koperasi <br />masyarakat Muamalah Syariah
                            </h3>

                            <Button size="large" variant="contained" color="warning" sx={{mt:1, mb:3,borderRadius: "24px", color: "primary.main", textTransform: 'none'}} className="text-bold text-avenir-light">                                            
                                Selengkapnya
                            </Button>

                            <div style={{display: 'flex'}}>
                                <Box sx={{mr: 5}}>
                                    <h4 className='text-white text-avenir-light'>
                                        1500+ 
                                    </h4>
                                    <p className='text-white text-avenir-light text-small mt-n1'>
                                        Anggota
                                    </p>              
                                </Box>
                                <Box sx={{mr: 5}}>
                                    <h4 className='text-white text-avenir-light'>                                    
                                        800+ 
                                    </h4>
                                    <p className='text-white text-avenir-light text-small mt-n1'>
                                        Penerima <br /> Manfaat
                                    </p>              
                                </Box>
                                <Box sx={{mr: 5}}>
                                    <h4 className='text-white text-avenir-light'>                                                                    
                                        40+ 
                                    </h4>
                                    <p className='text-white text-avenir-light text-small mt-n1'>                                    
                                        Produk
                                    </p>              
                                </Box>
                                <Box sx={{mr: 5}}>
                                    <h4 className='text-white text-avenir-light'>                                                                                                        
                                        10
                                    </h4>
                                    <p className='text-white text-avenir-light text-small mt-n1'>
                                        Program
                                    </p>              
                                </Box>
                            </div>                                                         
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <img src={ImageSectionOne}  alt="ImageSectionOne" height="100%" className='w-127 w-sm-full' />
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <Container>

                <Grid container sx={{mt: 15}}>
                    <Grid item xs={12} sm={12} md={4} lg={4} >
                        <section id="produk">
                            <h1 className='text-40px text-oswald tracking-tight'>
                                Produk
                            </h1>    
                            <h3 className='text-avenir-light text-white-contrast-dark' style={{marginTop: "-1rem"}}>
                                Beberapa usaha yang akan di tangani oleh BSM TAJIR untuk membangun masyarakat berbasis syariáh
                            </h3>  
                            
                            <a className="text-avenir-light text-secondary-main no-underline text-bold" href="">
                                Lihat Semua Produk
                                <img className=' mt-2' style={{marginBottom: "-0.3rem", marginLeft: "1rem"}} src={ImageSecondaryArrowRight} alt="ImageSecondaryArrowRight" width={27} height="auto" />
                            </a>
                        </section>             
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8} >

                        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent:"space-between"}}>
                            <figure className='bg-primary-main mt-3' style={{width: 75, height: 75, textAlign: 'center', borderRadius: "50%"}}>
                                <img style={{marginTop: "1.5rem"}} src={ImageWhiteProperty} alt="ImageWhiteProperty" width={51} height="auto" />                           
                                <figcaption className='text-black text-avenir-light text-bold' style={{ marginTop: 24}}>
                                    Properti
                                </figcaption>
                            </figure>

                            <figure className='bg-primary-main mt-3' style={{width: 75, height: 75, textAlign: 'center', borderRadius: "50%"}}>
                                <img style={{marginTop: "1.3rem"}} src={ImageWhiteTravel} alt="ImageWhiteTravel" width={32} height="auto" />                           
                                <figcaption className='text-black text-avenir-light text-bold' style={{ marginTop: 24}}>
                                    Travel
                                </figcaption>
                            </figure>  
                            
                            <figure className='bg-primary-main mt-3' style={{width: 75, height: 75, textAlign: 'center', borderRadius: "50%"}}>
                                <img style={{marginTop: "0.7rem"}} src={ImageWhitePpob} alt="ImageWhitePpob" width={42} height="auto" />                           
                                <figcaption className='text-black text-avenir-light text-bold' style={{ marginTop: 24}}>
                                    PPOB
                                </figcaption>
                            </figure>     

                            <figure className='bg-primary-main mt-3' style={{width: 75, height: 75, textAlign: 'center', borderRadius: "50%"}}>
                                <img style={{marginTop: "1.5rem"}} src={ImageWhiteTransportasi} alt="ImageWhiteTransportasi" width={41} height="auto" />                           
                                <figcaption className='text-black text-avenir-light text-bold' style={{ marginTop: 24}}>
                                    Transportasi
                                </figcaption>
                            </figure>                    
                        </Box>      

                         <Box sx={{ mt: 3, display: 'flex', flexDirection: 'row', justifyContent:"space-between"}}>
                            <figure className='bg-primary-main mt-3' style={{width: 75, height: 75, textAlign: 'center', borderRadius: "50%"}}>
                                <img style={{marginTop: "1.2rem"}} src={ImageWhiteKesehatan} alt="ImageWhiteKesehatan" width={38} height="auto" />                           
                                <figcaption className='text-black text-avenir-light text-bold' style={{ marginTop: 24}}>
                                    Kesehatan
                                </figcaption>
                            </figure>

                            <figure className='bg-primary-main mt-3' style={{width: 75, height: 75, textAlign: 'center', borderRadius: "50%"}}>
                                <img style={{marginTop: "0.9rem"}} src={ImageWhiteIbadah} alt="ImageWhiteIbadah" width={33} height="auto" />                           
                                <figcaption className='text-black text-avenir-light text-bold' style={{ marginTop: 24}}>
                                    Kajian/Ibadah
                                </figcaption>
                            </figure>  
                            
                            <figure className='bg-primary-main mt-3' style={{width: 75, height: 75, textAlign: 'center', borderRadius: "50%"}}>
                                <img style={{marginTop: "1rem"}} src={ImageWhitePembiayaan} alt="ImageWhitePembiayaan" width={38} height="auto" />                           
                                <figcaption className='text-black text-avenir-light text-bold' style={{ marginTop: 24}}>
                                    Pembiayaan
                                </figcaption>
                            </figure>     

                            <figure className='bg-primary-main mt-3' style={{width: 75, height: 75, textAlign: 'center', borderRadius: "50%"}}>
                                <img style={{marginTop: "1rem"}} src={ImageWhiteSyirkah} alt="ImageWhiteSyirkah" width={36} height="auto" />                           
                                <figcaption className='text-black text-avenir-light text-bold' style={{ marginTop: 24}}>
                                    Syirkah
                                </figcaption>
                            </figure>                    
                        </Box>                                       
                    </Grid>
                </Grid>
            </Container>

            <Container>              
                <Grid container sx={{mt: 17}}>
                    <section id="kabar" className='w-full'>
                        <Box sx={{display: 'flex', flexDirection: 'row'}}>
                            <Box sx={{flexGrow: 1}}>
                                <h1 className='text-40px text-oswald tracking-tight'>
                                    Kabar
                                </h1>      
                            </Box>
                            <Box sx={{mt: 3}}>
                                <a className="text-avenir-light text-secondary-main no-underline text-bold" href="">
                                    Lihat Semua Produk
                                    <img className=' mt-2' style={{marginBottom: "-0.3rem", marginLeft: "1rem"}} src={ImageSecondaryArrowRight} alt="ImageSecondaryArrowRight" width={27} height="auto" />
                                </a>
                            </Box>
                        </Box>                  

                        <Card sx={{ width: '25%' }}>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={ImageUstKahar}
                                alt="ImageUstKahar"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="p" component="div" className="text-white-dark"  >
                                    20 Januari 2022
                                </Typography>
                                <Typography variant="h5" className='text-black' sx={{fontWeight: 'bold', pb: 5}} >
                                    Di Padang
                                </Typography>
                            </CardContent>
                            {/* <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions> */}
                            </Card>
                    </section>
                </Grid>
            </Container>

            <section id="what-is-badan-syirkah" className='bg-primary-main mt-5'>                            
                <Container>
                    <Grid container sx={{pt: 11, pb: 7}} >
                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            <h1 className='text-40px text-oswald tracking-tight text-white'>
                                Apa itu Badan Syirkah Muamalah ?
                            </h1>  
                            <h3 className='text-white-dark text-500'>
                                Badan Syirkah Muamalah adalah tempat berkumpulnya ummat untuk melakukan Syirkah (kerjasama). Wadah ini menyepakati transaksi bisnis dengan tujuan mencari keuntungan yang sesuai syariah islam, yang terhindar dari antara lain Maysir (untung-untungan), Gharar (Ketidakjelasan), Riba dan Haram.
                            </h3>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} textAlign="center">
                            <img style={{marginLeft: 17}} src={ImageWhatIsBadanSyirkah} alt="ImageWhatIsBadanSyirkah" width="100%" height="auto" />
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <section id="registrasi">
                        <h1 className='text-center text-oswald text-500 tracking-tight text-40px' >
                            Mitra Kami
                        </h1>  
                    </section>
                </Grid>                
            </Grid>

            <section id="registrasi" className='bg-primary-main'>   
                <Container sx={{pt: 11, pb: 7}}>
                    <h1 className='text-40px text-oswald tracking-tight text-white'>
                        Manfaat menjadi Anggota 
                    </h1>                  
                    <Grid container>
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Box sx={{display: 'flex'}}>
                                <figure className='bg-secondary-main' style={{width: 75, height: 75, textAlign: 'center', borderRadius: "50%"}}>
                                    <img className='mt-1' src={ImageManfaatMenjadiAnggota1} alt="" width={40} height="auto" />                            
                                </figure>
                                <p className='text-avenir-light text-white text-500 mt-2 ml-n1'>
                                    Mudah dalam memperoleh modal
                                </p>          
                            </Box>
                        </Grid>          

                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Box sx={{display: 'flex'}}>
                                <figure className='bg-secondary-main' style={{width: 75, height: 75, textAlign: 'center', borderRadius: "50%"}}>
                                    <img className='mt-1' src={ImageManfaatMenjadiAnggota2} alt="" width={40} height="auto" />                            
                                </figure>
                                <p className='text-avenir-light text-white text-500 mt-2  ml-n1'>
                                    Dapat Mangakses database<br /> produk anggota lain
                                </p>          
                            </Box>                            
                        </Grid>   
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Box sx={{display: 'flex'}}>
                                <figure className='bg-secondary-main' style={{width: 75, height: 75, textAlign: 'center', borderRadius: "50%"}}>
                                    <img style={{marginTop: "1.5rem"}} src={ImageManfaatMenjadiAnggota3} alt="" width={40} height="auto" />                            
                                </figure>
                                <p className='text-avenir-light text-white text-500 mt-2 ml-n1 text-small'>
                                    Memperoleh kesempatan yang luas <br /> untuk berbisnis  dengan anggota lain                                    
                                </p>          
                            </Box>                            
                        </Grid>        
                    </Grid>
                                      
                    <Grid container sx={{mt:3}}>
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Box sx={{display: 'flex'}}>
                                <figure className='bg-secondary-main' style={{width: 75, height: 75, textAlign: 'center', borderRadius: "50%"}}>
                                    <img className='mt-1' src={ImageManfaatMenjadiAnggota4} alt="" width={40} height="auto" />                            
                                </figure>
                                <p className='text-avenir-light text-white text-500 mt-2 ml-n1'>
                                    Dapat mengajukan <br />pembiayaan Proyek                                                                     
                                </p>          
                            </Box>                            
                        </Grid>  
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Box sx={{display: 'flex'}}>
                                <figure className='bg-secondary-main' style={{width: 75, height: 75, textAlign: 'center', borderRadius: "50%"}}>
                                    <img className='mt-1' src={ImageManfaatMenjadiAnggota5} alt="" width={40} height="auto" />                            
                                </figure>
                                <p className='text-avenir-light text-white text-500 mt-2 ml-n1'>
                                    Melakukan Usaha sesuai <br /> syariah Islam & bebas Riba                                                                                                
                                </p>          
                            </Box>               
                        </Grid>  
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Box sx={{display: 'flex'}}>
                                <figure className='bg-secondary-main' style={{width: 75, height: 75, textAlign: 'center', borderRadius: "50%"}}>
                                    <img className='mt-1' src={ImageManfaatMenjadiAnggota6} alt="" width={40} height="auto" />                            
                                </figure>
                                <p className='text-avenir-light text-white text-500 mt-2 ml-n1'>
                                    Membeli produk anggota lain <br />dengan harga khusus                                                                                                                                  
                                </p>          
                            </Box>            

                            <Box sx={{display: 'flex', justifyContent : 'end'}}>
                                <Button size="large" variant="contained" color="warning" sx={{mt:7, mb:3,borderRadius: "24px", color: "primary.main", textTransform: 'none'}} className="text-bold text-avenir-light">                                            
                                    Daftar Menjadi Anggota
                                </Button>                        
                            </Box>
                        </Grid>          
                    </Grid>
                </Container>      
            </section>     

            <Container sx={{pt: 11, pb: 11}}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={10} lg={10} >                
                        <h1 className='text-36px text-oswald tracking-tight'>
                            Tertarik berkolaborasi bersama ? Diskusikan bisnis Anda dengan kami                            
                        </h1>                    
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} lg={2} >                
                        <Box sx={{display: 'flex', justifyContent : 'end'}}>
                            <Button size="large" variant="contained" color="secondary" sx={{mt:5,borderRadius: "24px", color: "common.white", textTransform: 'none'}} className="text-bold text-avenir-light">                                            
                                Daftar Konsultasi
                            </Button>                        
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}

export default Home;