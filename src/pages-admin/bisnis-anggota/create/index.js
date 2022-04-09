import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { TextField, Grid, Button, Stack, Fab, IconButton } from '@mui/material';

import SideNav from 'components/layout-admin/side-nav'
import HeaderAdmin from 'components/layout-admin/header'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { useForm, useFieldArray } from "react-hook-form";
import { useMutate } from 'hooks'
import { API_BISNIS_ANGGOTA } from 'constanta'
import { useAuthentication } from 'context/authentication';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Form from '../components/form'

export default () => {

  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate();
  const { token } = useAuthentication();  

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      image: [{image: ''}]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control, 
    name: "image", 
  });

  const onSubmit = params => {

    var formData = new FormData();
    formData.append("member_name", params?.member_name)
    formData.append("phone", params?.phone)
    formData.append("description", params?.description)
    params?.image?.map((item, i) => (formData.append(`image${i !== 0 ? i : ''}`, item?.image[0])))
    mutateData(formData);
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
               
              <Form register={register} errors={errors} fields={fields} append={append} remove={remove}>  
                <Box sx={{display: 'flex', justifyContent: 'end', mt: 3}}>
                  <Button variant="outlined" color="primary" onClick={() => navigate(-1)}>
                    Cancel
                  </Button>
                  &nbsp;
                  <Button
                    variant="contained"  
                    color="primary"  
                    type="submit"         
                    disabled={isLoading ? true : false}         
                  >

                    {isLoading ? 'Loading...' : 'Simpan'}
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
