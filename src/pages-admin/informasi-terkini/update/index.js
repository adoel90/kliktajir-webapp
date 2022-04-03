import React, { useEffect, useMemo } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { Skeleton, Grid, Button } from '@mui/material';

import SideNav from 'components/layout-admin/side-nav'
import HeaderAdmin from 'components/layout-admin/header'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { useForm } from "react-hook-form";
import { useMutate } from 'hooks'
import { API_INFORMASI_TERKINI } from 'constanta'
import { useAuthentication } from 'context/authentication';
import { useQueryData } from 'hooks';
import Form from '../components/form'

export default () => {

  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate();
  const { token } = useAuthentication();  

  const queryParam = useParams();  

  const { isLoading: isLoadingDetail, isFetching, error, data } = useQueryData(`${API_INFORMASI_TERKINI}/detail/${queryParam?.id}`); 

  const { register, handleSubmit, watch, formState: { errors }, setValue, reset } = useForm({

    defaultValues: {} 
  });


  useEffect(() => {
    
    if(data){      

      reset(data)
    };

  },[data])

  const onSubmit = params => {
    

    
    var formData = new FormData();
    formData.append('id', queryParam?.id)
    formData.append("title", params?.title)
    formData.append("image", params?.image[0])
    formData.append("date", params?.date)
    formData.append("description", params?.description)
    mutateData(formData);
    

  };

  const [mutateData, isLoading] = useMutate(`${API_INFORMASI_TERKINI}/update`);
  
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
            {isLoadingDetail && <Skeleton variant="text" />}
            <form onSubmit={handleSubmit(onSubmit)}>                 
              <Form register={register} isEdit={true}>                          
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
                    {isLoading ? "Loading..." : "Simpan"}
                  </Button>
                </Box>  
              </Form>
            </form>
          </Grid>   
          <Grid item md={7}> </Grid>       
            
        </Grid>
      </Box>
    </Box>
  );
}
