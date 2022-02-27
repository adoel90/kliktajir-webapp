import React from 'react'
import { Grid, Box } from '@mui/material'
import ImageSectionBerdirinyaTajir from '../../assets/images/tentang-kami/img-main-section-berdirinya-tajir.webp'

const TentangKami = () => {

    return (

        <>
            <section id="visi-misi">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        <h1>
                            Visi
                        </h1>
                        <p>
                            Terwujudnya Ekonomi Umat Yang Kokoh & Berkah.
                        </p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        <h1>
                            Misi 
                        </h1>
                        <ul>
                            <li>✓ Membangun Ekonomi Berbasis Syariah </li>
                            <li>✓ Memperluas kemitraan Bisnis di semua sektor </li>
                            <li>✓ Mensejahterakan anggota  dan Masyarakat </li>
                            <li>✓ Mengelola Investasi umat dengan Profesional dan Aman </li>
                        </ul>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} >
                        <h1>
                            Carousel Image Slider
                        </h1>
                        <p>
                            Mutiara Bunda Bandung,  dihadiri Founder TAJIR Bapak Dr. Ir. H. Kahar Mulyani, MM., dan Bapak Pristyanto dari Kementrian Koperasi dan UKM yang disaksikan oleh 40 pendiri.
                        </p>
                    </Grid>
                </Grid>
            </section>

            <section id="berdirinya-tajir">
                <h3>
                    Berdirinya TAJIR
                </h3>
                <p>
                    Berawal dari kajian-kajian yang diselenggarakan di beberapa tempat tentang riba, syirkah serta permasalahan ekonomi syariah lainnya, diskusi dalam Group WhatsApp Masyarakat Muamalah Syariah (MMS), akhirnya berkembang menjadi pembentukan sebuah Badan Syirkah Muamalah (BSM).
                </p>
                <p>
                    Hasil dari kajian ini, banyak peserta yang sadar akan bahaya dan dosa-dosa Riba sehingga ada yang berhenti bekerja dan meninggalkan pekerjaan ribawi yang selama ini digelutinya. Di sisi lain, ada juga yang memiliki sejumlah uang tapi takut menyimpan karena Riba. Berbagai fenomena yang terjadi di masyarakat ini menyebabkan perlunya sebuah lembaga yang dapat menjadi solusi agar kita semua dapat melakukan kegiatan ekonomi secara syar’i. 
                </p>

                <figure>
                    <img src={ImageSectionBerdirinyaTajir} width="100%" height="auto" />
                    <figcaption>
                        Acara kajian Masyarakat Muamalah Syariah di Bengkulu
                    </figcaption>
                </figure>

                <p>
                    Badan Syirkah Muamalah adalah tempat berkumpulnya ummat untuk melakukan Syirkah (kerjasama) antara yang satu dengan yang lain. Ada yang memerlukan modal bekerja sama dengan yang punya modal, ada yang memiliki uang tetapi memilih untuk menyimpan uangnya yang sesuai dengan syariah, ada yang memiliki proyek bekerjasama dengan yang ahli pada bidang yang diinginkan. Dalam wadah ini insya Allah menggunakan akad sesuai dengan syariah,  sepakat melakukan bisnis dengan tujuan mencari keuntungan yang sesuai syariah islam, yang terhindar dari antara lain Maysir (untung-untungan), Gharar (Ketidakjelasan), Riba dan Haram.
                </p>

                <h1>
                    Carousel Image Slider
                </h1>

                <p>                        
                    Maka pada tanggal 9 Nopember 2019 bertempat di Bandung dilakukan launching Badan Syirkah Muamalah ini dengan nama Badan Syirkah Muamalah TAJIR atau disingkat dengan BSM TAJIR.
                </p>

                <p>                
                    Maka pada tanggal 9 Nopember 2019 bertempat di Bandung dilakukan launching Badan Syirkah Muamalah ini dengan nama Badan Syirkah Muamalah TAJIR atau disingkat dengan BSM TAJIR.
                </p>

                <p>
                    Pada tanggal 23 Januari 2020 Koperasi Muamalah Syariah sudah berbadan hukum, dengan terbitnya Akte Notaris No. 37 Tanggal 23 Januari 2020 dengan pengesahan Kementerian Hukum dan Ham No. AHU-0001852.AH.01.26  tanggal 24 Januari Tahun 2020.
                </p>
                
                <h3>
                    <b>SUSUNAN ORGANISASI</b>
                </h3>

                <h5>
                    <b>Penasehat:</b>
                </h5>
                <p>
                    Moch. Untung Prayitno
                </p>

                <h5>
                    <b>Dewan Pengawas Syariah :</b>
                </h5>
                <p>                    
                    Ketua       : Dr. Ir. H. Kahar Mulyani, MM.
                </p>

                <h5>
                    <b>Dewan Pengawas :</b>
                </h5>
                <ul>
                    <li><p>Ketua      : Eka Aulia </p></li>
                    <li><p>Anggota : Darman Usman, SE., Ak., CA., CPA.</p></li>
                    <li><p>Prof. Dr. Enjang Akmad Juanda, M.Pd., MT.</p></li>
                </ul>
                <h5>
                    <b>Dewan Pengurus :</b>
                </h5>
                <ul>
                    <li>Ketua            :  Ratus Sewu, SE.</li>
                    <li>Sekretaris     :  Heri Heryadi, SE.</li>
                    <li>Bendahara   :  Budi Sulistyo, SE.</li>
                </ul>
            </section>
        </>
        
    )
}

export default TentangKami;