import React from 'react'
import { Grid, Container} from '@mui/material'
import ImageSectionBerdirinyaTajir from 'assets/images/tentang-kami/img-main-section-berdirinya-tajir.webp'
import SusunanOrganisasi from 'components/section/susunan-organisasi/index.js'
import DaftarJadiAnggota from 'components/section/daftar-jadi-anggota/index.js'
import TextBigPicture from 'components/section/text-big-picture/index.js'
import SwipeableTextMobileStepper from 'components/common/carousel/index.js'
import ImageLaunching1 from 'assets/images/tentang-kami/img-launching.webp'
import ImageLaunching2 from 'assets/images/tentang-kami/img-launching-2.webp'
import ImageBerdiriTajir1 from 'assets/images/tentang-kami/img-berdirinya-tajir.webp'
import ImageBerdiriTajir2 from 'assets/images/tentang-kami/img-berdirinya-tajir-2.webp'

const images = [
    {
      label: 'Image Launching 1',
      imgPath: ImageLaunching1        
    },
    {
      label: 'Image Launching 2',
      imgPath: ImageLaunching2
    }
  ];

  const imagesBeridirinyaTajir = [
    {
      label: 'Image Beridirinya Tajir 1',
      imgPath: ImageBerdiriTajir1        
    },
    {
      label: 'Image Beridirinya Tajir 2',
      imgPath: ImageBerdiriTajir2
    }
  ];


