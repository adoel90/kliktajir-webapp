import { TextField, Box } from '@mui/material';

export default ({register, children, isEdit = false, errors}) => {    

    return (
        <>
            <Box sx={{mt:1}}>
                <TextField                            
                    label="Kode Akses *"       
                    fullWidth    
                    {...register('phone_number',{ required: true})}   
                    InputLabelProps = {
                        isEdit ? {shrink: true} : {}
                    }            
                    helperText={errors?.phone_number?.type === "required" && "Wajib di isi !"} 
                    error={errors?.phone_number?.type === "required" ? true : false}                                  
                />
            </Box> 
            <Box sx={{mt:1}}>
                <TextField                            
                    label="Saldo Rekening Saat ini *"       
                    fullWidth    
                    {...register('saldo',{ required: true})}   
                    InputLabelProps = {
                        isEdit ? {shrink: true} : {}
                    }     
                    helperText={errors?.ussaldoername?.type === "required" && "Wajib di isi !"} 
                    error={errors?.saldo?.type === "required" ? true : false}                                         
                />
            </Box>                                 
                 
            {children}
        </>
    )
}