import { TextField, Box } from '@mui/material';

export default ({register, children, isEdit = false}) => {

    return (
        <>
            <Box sx={{mt:1}}>
                <TextField                            
                    label="Nama Lengkap"       
                    fullWidth    
                    {...register('full_name')}   
                    InputLabelProps = {
                        isEdit ? {shrink: true} : {}
                    }                                          
                />
            </Box> 
            <Box sx={{mt:1}}>
                <TextField                            
                    label="Username Login"       
                    fullWidth    
                    {...register('username')}   
                    InputLabelProps = {
                        isEdit ? {shrink: true} : {}
                    }                                             
                />
            </Box> 
                                

            <Box sx={{mt:3}}>
                <TextField 
                    type="password"
                    label="Password"
                    fullWidth   
                    disabled={isEdit ? true : false}                                                      
                    {...register('password')}
                    InputLabelProps = {
                        isEdit ? {shrink: true} : {}
                    }     
                />
            </Box>    
            {
                isEdit && (
                    
                    <Box sx={{mt:3}}>
                        <TextField 
                            type="password"
                            label="Password Baru"
                            fullWidth                                                                                   
                            {...register('password_new')}
                            InputLabelProps = {
                                isEdit ? {shrink: true} : {}
                            }     
                        />
                    </Box>    
                )
            }         
            {children}
        </>
    )
}