import React from 'react'
import { Container, Grid, Box, Button } from '@mui/material'
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

                            <h3 className='text-white-dark text-avenir-light text-20px'>
                                Badan Syirkah Muamalah TAJIR.  Powered By Koperasi <br />masyarakat Muamalah Syariah
                            </h3>

                            <Button variant="contained" color="warning" sx={{mt:1, mb:3,borderRadius: "24px", color: "primary.main", textTransform: 'none'}} className="text-bold text-avenir-light">                                            
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

                <Grid container>
                    <section id="kabar">
                    <h1>
                        Kabar
                    </h1>      

                    <figure>
                        <img src="#" alt="" />
                        <figcaption>
                            <p>
                            20 January 2022
                            </p>
                            <h5>
                            <b>Di PADANG</b>
                            </h5>
                            <h6>
                            Disksui para pedagang Vol.5
                            </h6>
                        </figcaption>
                        </figure>
                    </section>
                </Grid>


                <Grid container>
                <Grid item xs={12} sm={12} md={8} lg={8} >
                        <section id="registrasi">
                        <h1>
                            Mitra Kami
                        </h1>  
                        </section>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} >

                    </Grid>
                </Grid>

                <section id="registrasi" style={{backgroundColor: 'green'}}>
                    <h3>
                    Manfaat menjadi Anggota 
                    </h3>  
                    <Grid container>
                        <Grid item xs={12} sm={12} md={4} lg={4} >

                                <figure>
                                <img src="#" alt="" />
                                <figcaption>
                                    <p>
                                    Mudah dalam memperoleh modal

                                    </p>          
                                </figcaption>
                                </figure>
                        </Grid>          

                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <figure>
                                <img src="#" alt="" />
                                <figcaption>
                                <p>
                                    Dapat Mangakses database produk anggota lain
                                </p>          
                                </figcaption>
                            </figure>
                        </Grid>   
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <figure>
                                <img src="#" alt="" />
                                <figcaption>
                                <p>
                                    Memperoleh kesempatan yang luas untuk berbisnis dengan anggota lain
                                </p>          
                                </figcaption>
                            </figure>
                        </Grid>        
                    </Grid>

                    <Grid container>
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <figure>
                                <img src="#" alt="" />
                                <figcaption>
                                <p>
                                    Dapat mengajukan pembiayaan Proyek
                                </p>          
                                </figcaption>
                            </figure>
                        </Grid>  
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <figure>
                                <img src="#" alt="" />
                                <figcaption>
                                <p>
                                    Melakukan Usaha sesuai syariah islam & bebas Riba
                                </p>          
                                </figcaption>
                            </figure>
                        </Grid>  
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <figure>
                                <img src="#" alt="" />
                                <figcaption>
                                <p>
                                    Membeli produk anggota lain dengan harga khusus
                                </p>          
                                </figcaption>
                            </figure>

                            <button type="button">
                                Daftar Menjadi Anggota
                            </button>
                        </Grid>          
                    </Grid>

                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                        <h3>
                            Tertarik berkolaborasi bersama ? Diskusikan bisnis anda dengan kami
                        </h3>
                        <button type="button">
                            Daftar Konsultasi
                        </button>
                        </Grid>
                    </Grid>
                </section>     



        </>
    )
}

export default Home;