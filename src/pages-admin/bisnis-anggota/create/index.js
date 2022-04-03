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
      // image: [{image: ''}]
    }
  });

  // const { fields, append, remove } = useFieldArray({
  //   control, // control props comes from useForm (optional: if you are using FormContext)
  //   name: "image", // unique name for your Field Array,
  // });

  const onSubmit = params => {
    

    console.log("PARAMS : ", params);
    // mutateData(params);
    
    // const valueImages = params?.image?.map((item, i) => (item?.image[0]))
    // console.log("valueImages : ", valueImages)

    var formData = new FormData();
    formData.append("member_name", params?.member_name)
    formData.append("phone", params?.phone)
    formData.append("description", params?.description)
    // formData.append("image", valueImages) 
    formData.append("image", params?.image[0]) 
    mutateData(formData);

    // let test = {
    //   member_name :  params?.member_name,
    //   phone: params?.phone,
    //   description: params?.description,
    //   image :  valueImages
    // }

    // console.log("Test with multiple image : ", test)


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
               
              <Form register={register} errors={errors}>  
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
