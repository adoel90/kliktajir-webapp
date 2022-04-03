import { TextField, Box } from '@mui/material';


export default ({register, children, isEdit = false}) => {

    return (
        <>
            <Box sx={{mt:1}}>
                <TextField                            
                    label="Judul Informasi"       
                    fullWidth    
                    {...register('title')}   
                    InputLabelProps = {
                        isEdit ? { shrink: true } : {}
                    }                                            
                />
            </Box>              

            <Box sx={{mt:3}}>                                
                <TextField label="Tanggal" type="date"  fullWidth {...register('date')} 
                    InputLabelProps={{
                        shrink: true,
                    }}
                />            
            </Box> 

            <Box sx={{mt:3}}>
                <TextField label="Upload Gambar" type="file" fullWidth {...register('image')}      
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Box> 
            {children}
        </>
    )
}

