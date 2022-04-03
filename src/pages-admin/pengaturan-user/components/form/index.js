import { TextField, Box } from '@mui/material';

export default ({register, children, isEdit = false}) => {

    return (
        <>
            <Box sx={{mt:1}}>
                <TextField                            
                    label="Nama Lengkap"       
                    fullWidth    
                    {...register('full_name')}   
                    InputLabelProps = {{
                        shrink: isEdit
                    }}                                          
                />
            </Box> 
            <Box sx={{mt:1}}>
                <TextField                            
                    label="Username Login"       
                    fullWidth    
                    {...register('username')}   
                    InputLabelProps = {{
                        shrink: isEdit
                    }}                                          
                />
            </Box> 
                                

            <Box sx={{mt:3}}>
                <TextField 
                    type="password"
                    label={`Password ${isEdit ? "Baru" : ""}`}
                    fullWidth                                                         
                    {...register('password')}
                    InputLabelProps = {{
                        shrink: isEdit
                    }}  
                />
            </Box>             
            {children}
        </>
    )
}