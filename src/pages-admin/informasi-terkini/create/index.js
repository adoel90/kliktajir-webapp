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
import Form from '../components/form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default () => {

  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate();
  const { token } = useAuthentication();  

  const schema = yup
  .object()
  .shape({
    title: yup.string().required("Wajib di isi !"),
    date: yup.date().required("Wajib di isi !"),
    image: yup.mixed().nullable().notRequired()    
    .test("FILE_REQUIRED", "Wajib di isi !", (value) => {      
      return !value || value.length > 0;
    })
    .test('SUPPORTED_FILES', 'Hanya Gambar berformat .PNG & .JPG/JPEG yang di bolehkan', (value) => {

      if(value[0]?.type === "image/jpeg" || value[0]?.type === "image/jpg" || value[0]?.type === "image/png" ){
        return true 
      } else { 
        return false;
      }
      
    })
  })
  .required();


  const { register, handleSubmit, watch, formState: { errors }, getValues } = useForm({
    resolver: yupResolver(schema),
  });
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
              <Form register={register} errors={errors} >                  
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
