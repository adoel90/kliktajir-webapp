import { TextField, Box, Stack, Tooltip, IconButton } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';


export default ({register, children, isEdit = false, errors, imageUrl =''}) => {

    return (
        <>
            <Box sx={{mt:1}}>
                <TextField                            
                    label="Judul Informasi *"       
                    fullWidth    
                    {
                        ...register('title',
                            { 
                                required: true,
                            //   validate: {
                            //         lessThan10MB: (files) => files[0]?.size < 10000000 || "Max 10MB",
                            //         acceptedFormats: (files) =>
                            //         ["image/jpeg", "image/png", "image/gif"].includes(files[0]?.type) ||
                            //         "Only PNG, JPEG e GIF",
                            //     },
                            }
                        )
                    }   
                    InputLabelProps = {
                        isEdit ? { shrink: true } : {}
                    }               
                    helperText={errors?.title?.message}                    
                    error={errors?.title?.type === "required" ? true : false}                                 
                />

                {console.log("errors : ", errors)}
                
            </Box>              

            <Box sx={{mt:3}}>                                
                <TextField label="Tanggal *" type="date"  fullWidth {...register('date',{ required: true})} 
                    InputLabelProps={{
                        shrink: true,
                    }}                    
                    helperText={errors?.date?.message}          
                    error={errors?.date?.type === "required" || errors?.date?.type === "typeError" ? true : false}    
                />            
            </Box> 

            <Box sx={{mt:3}}>
                <Stack direction="row">
                    <TextField label="Upload Gambar *" type="file" fullWidth {...register('image',{ required: isEdit ? false : true})}      
                        InputLabelProps={{
                            shrink: true,
                        }}                        
                        helperText={errors?.image?.message}          
                        error={errors?.image?.type === "FILE_REQUIRED" || errors?.image?.type === "SUPPORTED_FILES" ? true : false}  
                    />
                    {isEdit && (

                        <Tooltip title="Lihat Gambar existing saat ini, klik Icon ini !" placement='right-start' >
                            <IconButton onClick={() => window?.open(`${process.env.REACT_APP_API_BASE_URL}/${imageUrl}`)}>
                                <ImageIcon />                                      
                            </IconButton>
                        </Tooltip>
                    )}
                </Stack>
            </Box> 
            {children}
        </>
    )
}