const TentangKami = () => {

    return (

        <>        
            <TextBigPicture>
                Tentang <span className='text-secondary-main'>Kami</span>
            </TextBigPicture>
            <Container>
                <section id="visi-misi">
                    <Grid container >
                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            <h1 className='text-oswald text-56px text-primary-main tracking-normal text-center'>
                                Visi
                            </h1>                      
                            <h3 className='text-avenir-light text-500 text-center'>
                                Terwujudnya Ekonomi Umat Yang Kokoh & Berkah.
                            </h3>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            <h1 className='text-oswald text-56px text-primary-main tracking-normal text-center'>                            
                                Misi 
                            </h1>
                            <ul className='list-none text-avenir-light text-500 ml-5 ml-sm-0'>
                                <li>✓ Membangun Ekonomi Berbasis Syariah </li>
                                <li>✓ Memperluas kemitraan Bisnis di semua sektor </li>
                                <li>✓ Mensejahterakan anggota  dan Masyarakat </li>
                                <li>✓ Mengelola Investasi umat dengan Profesional dan Aman </li>
                            </ul>
                        </Grid>
                    </Grid>

                    {/* <Grid container sx={{mt: 7}}>
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                            <SwipeableTextMobileStepper images={images} />
                            <p className='text-avenir-light text-500 text-lg'>
                                <i>Launching TAJIR pada tanggal 9 November 2019,  bertempat di Aula SD Mutiara Bunda Bandung,  dihadiri Founder TAJIR Bapak Dr. Ir. H. Kahar Mulyani, MM., dan Bapak Pristyanto dari Kementrian Koperasi dan UKM yang disaksikan oleh 40 pendiri.</i>
                            </p>
                        </Grid>
                    </Grid> */}
                </section>
        
                <section id="berdirinya-tajir">
                    <h1 className='text-oswald text-primary-main text-500'>
                        Berdirinya TAJIR
                    </h1>
                    <p className='text-avenir-light text-500 text-lg'>
                        Berawal dari kajian-kajian yang diselenggarakan di beberapa tempat tentang riba, syirkah serta permasalahan ekonomi syariah lainnya, diskusi dalam Group WhatsApp Masyarakat Muamalah Syariah (MMS), akhirnya berkembang menjadi pembentukan sebuah Badan Syirkah Muamalah (BSM).
                    </p>
                    <p className='text-avenir-light text-500 text-lg'>
                        Hasil dari kajian ini, banyak peserta yang sadar akan bahaya dan dosa-dosa Riba sehingga ada yang berhenti bekerja dan meninggalkan pekerjaan ribawi yang selama ini digelutinya. Di sisi lain, ada juga yang memiliki sejumlah uang tapi takut menyimpan karena Riba. Berbagai fenomena yang terjadi di masyarakat ini menyebabkan perlunya sebuah lembaga yang dapat menjadi solusi agar kita semua dapat melakukan kegiatan ekonomi secara syar’i. 
                    </p>
                    <SwipeableTextMobileStepper images={imagesBeridirinyaTajir} />           
                    <p className='text-avenir-light text-500 text-lg text-center'>
                        <i>Kajian Masyarakat Muamalah Syariah di Masjid Trans Studio Mall Bandung</i>
                    </p>


                    <p className='text-avenir-light text-500 text-lg mt-5'>
                        Badan Syirkah Muamalah adalah tempat berkumpulnya ummat untuk melakukan Syirkah (kerjasama) antara yang satu dengan yang lain. Ada yang memerlukan modal bekerja sama dengan yang punya modal, ada yang memiliki uang tetapi memilih untuk menyimpan uangnya yang sesuai dengan syariah, ada yang memiliki proyek bekerjasama dengan yang ahli pada bidang yang diinginkan. Dalam wadah ini insya Allah menggunakan akad sesuai dengan syariah,  sepakat melakukan bisnis dengan tujuan mencari keuntungan yang sesuai syariah islam, yang terhindar dari antara lain Maysir (untung-untungan), Gharar (Ketidakjelasan), Riba dan Haram.
                    </p>
                    <figure>
                        <img className='rounded' src={ImageSectionBerdirinyaTajir} width="100%" height="auto" />
                        <figcaption className='text-avenir-light text-500 text-lg text-center'>
                            <i>Acara kajian Masyarakat Muamalah Syariah di Bengkulu</i>
                        </figcaption>
                    </figure>

                    
                    <p className='text-avenir-light text-500 text-lg'>
                        Bermula dari hal-hal tersebut, maka pada tanggal 9 Nopember 2019 bertempat di Bandung, dilakukan launching Badan Syirkah Muamalah ini dengan nama nama TAJIR. Sehingga Nama lengkapnya adalah <b>Badan Syirkah Muamalah TAJIR</b> atau disingkat dengan <b>BSM TAJIR</b>.
                    </p>
                
                       <Grid container sx={{mt: 7}}>
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                            <SwipeableTextMobileStepper images={images} />
                            <p className='text-avenir-light text-500 text-lg'>
                                <i>Launching TAJIR pada tanggal 9 November 2019,  bertempat di Aula SD Mutiara Bunda Bandung,  dihadiri Founder TAJIR Bapak Dr. Ir. H. Kahar Mulyani, MM., dan Bapak Pristyanto dari Kementrian Koperasi dan UKM yang disaksikan oleh 40 pendiri.</i>
                            </p>
                        </Grid>
                    </Grid>
                    
                    {/* <p className='text-avenir-light text-500 text-lg'>
                        Pada tanggal 23 Januari 2020 Koperasi Muamalah Syariah sudah berbadan hukum, dengan terbitnya Akte Notaris No. 37 Tanggal 23 Januari 2020 dengan pengesahan Kementerian Hukum dan Ham No. AHU-0001852.AH.01.26  tanggal 24 Januari Tahun 2020.
                    </p> */}

                    <p className='text-avenir-light text-500 text-lg'>
                        Agar keberadaannya legal,  dipilih badan hukum yang memungkin untuk itu, akhirnya dipilih koperasi syariah sebagai badan hukum Badan Syirkah Muamalah Tajir ini.
                        Koperasi Syariah dengan nama Koperasi Masyarakat Muamalah Syariah ini berdiri pada tanggal 9 Nopember 2019 dan sudah berjalan sebagai Pra-Koperasi sambil berjalan mengurus perizinan. 
                        Akhirnya terbit terbit <b>Akte Notaris No. 37 Tanggal 23 Januari 2020</b> dengan pengesahan <b>Kementerian Hukum dan HAM No. AHU-0001852.AH.01.26 Tahun 2020 Tanggal 24 Januari 2020</b> sebagai badan hukum. 
                        Dan sudah terdaftar sebagai koperasi syariah di kementrian Koperasi dan UKM dengan nomor induk Koperasi (NIK) 3273150050088.
                    </p>

                    <SusunanOrganisasi />

                    <DaftarJadiAnggota />
                </section>
            </Container>
        </>
        
    )
}

export default TentangKami;