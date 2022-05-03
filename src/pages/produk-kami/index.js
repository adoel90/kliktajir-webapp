
import TextBigPicture from 'components/section/text-big-picture/index.js'
import { Container, Paper, Grid, Box } from '@mui/material'
import { Link } from 'react-router-dom';
import DaftarJadiAnggota from 'components/section/daftar-jadi-anggota/index.js'
import MainImage from 'assets/images/produk-kami/main.webp'

const ProdukKami = () => {

    return (


        <>            
            <TextBigPicture>
                Bisnis Dan <span className='text-secondary-main'>Produk</span>
            </TextBigPicture>
            <Container>
                <section id="daftar-anggota">

                    <Grid container >
                        <Grid item xs={12} sm={12} md={6} lg={6} textAlign="center" sx={{mx: 'auto'}}>
                            <p className='text-bold'>
                                Beberapa usaha yang akan ditangani oleh BSM TAJIR untuk membangun masyarakat berbasis syariah, diantaranya adalah usaha Propert, Travel, PPOB, Transportasi, Kesehatan, Kajian / Ibadah, Pembiayaan, Syirkah, Pengerjaan Proyek– proyek, Dll.
                            </p>
                            <img  src={MainImage} alt="MainImage" width="100%" height="auto" className='mt-5' />
                        </Grid>
                    </Grid>

                    <Grid container >
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                            <Paper elevation={1} sx={{p: 3, mt:7, backgroundColor: "common.softGrey"}}>      
                                <h1 className='text-oswald text-primary-main text-500 tracking-normal'>
                                    <b>PRODUK PEMBIAYAAN :</b>
                                </h1>

                                <p className='text-bold'>Simpanan Berjangka (Deposito) 6 bulan/12 bulan</p>                                

                                <ul className='list-none'>
                                    <li>
                                        <p>✓  Penempatan minimal 1.000.000</p>
                                    </li>
                                    <li>
                                        <p>Nisbah Bagi Hasil 45:55</p>
                                    </li>
                                    <li>
                                        <p>Penarikan Sesuai jangka waktu</p>
                                    </li>
                                    <li>
                                        <p>Akad Mudharabah, akan diinvestasikan secara otomatis dan bagi hasil dimasukkan ke dalam Rekening Anggota</p>
                                    </li>
                                    <li>
                                        <p>Riwayat penempatan dana dan bagi hasil yang didapat untuk setiap penempatan dana dapat dilihat</p>
                                    </li>
                                </ul>
                                
                                
                                <p className='text-bold'>Tabungan Qurban</p>
                                <ul className='list-none'>
                                    <li>
                                        <p>✓  Setoran Awal minimal 500.000</p>
                                    </li>
                                    <li>
                                        <p>✓  Setoran berikutnya min. 100.000</p>
                                    </li>
                                    <li>
                                        <p>Nisbah Bagi Hasil 45:55</p>
                                    </li>
                                    <li>
                                        <p>Penarikan H-7 Pelaksanaan Qurban​</p>
                                    </li>
                                    <li>
                                        <p>Akad Mudarabah, akan diinvestasikan secara otomatis dan bagi hasil dimasukkan ke dalam Tabungan TAJIR. </p>
                                    </li>                                                                 
                                </ul>

                                <p className='text-bold'>Tabungan Qurban</p>
                                <ul className='list-none'>
                                    <li>
                                        <p>✓  Setoran Awal minimal 100.000</p>
                                    </li>
                                    <li>
                                        <p>✓  Setoran berikutnya min. 10.000</p>
                                    </li>
                                    <li>
                                        <p>✓  Nisbah bagi hasil 45:55</p>
                                    </li>
                                    <li>
                                        <p>✓  Penarikan H-30 Pelaksanaan Umroh</p>
                                    </li>
                                    <li>
                                        <p>✓  Akad Mudarabah, akan diinvestasikan secara otomatis dan bagi hasil dimasukkan ke dalam Tabungan TAJIR.</p>
                                    </li>
                                </ul>

                                <p className='text-bold'>Tabungan TAJIR</p>
                                <p>
                                        Setiap anggota secara otomatis mempunyai tabungan TAJIR. 

                                        Lalu lintas keuangan anggota seperti pembayaran simpanan, penyertaan proyek, deposito, dan keperluan lainnya akan dicatat lebih dahulu dalam tabungan TAJIR.
                                </p>
                                <p>
                                    Setiap pencairan deposito, pengembalian penyertaan modal dalam proyek, bagi hasil dari investasi proyek, dan keuangan lainnya akan didebet ke dalam tabungan TAJIR.
                                </p>
                                <p>
                                    Simpanan dalam tabungan TAJIR dengan akad wadiah. Dan akan diinvestasikan atas permintaan anggota.
                                </p>
                                <p className='text-bold'>
                                    Simpanan Berjangka 6 bulan/12 bulan
                                </p>
                                <ul className='list-none'>
                                    <li>
                                        <p>✓  Penempatan minimal 1.000.000</p>
                                    </li>
                                    <li>
                                        <p>✓  Nisbah bagi hasil 45:55</p>
                                    </li>
                                    <li>
                                        <p>Penarikan Sesuai jangka waktu</p>
                                    </li>
                                    <li>
                                        <p>✓  Akad Mudarabah, akan diinvestasikan secara otomatis dan bagi hasil dimasukkan ke dalam Tabunan TAJIR. </p>
                                    </li>                                    
                                </ul>

                                <h1 className='text-oswald text-primary-main text-500 tracking-normal mt-5'>
                                    <b>PRODUK PEMBIAYAAN :</b>
                                </h1>
                                <p>
                                    Skema pembiayaan syariah yang tersedia saat ini adalah Syirkah Mudharabah dan Murabahah.  Setiap proyek pembiayaan yang dirilis, harus melalui proses review baik secara bisnis maupun syariah, oleh tim yang ahli di bidangnya, sehingga benar-benar pruden dan sesuai syariah. Pemberian fasilitas pembiayaan syariah hanya diperuntukkan bagi anggota.
                                </p>
                                <p className='text-bold'>
                                    Syarat Mengajukan Pembiayaan
                                </p>

                                <ol>
                                    <li>
                                        <p>Sudah menjadi 
                                            <Link to="/daftar-anggota">
                                                Anggota
                                            </Link>
                                        </p>
                                    </li>
                                    <li>
                                        <p>Mengisi formulir & Melengkapi Persyaratan :</p>
                                        <p>✓ Fc KTP & KK</p>
                                        <p>✓ Fc Rekening Bank 3 bln terakhir</p>
                                        <p>✓ RAB/SPK/PO</p>
                                        <p>✓ RAB/SPK/PO</p>
                                        <p>✓ Proyeksi Cashflow</p>
                                        <p>✓ Foto Lokasi Usaha</p>
                                        <p>✓ Legalitas Badan Usaha & Proyek</p>
                                    </li>
                                    <li>
                                        <p>Pembiayaan akan diproses setelah persyaratan lengkap</p>
                                    </li>
                                </ol>
                            </Paper>
                        </Grid>
                    </Grid>
                    <DaftarJadiAnggota linkToDaftarAnggota="https://forms.gle/5iWp3w4c2PkY2rCK8" />

                </section>
            </Container>
        </>
    )
}

export default ProdukKami