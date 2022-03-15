import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { TextField, Grid, Button} from '@mui/material';

import SideNav from 'components/layout-admin/side-nav'
import HeaderAdmin from 'components/layout-admin/header'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

export default function AdminBaitulMaal() {

  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate();
  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HeaderAdmin />
      <SideNav />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h3" sx={{mt:-3}} className='text-center text-oswald'>
            Baitul Maal
        </Typography>


        <Grid container sx={{mt:3}}>          
          <Grid item md={5}>                     
              <Box sx={{mt:1}}>
                <TextField                            
                    label="Judul"       
                    fullWidth                             
                    // value={valueUsername}
                    // onChange={(e) => setValueUsername(e?.target?.value)}
                />
              </Box> 
              <Box sx={{mt:3}}>
                <TextField label="Upload Gambar" fullWidth />
              </Box> 

              <Box sx={{mt:3}}>
                <TextField label="Tanggal" fullWidth />
              </Box> 

              <Box sx={{mt:3}}>
                <TextField label="Deskripsi" fullWidth 
                
                  multiline
                  rows={4}                  
                />
              </Box>     

              <Box sx={{display: 'flex', justifyContent: 'end', mt: 3}}>
                <Button variant="outlined" color="primary" onClick={() => navigate(-1)}>
                  Cancel
                </Button>
                &nbsp;
                <Button variant="contained"  color="primary" onClick={() => enqueueSnackbar("Whoops something went wrong !", { variant: 'error'})} >
                  Simpan
                </Button>
              </Box>        
          </Grid>   
          <Grid item md={7}> </Grid>       
            
        </Grid>
      </Box>
    </Box>
  );
}
