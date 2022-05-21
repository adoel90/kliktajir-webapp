
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

                                <section id="produk-simpanan">    
                                    <h1 className='text-oswald text-primary-main text-500 tracking-normal'>
                                        <b>PRODUK SIMPANAN :</b>
                                    </h1>

                                    <p className='text-bold'>Simpanan Berjangka (Deposito) 6 bulan/12 bulan</p>                                

                                    <ul className='list-none'>
                                        <li>
                                            <p>✓  Penempatan minimal 1.000.000</p>
                                        </li>
                                        <li>
                                            <p>✓ Nisbah Bagi Hasil 45:55</p>
                                        </li>
                                        <li>
                                            <p>✓ Penarikan Sesuai jangka waktu</p>
                                        </li>
                                        <li>
                                            <p>✓ Akad Mudharabah, akan diinvestasikan secara otomatis dan bagi hasil dimasukkan ke dalam Rekening Anggota</p>
                                        </li>
                                        <li>
                                            <p>✓ Riwayat penempatan dana dan bagi hasil yang didapat untuk setiap penempatan dana dapat dilihat</p>
                                        </li>
                                    </ul>
                                </section>
                                
                                <section id="tabungan-kurban">    
                                    <p className='text-bold'>Tabungan Qurban</p>
                                    <ul className='list-none'>
                                        <li>
                                            <p>✓  Setoran Awal minimal 500.000</p>
                                        </li>
                                        <li>
                                            <p>✓  Setoran berikutnya min. 100.000</p>
                                        </li>
                                        <li>
                                            <p>✓ Nisbah Bagi Hasil 45:55</p>
                                        </li>
                                        <li>
                                            <p>✓ Penarikan H-7 Pelaksanaan Qurban​</p>
                                        </li>
                                        <li>
                                            <p>✓ Akad Mudarabah, akan diinvestasikan secara otomatis dan bagi hasil dimasukkan ke dalam Tabungan TAJIR. </p>
                                        </li>  
                                        <li>
                                            <p>✓ Riwayat penempatan dana dan bagi hasil yang didapat untuk setiap penempatan dana dapat dilihat</p>
                                        </li>                                                               
                                    </ul>
                                </section>

                                <section id="tabungan-umrah">    
                                    <p className='text-bold mt-3'>Tabungan Umroh</p>
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
                                        <li>
                                            <p>✓ Riwayat penempatan dana dan bagi hasil yang didapat untuk setiap penempatan dana dapat dilihat</p>
                                        </li>
                                    </ul>
                                </section>

                                <section id="rekening-anggota">   
                                    <p className='text-bold mt-3'>REKENING ANGGOTA</p>
                                    <p>
                                        Setiap anggota mempunyai rekening virtual yang dinamakan REKENING ANGGOTA atau akun anggota.
                                    </p>
                                    <p>
                                        REKENING ANGGOTA dipergunakan sebagai tempat penampungan dana sebelum ditempatkan pada deposito, tabungan umroh, tabungan qurban dan produk lainnya serta untuk penyertaan dalam kegiatan  pendanaan proyek
                                    </p>
                                    <p>
                                        Semua setoran anggota akan masuk kedalam rekening virtual ini, termasuk untuk pembayaran simpanan wajib dan atau wajib khusus
                                    </p>
                                    <p>
                                        Semua bagi hasil dari deposito, tabungan umroh dan tabungan Qurban dimasukan kedalam REKENING ANGGOTA
                                    </p>
                                    <p>
                                        Akad <i>Wadiah</i> sehingga dianggap sebagai titipan 
                                    </p> 
                                    <p>
                                        Tidak secara otomatis diikut sertakan dalam pendanaan proyek, akan diikut sertakan dalam pendanaan proyek atas permintaan anggota
                                    </p>                               
                                </section>

                                <h1 className='text-oswald text-primary-main text-500 tracking-normal mt-5'>
                                    <b>PRODUK PEMBIAYAAN :</b>
                                </h1>
                                <p>
                                    Skema pembiayaan syariah yang tersedia saat ini adalah <i>Syirkah Mudharabah dan Murabahah</i>.  Setiap proyek pembiayaan yang dirilis, harus melalui proses review baik secara bisnis maupun syariah, oleh tim yang ahli di bidangnya, sehingga benar-benar pruden dan sesuai syariah. Pemberian fasilitas pembiayaan syariah hanya diperuntukkan bagi anggota.
                                </p>
                                
                                <section id="syarat-mengajukan-pembiayaan">

                                    <p className='text-bold'>
                                        Syarat Mengajukan Pembiayaan
                                    </p>

                                    <ol>
                                        <li>
                                            <p>Sudah menjadi &nbsp;
                                                <Link to="/daftar-anggota">
                                                    Anggota
                                                </Link>
                                            </p>
                                        </li>
                                        <li>
                                            <p>Mengisi formulir secara online </p>
                                            <p>Melengkapi Persyaratan :</p>
                                            <p>✓ Fc KTP & KK</p>
                                            <p>✓ Fc Rekening Bank 3 bln terakhir</p>
                                            <p>✓ RAB/SPK/PO</p>
                                            <p>✓ Lap. Keuangan 3 bln terakhir</p>
                                            <p>✓ Proyeksi Cashflow</p>
                                            <p>✓ Foto Lokasi Usaha</p>
                                            <p>✓ Legalitas Badan Usaha & Proyek</p>
                                        </li>
                                        <li>
                                            <p>Pembiayaan akan diproses setelah persyaratan lengkap</p>
                                        </li>
                                    </ol>
                                </section>

                                <section id="syarat-menjadi-anggota">
                                    <p className='text-bold mt-3'>
                                        Syarat Menjadi Anggota :
                                    </p>
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
                                </section>
                                
                                <section id="manfaat-menjadi-anggota">
                                    <p className='text-bold mt-3'>
                                        Manfaat Menjadi Anggota :
                                    </p>
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

                                </section>
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