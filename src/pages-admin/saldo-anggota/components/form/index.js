import { TextField, Box } from '@mui/material';

export default ({register, children, isEdit = false, errors}) => {    

    return (
        <>
            <Box sx={{mt:1}}>
                <TextField                            
                    label="Kode Akses *"       
                    fullWidth    
                    {...register('phone_number',{ 
                        required: true,
                        maxLength: {
                            value: 27,
                            message: 'Maximum Kode Akses 27 Karakter'
                        }  
                    })}   
                    InputLabelProps = {
                        isEdit ? {shrink: true} : {}
                    }            
                    helperText={errors?.phone_number?.message} 
                    error={
                        errors?.phone_number?.type === "required" ||
                        errors?.phone_number?.type === "maxLength"
                        ? true : false}                                  
                />
            </Box> 
            <Box sx={{mt:1}}>
                <TextField                            
                    label="Saldo Idle *"       
                    fullWidth    
                    {...register('saldo_idle',{ 
                        required: true,
                                              
                    })}   
                    InputLabelProps = {
                        isEdit ? {shrink: true} : {}
                    }     
                    helperText={errors?.saldo_idle?.type === "required" && "Wajib di isi !"} 
                    error={ errors?.saldo_idle?.type === "required" ? true : false }                                         
                />                
            </Box>  
            <Box sx={{mt:1}}>
                <TextField                            
                    label="Saldo Di Tempatkan *"       
                    fullWidth    
                    {...register('saldo_ditempatkan',{ 
                        required: true,
                                              
                    })}   
                    InputLabelProps = {
                        isEdit ? {shrink: true} : {}
                    }     
                    helperText={errors?.saldo_ditempatkan?.type === "required" && "Wajib di isi !"} 
                    error={ errors?.saldo_ditempatkan?.type === "required" ? true : false }                                         
                />                
            </Box>  
            <Box sx={{mt:1}}>
                <TextField                            
                    label="Total Saldo*"       
                    fullWidth    
                    {...register('saldo',{ required: true})}   
                    InputLabelProps = {
                        isEdit ? {shrink: true} : {}
                    }     
                    helperText={errors?.saldo?.type === "required" && "Wajib di isi !"} 
                    error={errors?.saldo?.type === "required" 
                    
                    ? true : false}                                         
                />
            </Box>                                 
                                                
                 
            {children}
        </>
    )
}
