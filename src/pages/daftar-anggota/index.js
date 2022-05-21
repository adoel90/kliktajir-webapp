import { Container, Grid, Paper  } from '@mui/material'
import TextBigPicture from 'components/section/text-big-picture/index.js'
import DaftarJadiAnggota from 'components/section/daftar-jadi-anggota/index.js'

const DaftarAnggota = () => {

    return (


        <>
            <TextBigPicture>
                Daftar <span className='text-secondary-main'>Anggota</span>
            </TextBigPicture>
            <Container>
                <section id="daftar-anggota">
                    <Grid container >
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                        <Paper elevation={1} sx={{p: 3, mt:7, backgroundColor: "common.softGrey"}}>      
                            <h1 className='text-oswald text-primary-main text-500 tracking-normal'>
                                <b>SYARAT MENJADI ANGGOTA</b>
                            </h1>
                            <ol>                                     
                                <li>
                                    <p>Mengisi <a href="https://forms.gle/5iWp3w4c2PkY2rCK8" target="_blank">formulir secara online</a> </p>
                                    <p>Membayar Penyertaan Modal  :</p>
                                    <p>✓ Pokok Rp. 500.000 (sekali saja)</p>
                                    <p>✓ Wajib Rp.  50.000/bln (dibayar per thn)</p>
                                    <p>✓ Admininstrasi Rp. 50.000</p>                                             
                                </li>
                                <li>
                                    <p>Mengisi Form Akad Penyertaan Modal</p>
                                </li>
                                <li>
                                    <p>Melampirkan foto copy KTP dan Pas Foto </p>
                                </li>

                                <li>
                                    <p>Simpanan Pokok dan Wajib dikembalikan pada saat berhenti menjadi anggota</p>
                                </li>                                
                            </ol>

                            <h1 className='text-oswald text-primary-main text-500 tracking-normal'>
                                <b>MANFAAT MENJADI ANGGOTA :</b>
                            </h1>
                            <ul className='list-none'>
                                <li>
                                    <p>✓  Dapat mengajukan pembiayaan Proyek</p>
                                </li>
                                <li>
                                    <p>✓  Dapat Mangakses database produk anggota lain</p>
                                </li>
                                <li>
                                    <p>✓  Melakukan Usaha sesuai syariah islam & Insya Allah bebas Riba</p>
                                </li>
                                <li>
                                    <p>✓  Memperoleh kesempatan yang luas untuk berbisnis dengan anggota lain</p>
                                </li>
                            </ul>
                        </Paper>

                        </Grid>
                    </Grid>

                    <DaftarJadiAnggota linkToDaftarAnggota="https://forms.gle/5iWp3w4c2PkY2rCK8" />
                </section>
            </Container>           
        </>
    )
}

export default DaftarAnggota