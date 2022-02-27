import { Container, Grid, Box } from '@mui/material'

const Footer = () => {

    return (
        <footer>
            <Grid container>
                <Grid item xs={12} sm={12} md={3} lg={3} >
                <h1>
                    LOGO TAJIR 
                </h1> 
                </Grid>
                <Grid item xs={12} sm={12} md={2} lg={2} >
                <p>
                    <b>Tajir</b>
                </p>
                <ul>
                    <li>Visi Misi</li>
                    <li>Sejarah</li>
                    <li>Struktur Organisasi</li>
                </ul>
                </Grid>

                <Grid item xs={12} sm={12} md={2} lg={2} >
                <p>
                    <b>Learn More </b>
                </p>
                <ul>
                    <li>Bisnis Anggota</li>
                    <li>Baitul Maal</li>
                    <li>Informasi Terkini</li>
                </ul>
                </Grid>

                <Grid item xs={12} sm={12} md={2} lg={2} >
                <p>
                    <b>Support</b>
                </p>
                <ul>
                    <li>FAQ</li>
                    <li>Help</li>            
                </ul>
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3} >
                <h1>
                    Map Location
                </h1>
                </Grid>
            </Grid>


            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                <p>
                    © Kliktajir. {new Date().getFullYear()}. All Right Reserved
                </p>
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3} >
                <p>
                    Playstore
                </p>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} >
                <figure>
                    <img src="#" alt="" />
                    <figcaption>
                    <p>
                        Ikuti kami di FB
                    </p>          
                    </figcaption>
                </figure>
                </Grid>

            </Grid>
        </footer>
    )
}

export default Footer;