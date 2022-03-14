
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import ImageLogoTajir from 'assets/images/logo-tajir.png'

export default () => {

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Box sx={{display: 'flex'}}>
                    <h3 className='text-oswald text-500 tracking-tight'>Admin &nbsp;</h3>
                    <img src={ImageLogoTajir} height="31" width="75" className='mt-1-quarter' />
                </Box>
            </Toolbar>
        </AppBar>
    )
}