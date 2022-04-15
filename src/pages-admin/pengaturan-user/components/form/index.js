import { TextField, Box } from '@mui/material';

export default ({register, children, isEdit = false, errors}) => {

    return (
        <>
            <Box sx={{mt:1}}>
                <TextField                            
                    label="Nama Lengkap*"       
                    fullWidth    
                    {...register('full_name',{ required: true})}   
                    InputLabelProps = {
                        isEdit ? {shrink: true} : {}
                    }            
                    helperText={errors?.full_name?.type === "required" && "Wajib di isi !"} 
                    error={errors?.full_name?.type === "required" ? true : false}                                  
                />
            </Box> 
            <Box sx={{mt:1}}>
                <TextField                            
                    label="Username Login*"       
                    fullWidth    
                    {...register('username',{ required: true})}   
                    InputLabelProps = {
                        isEdit ? {shrink: true} : {}
                    }     
                    helperText={errors?.username?.type === "required" && "Wajib di isi !"} 
                    error={errors?.username?.type === "required" ? true : false}                                         
                />
            </Box>                                 

            <Box sx={{mt:3}}>
                <TextField 
                    type="password"
                    label="Password*"
                    fullWidth   
                    disabled={isEdit ? true : false}                                                      
                    {...register('password', { required: true})}
                    InputLabelProps = {
                        isEdit ? {shrink: true} : {}
                    }        
                    helperText={errors?.password?.type === "required" && "Wajib di isi !"} 
                    error={errors?.password?.type === "required" ? true : false}                       
                />
            </Box>    
            {
                isEdit && (
                    
                    <Box sx={{mt:3}}>
                        <TextField 
                            type="password"
                            label="Password Baru"
                            fullWidth                                                                                   
                            {...register('password_new', { required: true})}
                            InputLabelProps = {
                                isEdit ? {shrink: true} : {}
                            }  
                            helperText={errors?.password_new?.type === "required" && "Wajib di isi !"} 
                            error={errors?.password_new?.type === "required" ? true : false}       
                        />
                    </Box>    
                )
            }         
            {children}
        </>
    )
}