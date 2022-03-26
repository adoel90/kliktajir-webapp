
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import ImageLogoTajir from 'assets/images/logo-tajir.png'

export default () => {

    const handleLogout = () => {

        localStorage.clear();
        window.location.reload();
    }

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Box sx={{display: 'flex', width:'100%'}}>
                    <h3 className='text-oswald text-500 tracking-tight'>Admin &nbsp;</h3>
                    <Box sx={{flexGrow: 1}}>
                        <img src={ImageLogoTajir} height="31" width="75" className='mt-1-quarter' />
                    </Box>
                    <Box mt={2.5} sx={{cursor: 'pointer'}} onClick={handleLogout}>
                        Log-out
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}