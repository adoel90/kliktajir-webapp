import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { TextField, Grid, Button} from '@mui/material';

import SideNav from 'components/layout-admin/side-nav'
import HeaderAdmin from 'components/layout-admin/header'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { useForm } from "react-hook-form";
import { useMutate } from 'hooks'
import { API_BISNIS_ANGGOTA } from 'constanta'
import { useAuthentication } from 'context/authentication';


export default () => {

  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate();
  const { token } = useAuthentication();  

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = params => {
    
    mutateData(params);

  }

  const [mutateData, isLoading] = useMutate(`${API_BISNIS_ANGGOTA}/add`);  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HeaderAdmin />
      <SideNav />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h3" sx={{mt:-3}} className='text-center text-oswald'>
            Bisnis Anggota
        </Typography>

        <Grid container sx={{mt:3}}>          
          <Grid item md={5}>   
            <form onSubmit={handleSubmit(onSubmit)}>                 
              <Box sx={{mt:1}}>
                <TextField                            
                    label="Nama Anggota"       
                    fullWidth    
                    {...register('member_name')}                                             
                />
              </Box> 
              <Box sx={{mt:3}}>
                <TextField label="No WhatsApp" fullWidth {...register('phone')}      />
              </Box> 

              <Box sx={{mt:3}}>
                <TextField label="Produk Anggota" fullWidth {...register('image')} />
              </Box> 

              <Box sx={{mt:3}}>
                <TextField 
                  label="Deskripsi Umum untuk All Produk" 
                  fullWidth                 
                  multiline
                  rows={4}                  
                  {...register('description')}
                />
              </Box>     

              <Box sx={{display: 'flex', justifyContent: 'end', mt: 3}}>
                <Button variant="outlined" color="primary" onClick={() => navigate(-1)}>
                  Cancel
                </Button>
                &nbsp;
                <Button
                 variant="contained"  
                 color="primary"  
                 type="submit"                  
                >

                  Simpan
                </Button>
              </Box>        
            </form>
          </Grid>   
          <Grid item md={7}> </Grid>       
            
        </Grid>
      </Box>
    </Box>
  );
}
