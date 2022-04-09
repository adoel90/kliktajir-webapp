import { TextField, Box, Stack, Tooltip, IconButton } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';

export default ({register, children, errors, isEdit = false, imageUrl =''}) => {

    console.log('imageUrl : ', imageUrl)

    return (
        <>
            <Box sx={{mt:1}}>
                <TextField                            
                    label="Judul *"       
                    fullWidth    
                    {...register('title', {
                        required: true
                    })}    
                                       
                    InputLabelProps = {
                        isEdit ? { shrink: true } : {}
                    }       
                    helperText={errors?.title?.type === "required" && "Wajib di isi !"} 
                    error={errors?.title?.type === "required" ? true : false}                                 
                />                                
            </Box> 
            <Box sx={{mt:3}}>
                <Stack direction="row">
                    <TextField label="Upload Gambar *" type="file" fullWidth {...register('image', {required: isEdit ? false : true})}      
                        InputLabelProps={{
                            shrink: true,
                        }}
                        helperText={errors?.image?.type === "required" && "Wajib di isi !"} 
                        error={errors?.image?.type === "required" ? true : false}   
                    />
                    <Tooltip title="Lihat Gambar existing saat ini, klik Icon ini !" placement='right-start' >
                        <IconButton onClick={() => window?.open(`${process.env.REACT_APP_API_BASE_URL}/${imageUrl}`)}>
                            <ImageIcon />                                      
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Box> 

            <Box sx={{mt:3}}>
                <TextField label="Tanggal *" type="date"  fullWidth {...register('date', {required: true})} 
                    InputLabelProps={{
                        shrink: true,
                    }}
                    helperText={errors?.date?.type === "required" && "Wajib di isi !"} 
                    error={errors?.date?.type === "required" ? true : false}   
                />
            </Box> 

            <Box sx={{mt:3}}>
                <TextField 
                    label="Deskripsi *" 
                    fullWidth                 
                    multiline
                    rows={4}                  
                    {...register('description', {required: true})}
                    InputLabelProps = {
                        isEdit ? { shrink: true } : {}
                    }  
                    helperText={errors?.description?.type === "required" && "Wajib di isi !"} 
                    error={errors?.description?.type === "required" ? true : false}   
                />
            </Box> 
            
            {children}
        </>
    )
}