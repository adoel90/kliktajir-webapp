import { useState } from 'react'
import { Paper, Box, Grid, TextField, Button} from '@mui/material'
import ImageLogoTajir from 'assets/images/logo-tajir.png'
import Axios from 'utilities/axios-config/index';
import { useMutation } from 'react-query';
import { API_LOGIN } from 'constanta/endpoint/login'
import {  useSnackbar } from 'notistack';


const Login = () => {

    const { enqueueSnackbar } = useSnackbar()

    const [valueUsername, setValueUsername] = useState('')
    const [valuePassword, setValuePassword] = useState('')

    const handleSubmit = (e) => {

        e.preventDefault();

        let data = {
            username: valueUsername,
            password: valuePassword,
        };
        
        mutateLogin(data);        
      

    }

    const { mutate: mutateLogin, isLoading } = useMutation(data => Axios.post(`${API_LOGIN}`, data), {

        
        
        onSuccess: response => {

            console.log("RESPONSE : ", response)
            if (response.data !== null && response.data !== undefined) {
                localStorage.setItem('token', response?.data?.result?.token);                
                enqueueSnackbar(response?.data?.message, { variant: 'success'})
                
            };
              
            window.location.reload();
        },
    
        onError: (err, variables, onMutateValue) => {
          console.log('Err : ', err.response);
          if (err?.response) {
            if (err?.response?.data) {
              if (err?.response?.data.password) {
                enqueueSnackbar(err?.response?.data?.password[0], { variant: 'error'})                
              };
              if (err?.response?.data?.username) {
                enqueueSnackbar(err?.response?.data?.username[0], { variant: 'error'})                
              };

            }
          } else {            
            enqueueSnackbar('Whoops, somethin went wrong !', { variant: 'error'})                

          }
        },
      });
    
    

    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '100vh' }}
            >

                <Grid item md={3}>                        
                    <Paper elevation={2} sx={{pt:3, pb: 7, pl: 7, pr: 7 }}>
                        <form >
                            <Box sx={{display: 'flex'}}>
                                <h3 className='text-oswald text-500 tracking-tight'>Admin</h3>
                                <img src={ImageLogoTajir} height="31" width="75" className='mt-1-half' />
                            </Box>

                            <Box sx={{mt:1}}>
                                <TextField                            
                                    label="Username"                                    
                                    value={valueUsername}
                                    onChange={(e) => setValueUsername(e?.target?.value)}
                                />
                            </Box> 
                            <Box sx={{mt:3}}>
                                <TextField                            
                                    label="Password"
                                    value={valuePassword}                                                                    
                                    type="password"

                                    onChange={(e) => setValuePassword(e?.target?.value)}
                                />
                            </Box>    

                            <Button onClick={handleSubmit} className='text-avenir-light text-500' variant="contained" color="primary" size="large" fullWidth sx={{mt:3}}>
                                Login
                            </Button>
                        </form>
                    </Paper>
                </Grid>   
            
            </Grid> 
        </>
    )
}

export default Login;