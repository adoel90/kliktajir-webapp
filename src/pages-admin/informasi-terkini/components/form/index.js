import { TextField, Box } from '@mui/material';


export default ({register, children, isEdit = false, errors}) => {

    return (
        <>
            <Box sx={{mt:1}}>
                <TextField                            
                    label="Judul Informasi"       
                    fullWidth    
                    {...register('title',{ required: true})}   
                    InputLabelProps = {
                        isEdit ? { shrink: true } : {}
                    }               
                    helperText={errors?.title?.type === "required" && "Wajib di isi !"} 
                    error={errors?.title?.type === "required" ? true : false}                                 
                />
            </Box>              

            <Box sx={{mt:3}}>                                
                <TextField label="Tanggal" type="date"  fullWidth {...register('date',{ required: true})} 
                    InputLabelProps={{
                        shrink: true,
                    }}
                    helperText={errors?.date?.type === "required" && "Wajib di isi !"} 
                    error={errors?.date?.type === "required" ? true : false}    
                />            
            </Box> 

            <Box sx={{mt:3}}>
                <TextField label="Upload Gambar" type="file" fullWidth {...register('image',{ required: true})}      
                    InputLabelProps={{
                        shrink: true,
                    }}
                    helperText={errors?.image?.type === "required" && "Wajib di isi !"} 
                    error={errors?.image?.type === "required" ? true : false}  
                />
            </Box> 
            {children}
        </>
    )
}

