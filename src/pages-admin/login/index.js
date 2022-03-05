import { Paper, Box, Grid, TextField, Button} from '@mui/material'
import ImageLogoTajir from 'assets/images/logo-tajir.png'

const Login = () => {


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
                        <Box sx={{display: 'flex'}}>
                            <h3 className='text-oswald text-500 tracking-tight'>Admin</h3>
                            <img src={ImageLogoTajir} height="31" width="75" className='mt-1-half' />
                        </Box>

                        <Box sx={{mt:1}}>
                            <TextField                            
                                label="Username"
                                defaultValue=""
                            />
                        </Box> 
                        <Box sx={{mt:3}}>
                            <TextField                            
                                label="Password"
                                defaultValue=""
                                type="password"
                            />
                        </Box>    

                        <Button className='text-avenir-light text-500' variant="contained" color="primary" size="large" fullWidth sx={{mt:3}}>
                            Login
                        </Button>
                    </Paper>
                </Grid>   
            
            </Grid> 
        </>
    )
}

export default Login;