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
import { API_INFORMASI_TERKINI } from 'constanta'
import { useAuthentication } from 'context/authentication';


export default () => {

  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate();
  const { token } = useAuthentication();  


  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = params => {
    
    var formData = new FormData();
    formData.append("title", params?.title)
    formData.append("image", params?.image[0])
    formData.append("date", params?.date)    
    mutateData(formData);
    // mutateData(params);

  }

  const [mutateData, isLoading] = useMutate(`${API_INFORMASI_TERKINI}/add`);
  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HeaderAdmin />
      <SideNav />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h3" sx={{mt:-3}} className='text-center text-oswald'>
            Informasi Terkini
        </Typography>


        <Grid container sx={{mt:3}}>          
          <Grid item md={5}>   
            <form onSubmit={handleSubmit(onSubmit)}>                 
              <Box sx={{mt:1}}>
                <TextField                            
                    label="Judul Informasi"       
                    fullWidth    
                    {...register('title')}                                             
                />
              </Box>              

              <Box sx={{mt:3}}>                                
                <TextField label="Tanggal" type="date"  fullWidth {...register('date')} 
                  InputLabelProps={{
                      shrink: true,
                  }}
                />            
              </Box> 

              <Box sx={{mt:3}}>
                <TextField label="Upload Gambar" type="file" fullWidth {...register('image')}      
                    InputLabelProps={{
                        shrink: true,
                    }}
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
                  // onClick={() => enqueueSnackbar("Whoops something went wrong !", { variant: 'error'})}
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
