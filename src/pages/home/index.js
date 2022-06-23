import React from 'react'
import { Container, Grid, Box, Button } from '@mui/material'
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

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
import ImageWhatIsBadanSyirkah from 'assets/images/home/image-section-what-is-badan-syirkah.png'

import ImageManfaatMenjadiAnggota1 from 'assets/images/home/manfaat-menjadi-anggota/1.png'
import ImageManfaatMenjadiAnggota2 from 'assets/images/home/manfaat-menjadi-anggota/2.png'
import ImageManfaatMenjadiAnggota3 from 'assets/images/home/manfaat-menjadi-anggota/3.png'
import ImageManfaatMenjadiAnggota4 from 'assets/images/home/manfaat-menjadi-anggota/4.png'
import ImageManfaatMenjadiAnggota5 from 'assets/images/home/manfaat-menjadi-anggota/5.png'
import ImageManfaatMenjadiAnggota6 from 'assets/images/home/manfaat-menjadi-anggota/6.png'
import ImageLogoTajirLg from 'assets/images/logo-tajir-lg.png'

// import ImageLogoTajirMed from 'assets/images/logo-tajir-med.webp'

import { useQueryData } from 'hooks'
import { API_INFORMASI_TERKINI } from 'constanta'

const Home = () => {

    const { data, isLoading } = useQueryData(`${API_INFORMASI_TERKINI}/list?limit=4&page=1`)  

    return (
        <>
            <section id="hero" className='' 
                style={{background: 'linear-gradient(172deg, rgba(25,212,62,1) 21%, rgba(185,195,0,1) 99%)'}}
                // style={{background: 'linear-gradient(162deg, rgba(25,212,62,1) 21%, rgba(185,195,0,1) 99%)'}}
                // style={{background: 'linear-gradient(162deg, rgba(25,212,62,1) 21%, rgba(185,195,0,1) 67%)'}}

            >                            
                <Container>
                    <Grid container >
                        <Grid item xs={12} sm={12} md={8} lg={8} sx={{
                            pt: {
                                xs: 1,
                                md: 15
                            }                            
                        }}>                                                              
                            <img src={ImageLogoTajirLg}  alt="ImageLogoTajirMed" className='w-sm-319px h-sm-auto w-auto h-247px '  />
                            <h1 className='text-oswald text-56px text-white tracking-normal mt-0 mb-0'>
                                Mitra Bisnis Syariah Anda
                            </h1>

                            <h3 className='text-white text-avenir-light text-20px text-500'>
                                Powered By Koperasi Masyarakat Muamalah Syariah
                            </h3>

                            <Link className=" no-underline" to="/produk-kami">
                                <Button size="large" variant="contained" color="warning" sx={{mt:1, mb:3,borderRadius: "24px", color: "primary.main", textTransform: 'none'}} className="text-bold text-avenir-light">                                            
                                    Selengkapnya
                                </Button>
                            </Link>

                            <div style={{display: 'flex'}}>
                                <Box sx={{mr: 5}}>
                                    <h4 className='text-white text-avenir-light'>
                                        100+ 
                                    </h4>
                                    <Link className='no-underline' to="/bisnis-anggota">
                                        <p className='text-white text-avenir-light text-small mt-n1'>
                                            Anggota
                                        </p>              
                                    </Link>
                                </Box>
                                <Box sx={{mr: 5}}>
                                    <h4 className='text-white text-avenir-light'>                                    
                                        500+ 
                                    </h4>
                                    
                                    <Link className='no-underline' to="/baitul-maal">
                                        <p className='text-white text-avenir-light text-small mt-n1'>
                                            Penerima <br /> Manfaat
                                        </p>          
                                    </Link>    
                                </Box>
                                <Box sx={{mr: 5}}>
                                    <h4 className='text-white text-avenir-light'>                                                                    
                                        40+ 
                                    </h4>
                                    <Link className='no-underline' to="/produk-kami">                                    
                                        <p className='text-white text-avenir-light text-small mt-n1'>                                    
                                            Produk
                                        </p>              
                                    </Link>
                                </Box>
                                <Box sx={{mr: 5}}>
                                    <h4 className='text-white text-avenir-light'>                                                                                                        
                                        10
                                    </h4>
                                    <Link className='no-underline' to="/informasi-terkini">
                                        <p className='text-white text-avenir-light text-small mt-n1'>
                                            Program
                                        </p>              
                                    </Link>
                                </Box>
                            </div>                                                         
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <img src={ImageSectionOne}  alt="ImageSectionOne" style={{height: '100%'}} className='w-127 w-sm-full' />
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
                            
                            <Link className="text-avenir-light text-secondary-main no-underline text-bold" to="/produk-kami">
                                Lihat Semua Produk
                                <img className=' mt-2' style={{marginBottom: "-0.3rem", marginLeft: "1rem"}} src={ImageSecondaryArrowRight} alt="ImageSecondaryArrowRight" width={27} height="auto" />
                            </Link>
                        </section>             
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8} >

                        <Box sx={{display: 'flex', flexWrap: 'wrap' ,flexDirection: 'row', justifyContent:"space-between"}}>
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

                         <Box sx={{ mt: 3, display: 'flex',  flexWrap: 'wrap', flexDirection: 'row', justifyContent:"space-between"}}>
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
                                    {/* <span className='text-small text-white-dark text-500'><i> (onprogress Integrasi API...)</i></span>  */}
                                </h1>     
                            </Box>
                            <Box sx={{
                                mt: 3,
                                display: { 
                                    xs: 'none',
                                    md: 'block',
                                }

                            }}>
                                <Link className="text-avenir-light text-secondary-main no-underline text-bold" to="/informasi-terkini">                                    
                                    Lihat Semua Kabar                                    
                                    <img className=' mt-2' style={{marginBottom: "-0.3rem", marginLeft: "1rem"}} src={ImageSecondaryArrowRight} alt="ImageSecondaryArrowRight" width={27} height="auto" />
                                </Link>
                            </Box>
                            <Box 
                                sx={{ 
                                    mt: 3,
                                    display: { 
                                        xs: 'block',
                                        md: 'none',
                                    }
                                }}>
                                <Link className="text-avenir-light text-secondary-main no-underline text-bold" to="/informasi-terkini">        
                                    <img className=' mt-2' style={{marginBottom: "-0.3rem", marginLeft: "1rem"}} src={ImageSecondaryArrowRight} alt="ImageSecondaryArrowRight" width={27} height="auto" />                            
                                </Link>
                            </Box>
                        </Box>               
                        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>

                            {
                                data?.map((item, i) => (
                                    <Card 
                                        key={i}
                                        sx={{ 

                                            width: {
                                                xs: '100%',
                                                md: '25%' 
                                            }                                                                                
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            height="auto"
                                            image={`${ process.env.REACT_APP_API_BASE_URL}/${item?.image}`}
                                            alt={item?.title}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="p" component="div" className="text-white-dark"  >
                                                {item?.date}
                                            </Typography>
                                            <Typography variant="h5" className='text-black' sx={{fontWeight: 'bold', pb: 5}} >
                                                {item?.title}
                                            </Typography>
                                        </CardContent>                           
                                    </Card>
                                ))
                            }   
                        </Box>

                        {/* <Card sx={{ 

                            width: {
                                xs: '100%',
                                md: '25%' 
                            }
                            
                            
                        }}>
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
                        </Card> */}
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
                            <h3 className='text-white text-500'>
                                Badan Syirkah Muamalah adalah tempat berkumpulnya ummat untuk melakukan Syirkah (kerjasama). Wadah ini menyepakati transaksi bisnis dengan tujuan mencari keuntungan yang sesuai syariah islam, yang terhindar dari antara lain Maysir (untung-untungan), Gharar (Ketidakjelasan), Riba dan Haram.
                            </h3>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} textAlign="center">
                            <Box sx={{
                                marginLeft: {
                                    xs: 0,
                                    md: 17                                                                        
                                }
                            }}>
                                <img  src={ImageWhatIsBadanSyirkah} alt="ImageWhatIsBadanSyirkah" width="100%" height="auto" />
                            </Box>
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

                            <Box sx={{
                                display: 'flex', 
                                justifyContent : {
                                    xs : 'center',
                                    md: 'end'
                                }                                
                            }}>
                                <Link className='no-underline' to="/daftar-anggota">
                                    <Button size="large" variant="contained" color="warning" sx={{mt:7, mb:3,borderRadius: "24px", color: "primary.main", textTransform: 'none'}} className="text-bold text-avenir-light">                                            
                                        Daftar Menjadi Anggota
                                    </Button>                        
                                </Link>                                
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
                        <Box sx={{
                            display: 'flex',                             
                            justifyContent : {
                                xs : 'center',
                                md: 'end'
                            } 
                        }}
                        >
                            <a className='no-underline' href="https://forms.gle/hdggctA9V3zSBp6E8" target="_blank">
                                <Button size="large" variant="contained" color="secondary" sx={{mt:5,borderRadius: "24px", color: "common.white", textTransform: 'none'}} className="text-bold text-avenir-light">                                            
                                    Daftar Konsultasi
                                </Button>                        
                            </a>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}

export default Home;